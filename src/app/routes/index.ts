import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { categoryRoutes } from '../modules/category/category.route';
import { bookRoutes } from '../modules/book/book.route';
import { reviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.route';
import { orderRoutes } from '../modules/order/order.route';
import { orderedBookRoutes } from '../modules/orderedBook/orderedBook.route';
import { authRoutes } from '../modules/auth/auth.route';



const router = express.Router();

const moduleRoutes = [

  {
    path:"/auth",
    route: authRoutes

  },
  {
    path: "/users",
    route: userRoutes
  },
  {
    path:"/categories",
    route:categoryRoutes
  },
  {
    path:'/books',
    route:bookRoutes
  },
  {
    path:'/reviewAndRating',
    route:reviewAndRatingRoutes
  },
  {
    path:'/orders',
    route: orderRoutes
  },
  {
    path:'/ordered-book',
    route: orderedBookRoutes
  }
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;