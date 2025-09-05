import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express();

const port = process.env.PORT || 3000;

const mongoServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTURL as string, {
            dbName: "Create, Read, Update, Delete Database"
        });
        console.log("MongoDB server connected.")
    }
    catch (error) {
        throw new Error("Not able to start mongo server.");
    }
}
mongoServer();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Server is here!" });
})

app.listen(port, () => {
    console.error(`Server is running here on PORT:${port}`);
})