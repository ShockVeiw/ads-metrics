import express from 'express';
import * as path from 'path';
import { AppDataSource } from './appDataSource';
import { router } from './routes/app.routes';

const app = express();
const port = 8080;

app.set('view engine','pug');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use(router);

AppDataSource.initialize()
    .then(() => {
        console.log("data source has been initialized")
        app.listen(port, () => {
            console.log(`server started at http://localhost:${ port }`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });