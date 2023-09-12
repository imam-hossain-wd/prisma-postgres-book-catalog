import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { categoryRoutes } from '../modules/category/category.route';



const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes
  },
  {
    path:"/category",
    route:categoryRoutes
  }
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;