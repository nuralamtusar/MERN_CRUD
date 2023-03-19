import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Route from './routes/route.js'
const server = express();

server.use(bodyParser.json({
    extended: true
}));
server.use(bodyParser.urlencoded({
    extended: true
}))

server.use(cors());
dotenv.config();
server.use('/', Route);

const PORT = 8080;

Connection();

server.listen(PORT, () => {
    console.log('Server started');
})