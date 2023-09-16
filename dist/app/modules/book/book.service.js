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
exports.bookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const book_constrants_1 = require("./book.constrants");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: {
            category: true
        }
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBooks = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, sortBy, sortOrder, searchTerm } = options;
    // const {minPrice, maxPrice,category}= filterData;
    // const mnprice= parseFloat(minPrice)
    // const mxprice= parseFloat(maxPrice)
    // const filteringData = {
    //     price:mnprice,
    //     category
    // }
    const bookSize = parseInt(size);
    const bookPage = parseInt(page);
    const skip = bookSize * bookPage - bookSize || 0;
    const take = bookSize || 10;
    const andConditons = [];
    if (searchTerm) {
        andConditons.push({
            OR: book_constrants_1.BookSearchAbleFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        });
    }
    // if (Object.keys(filteringData).length > 0) {
    //     andConditons.push({
    //         AND: Object.keys(filteringData).map((key) => ({
    //             [key]: {
    //                 equals: (filteringData as any)[key]
    //             }
    //         }))
    //     })
    // }
    const whereConditons = andConditons.length > 0 ? { AND: andConditons } : {};
    const result = yield prisma_1.default.book.findMany({
        where: whereConditons,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder }
    });
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id
        },
        data
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id
        }
    });
    return result;
});
exports.bookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};
