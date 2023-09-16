"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const reviewAndRating_route_1 = require("../modules/reviewAndRating/reviewAndRating.route");
const order_route_1 = require("../modules/order/order.route");
const orderedBook_route_1 = require("../modules/orderedBook/orderedBook.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.authRoutes
    },
    {
        path: "/user",
        route: user_route_1.userRoutes
    },
    {
        path: "/categories",
        route: category_route_1.categoryRoutes
    },
    {
        path: '/book',
        route: book_route_1.bookRoutes
    },
    {
        path: '/reviewAndRating',
        route: reviewAndRating_route_1.reviewAndRatingRoutes
    },
    {
        path: '/order',
        route: order_route_1.orderRoutes
    },
    {
        path: '/ordered-book',
        route: orderedBook_route_1.orderedBookRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
