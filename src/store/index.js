import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_COUNTER':
            return { ...state, showCounter: !state.showCounter }
        case 'INCREASE':
            return { ...state, counter: state.counter + 1 }
        case 'DECREASE':
            return { ...state, counter: state.counter - 1 }
        case 'INCREASE_BY':
            return { ...state, counter: state.counter + action.value }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;