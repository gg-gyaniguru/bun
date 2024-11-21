import connection from './database/connection.js';
import server, {router} from './configurations/express.js';

(async () => {
    try {
        await connection();

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        server().listen(9060);
    } catch (error) {
        console.error(error.message);
    }
})();