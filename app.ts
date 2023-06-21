import express from 'express';
import { AppDataSource } from './appDataSource';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

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