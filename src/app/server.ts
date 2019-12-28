import express from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: any, res: any) => {
    res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
