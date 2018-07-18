import { createStore, compose } from 'redux';

const initialState = {
    count: 0
};

/// First Event
const reducer = (state = initialState, action) => {
    console.log('reducer running', action);
    switch(action.type){

        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });

        case 'REDUCTION':
            return Object.assign({}, state, { count: state.count - 1 });

        case "RESET":
            return Object.assign({}, state, { count: state.count - state.count});

        default:
             return state;  

    }
};

const store = createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;