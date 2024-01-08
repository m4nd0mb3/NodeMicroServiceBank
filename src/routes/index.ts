import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

router.get('/api/node/hello', (req, res) => {
    res.send('Hello from Node.js with TypeScript!');
});

export default router;
