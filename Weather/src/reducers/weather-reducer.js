import { FETCH_WEATHER } from '../actions';

export default function (state = [], action) {
    // console.log('Action received', action);

    switch (action.type) {
    case FETCH_WEATHER:
        // prepend new city data to existing array
        return [action.payload.data, ...state];
    }

    return state;
}