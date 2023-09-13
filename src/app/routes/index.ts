import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { categoryRoutes } from '../modules/category/category.route';
import { bookRoutes } from '../modules/book/book.route';
import { reviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.route';
import { orderRoutes } from '../modules/order/order.route';



const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes
  },
  {
    path:"/category",
    route:categoryRoutes
  },
  {
    path:'/book',
    route:bookRoutes
  },
  {
    path:'/reviewAndRating',
    route:reviewAndRatingRoutes
  },
  {
    path:'/order',
    route: orderRoutes
  }
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;