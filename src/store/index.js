import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // With slices we can mutate previous state
        // since it handles the mutation for us
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increaseBy(state, action) { state.counter += action.payload },
        toggleCounter(state) { state.showCounter = !state.showCounter },
    }
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;