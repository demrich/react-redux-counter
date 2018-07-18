import { createStore } from 'redux';

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
            return Object.assign({}, state, { count: 0});


        default:
             return state;  

    }
};

const store = createStore(reducer);

export default store;