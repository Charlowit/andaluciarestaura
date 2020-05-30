import { CREATE_MESSAGE } from './types';

export const createMessages = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};