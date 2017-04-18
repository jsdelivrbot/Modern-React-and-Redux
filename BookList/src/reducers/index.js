import {combineReducers} from 'redux';
import BooksReducer from './books-reducer';
import ActiveBook from './active-book-reducer';

// The rootReducer ties together the pieces of application
// state which is referenced by the object keys.
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
