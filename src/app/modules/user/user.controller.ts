import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createUser:RequestHandler = catchAsync(async(req, res)=> {
    const data = req.body;
    const result = await userService.createUser(data);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message: "user create successfully",
        data: result
    })
})

export const userController = {
    createUser
}