import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // With slices we can mutate previous state
        // since it handles the mutation for us
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increaseBy(state, action) { state.counter += action.payload },
        toggleCounter(state) { state.showCounter = !state.showCounter },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;