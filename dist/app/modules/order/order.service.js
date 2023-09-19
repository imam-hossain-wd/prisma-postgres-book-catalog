"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const myOrder = async (token: any): Promise<Order[] | null> => {
//   if (!token) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
//   }
//   const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
//   const { id } = user;
//   console.log(user);
//   const result = await prisma.order.findMany({
//     where: {
//       userId: id,
//     },
//   });
//   console.log(result, 'result order');
//   return result;
// };
const getSingleOrder = (orderId, token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    const user = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    if (user.role === 'admin') {
        const order = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
        });
        return order;
    }
    if (user.role === 'customer') {
        const userOrder = yield prisma_1.default.order.findMany({
            where: {
                userId: user.id,
            },
        });
        const userOrderFound = userOrder.find(order => order.id === orderId);
        if (userOrderFound) {
            return userOrderFound;
        }
        else {
            return [];
        }
    }
    return [];
});
const getAllOrders = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    const user = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_secret);
    const { id, role } = user;
    if (role === 'admin') {
        const order = yield prisma_1.default.order.findMany();
        return order;
    }
    if (role === 'customer') {
        const userOrder = yield prisma_1.default.order.findMany({
            where: {
                userId: id,
            },
        });
        return userOrder;
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.orderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
    // myOrder,
};
