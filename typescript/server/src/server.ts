import connection from './database/connection.ts';
import socket from './configurations/socket.ts';
import server, {router} from './configurations/express.js';
import http from './configurations/http.js';

(async () => {
    try {
        await connection();

        socket.on('connection', (io) => {

        });

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        server.use('/api', router);

        server.all('*', (_, response) => {
            return response.status(404).json({message: 'route not found'});
        });

        http.listen(9060);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
})();