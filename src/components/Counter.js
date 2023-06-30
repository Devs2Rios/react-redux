import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  /*
   * useSelector is a hook that allows you to access the state of the store.
   * Behind the scenes it executes the function passed to it and returns the value of the state.
   * It's automagically subscribed to the store, and updates the values reactively.
   * When the element is unmounted, the subscription is automatically unsubscribed.
   */
  const counter = useSelector(state => state.counter),
    showCounter = useSelector(state => state.showCounter),
    dispatch = useDispatch(), // We need to call the hook to use it
    incrementHandler = () => dispatch({ type: 'INCREASE' }),
    decrementHandler = () => dispatch({ type: 'DECREASE' }),
    increaseByHandler = () => dispatch({ type: 'INCREASE_BY', payload: 5 }),
    toggleCounterHandler = () => dispatch({ type: 'TOGGLE_COUNTER' });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
        <>
          <div className={classes.value}>{counter}</div>
          <div className={classes.actions}>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseByHandler}>Add 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
