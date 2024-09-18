import connection from './database/connection.js';
import socket from './configurations/socket.js';
import server, {router} from './configurations/express.js';
import http from './configurations/http.js';

(async () => {
    try {
        await connection();

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        socket.on('connection', (io) => {

        });

        server.use('/api', router);

        server.all('*', (_, response) => {
            return response.status(404).json({message: 'route not found'});
        });

        http.listen(9060);
    } catch (error) {
        console.error(error.message);
    }
})();