import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';


const app: Application = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)
app.use(globalErrorHandler)


app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'welcome to our server',
  });
  next();
});

export default app;
