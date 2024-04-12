import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initValue = 0, incrementAmount = 1, decrementAmount = incrementAmount }) {
    const [ counter, setCounter ] = useState(initValue);
    const refCounter = useRef("");

    useEffect(() => {
        if(counter > initValue) {
            refCounter.current = "up";
            console.log(refCounter.current);
        }
        
        if(counter < initValue) {
            console.log("down");
        }
    })
    
    

    function handleCounterIncrement() {
        setCounter((counter) => counter + incrementAmount)
    }

    function handleCounterDecrement() {
        setCounter((counter) => counter - decrementAmount)
    }

    function handleCounterReset() {
        setCounter(initValue)
    }

    return (
        <>
            <CounterDisplay count={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </>
    )
}