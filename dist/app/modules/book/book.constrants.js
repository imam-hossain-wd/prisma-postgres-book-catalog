"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFieldsMapper = exports.BookFilterableFields = exports.BookSearchAbleFields = void 0;
exports.BookSearchAbleFields = ['title', 'author', 'genre'];
exports.BookFilterableFields = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'category'
];
exports.bookRelationalFieldsMapper = {
    category: 'category',
};
