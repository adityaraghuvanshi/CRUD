import express, { NextFunction, Request, Response } from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Server is here!" });
})

app.listen(port, () => {
    console.error(`Server is running here on PORT:${port}`);
})