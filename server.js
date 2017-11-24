import Express from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Http from 'http';
import Path from 'path';
import DotENV from 'dotenv';

DotENV.config();
const env = process.env.NODE_ENV;
const port = process.env.PORT;
const publicUrl = process.env.PUBLIC_URL;

const app = Express();

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(Express.static(Path.resolve(__dirname, 'build'), {maxAge: 31557600000}));


app.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, 'build', publicUrl, 'index.html'));
});
Http.createServer(app).listen(port, () => {
    console.log(`App listening on ${port}!`);
});