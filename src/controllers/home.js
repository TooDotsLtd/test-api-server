import {respond} from '../helpers.js';

export const index = (response) => {
    respond(
        response,
        {message: 'Welcome to Test API'}
    );
}
