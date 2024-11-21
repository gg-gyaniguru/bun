import connection from './database/connection.ts';
import server, {router} from './configurations/express.ts';

(async () => {
    try {
        await connection();

        router.get('/', (_, response) => {
            return response.status(200).json({message: 'server is running'});
        });

        server.listen(9060);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
})();