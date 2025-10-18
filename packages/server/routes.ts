import express, { type Request, type Response } from 'express';
import { PrismaClient } from './generated/prisma';

const router = express.Router();


router.get("/api/products/:id/reviews", async (req: Request, res: Response) => {
    const client = new PrismaClient();
    const productId = Number(req.params?.id);

    if(isNaN(productId)) 
        res.status(400).json({error: "Invalid Product Id"})

    const reviews =  await client.review.findMany({
        where: {productId},
        orderBy: {createdAt: 'desc'}
    })

    res.json(reviews);

})

export default router;