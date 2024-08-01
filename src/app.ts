import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import postsRouter from './routes/posts';

const app = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});