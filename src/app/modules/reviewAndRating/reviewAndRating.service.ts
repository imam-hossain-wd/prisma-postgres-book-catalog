import {ReviewAndRating }from '@prisma/client';
import prisma from '../../../shared/prisma';

const createReviewAndRating = async(data:ReviewAndRating): Promise<ReviewAndRating> => {
    console.log(data);
    const result = await prisma.reviewAndRating.create({
        data
    })
  console.log(result);
    return result;
    
}

const getAllReviewAndRatings = async(): Promise<ReviewAndRating[]> => {
    const result = await prisma.reviewAndRating.findMany();
    return result;
}


const getSingleReviewAndRating = async(id:string): Promise<ReviewAndRating | null> => {
    const result = await prisma.reviewAndRating.findUnique({
        where: {
            id
        }
    })
    return result;
}


const updateReviewAndRating = async(id:string,data: Partial<ReviewAndRating>): Promise<ReviewAndRating | null> => {
    const result = await prisma.reviewAndRating.update({
        where: {
            id
        },
        data
    });
    return result
}
const deleteReviewAndRating = async( id:string): Promise<ReviewAndRating | null> => {
    const result = await prisma.reviewAndRating.delete({
        where: {
            id
        }
    });
    return result
}




export const reviewAndRatingService = {
    createReviewAndRating,
    getAllReviewAndRatings,
    getSingleReviewAndRating,
    updateReviewAndRating,
    deleteReviewAndRating
}
