import {routes} from '../routes.js';
import {trim, errorMsg, successMsg, respond} from './helpers.js';

export const router = (request, response) => {
    const found = routes.some(route => {
        const method = route.method ?? 'GET';
        const secure = route.secure ?? false;

        if (request.method === method &&
            trim(request.url) === trim(route.url)
        ) {
            if (secure) {
                const auth = request.headers.authorization;
                if (!(auth && auth.includes('Bearer '))) {
                    errorMsg('UNAUTHORIZED');
                    respond(response, {message: 'Unauthorized'}, 403);
                    return true;
                }
            }

            successMsg('FOUND');
            const path = route.controller.split('.');
            const file = `./controllers/${path[0]}.js`;
            const func = path[1];
            import(file).then(controller => controller[func](response));
            return true;
        }
    });

    if (!found) {
        errorMsg('NOT FOUND');
        respond(response, {message: 'Route not found'}, 404);
    }
}