import express from 'express';
import path from 'path';
import bodyParser from 'bodyParser';

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());

