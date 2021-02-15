import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
    // const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter
    })

    return (
        <div>
            <h1>Counter : {counter}</h1>

            <button onClick={() => {
                // setCounter(counter + 1);
                dispatch({ type: "INCREMENT" })
            }}>
                Increment
            </button>

            <button onClick={() => {
                //setCounter(counter - 1);
                dispatch({ type: "DECREMENT" })
            }}>
                Decrement
            </button>

            <br />
            <br />
            <br />

            <input type="number" onChange={(e) => {
                setValue(e.target.value);
            }} ></input>

            {'   '}

            <button onClick={() => {
                //setCounter(counter + Number(value));
                dispatch({ type: "INCREMENT_BY_AMOUNT", payload: Number(value) })
            }}>Increment By Amount</button>
        </div>
    )
}
