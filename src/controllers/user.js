import {respond} from '../helpers.js';

export const show = (response) => respond(response, {
    id: 'aaaa-bbbb-cccc-dddd',
    first_name: 'John',
    last_name: 'Doe',
    type: 'client',
});
