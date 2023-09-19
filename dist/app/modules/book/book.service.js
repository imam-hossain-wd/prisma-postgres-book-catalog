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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const book_constrants_1 = require("./book.constrants");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBooks = (options, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, category } = filters, filterData = __rest(filters, ["searchTerm", "category"]);
    const { sortBy, sortOrder } = options;
    const minPrice = parseFloat(filterData === null || filterData === void 0 ? void 0 : filterData.minPrice);
    const maxPrice = parseFloat(filterData === null || filterData === void 0 ? void 0 : filterData.maxPrice);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: book_constrants_1.BookSearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        andConditions.push({
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
        });
    }
    else if (!isNaN(minPrice)) {
        andConditions.push({
            price: {
                gte: minPrice,
            },
        });
    }
    else if (!isNaN(maxPrice)) {
        andConditions.push({
            price: {
                lte: maxPrice,
            },
        });
    }
    if (category) {
        andConditions.push({
            categoryId: {
                equals: category,
            },
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.book.findMany({
        where: whereConditions,
        skip,
        take: size,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = yield prisma_1.default.book.count({
        where: whereConditions,
    });
    const totalPage = Math.ceil(total / size);
    return {
        data: result,
        meta: { page, size, total, totalPage },
    };
});
const getCategoryIdBook = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const page = 1;
    const size = 10;
    const skip = (page - 1) * size;
    const result = yield prisma_1.default.book.findMany({
        where: {
            categoryId: categoryId,
        },
        skip,
        take: size
    });
    const total = yield prisma_1.default.book.count({
        where: {
            categoryId: categoryId,
        },
    });
    const totalPage = Math.ceil(total / size);
    return {
        data: result,
        meta: { page, size, total, totalPage },
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.bookService = {
    createBook,
    getAllBooks,
    getCategoryIdBook,
    getSingleBook,
    updateBook,
    deleteBook,
};
