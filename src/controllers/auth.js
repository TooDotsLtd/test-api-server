import * as crypto from 'crypto';
import {respond} from '../helpers.js';

export const login = (response) => {
    const token = crypto.randomBytes(20).toString('hex');
    respond(response, {token});
}

export const register = (response) => {
    respond(response, {message: 'Success'});
}
