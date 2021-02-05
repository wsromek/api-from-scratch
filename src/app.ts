import express, {Request, Response} from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    const name = "Wojtek";
    res.send(`Hello ${name}!`);
})

app.listen(3000, () => console.log('API listening on port 3000'));
