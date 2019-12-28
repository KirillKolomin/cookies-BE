import express, {Application} from 'express';
import setCookieRouterToApplication from "./cookies";

const app: Application = express();
const port: number = 6821;

app.get('/', (req: any, res: any) => {
    res.send('Hello Worlds');
});

setCookieRouterToApplication(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
