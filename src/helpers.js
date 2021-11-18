import {colours} from './colours.js';

export const trim = (str) => str.replace(/^\/+|\/+$/g, '');

export const respond = (response, message, code = 200) => {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(code);
    response.write(JSON.stringify(message));
    response.end();
}

export const errorMsg = (message) => {
    console.log(colours.red, message, colours.reset);
}

export const successMsg = (message) => {
    console.log(colours.green, message, colours.reset);
}
