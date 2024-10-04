import connection from './database/connection.ts';
import io from './configurations/socket.ts';
import {router} from './configurations/express.js';
import http from './configurations/http.js';

(async () => {
    try {
        await connection();

        io.on('connection', (socket) => {

        });

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        http.listen(9060);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
})();