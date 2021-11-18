import * as http from 'http';
import {router} from './src/helpers.js';

const PORT = 8888;

const server = http.createServer(
    async (request, response) => {
        process.stdout.write(
            `   ⚡︎ Incoming request ${request.method} ${request.url}... `
        );
        router(request, response);
    }
);

server.listen(PORT, () => {
    console.log('💥 API Server v1.0 © TooDots Ltd 2021')
    console.log(`   ⚡︎ Server started on port: ${PORT} ...`);
});
