import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../Reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    ));

export default store;