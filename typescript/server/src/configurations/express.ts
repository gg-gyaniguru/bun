import express, {Router} from 'express';
import cors from 'cors';

const server = express();
const router = Router();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

export default server;
export {router};