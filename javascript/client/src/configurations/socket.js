import {io} from 'socket.io-client';

const socket = io('http://localhost:9060/api');

export default socket;