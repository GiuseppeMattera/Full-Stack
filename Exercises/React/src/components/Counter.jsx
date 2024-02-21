import { useEffect, useRef, useState } from 'react'
import CounterDisplay from './CounterDisplay'

const Counter = ({ initialValue = 0, incrementAmount = 1, decrementAmount = incrementAmount }) => {
	const [counter, setCounter] = useState(initialValue);
    const refCounter = useRef("");

    useEffect(() => {
        if(counter > initialValue) {
            refCounter.current = "up";
            console.log(refCounter.current);
        }
        
        if(counter < initialValue) {
            console.log("down");
        }
		console.log(counter);
	}, [counter]);

	function handleIncrement() {
		setCounter((c) => c + incrementAmount)
	}

    function handleDecrement() {
        setCounter((counter) => counter - decrementAmount)
    }

    function handleReset() {
        setCounter(initialValue)
    }

	return (
		<>
			<CounterDisplay count={counter}/>
			<button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
            hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]'
            onClick={handleIncrement}>
                    Increment
            </button>
			<button className='text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 
            hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]'
            onClick={handleDecrement}>
                    Decrement
            </button>
			<button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
            hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]'
            onClick={handleReset}>
                    Reset
            </button>
		</>
	)
}

export default Counter;

// Create a Counter function component and create a new state variable called counter initialized to 0. 
// The Counter component should render the counter value within an h2 tag, and the counter value should be 
// incremented every time the user clicks on a button.
// Tip: use the useState hook. Make it so that the initial value of the counter and the increment amount 
// are passed as props to the component. When calling "setter" function to increment the counter, should 
// the parameter be a function or an immediate value? Why?

// An **immediate value** when the next state does NOT depend on the previous state.
// A **function** when the next state depends on the previous state.

// Extract the h2 tag showing the counter state variable into a new component called CounterDisplay and render 
// it within the Counter component, passing it the count state variable as a prop.
// Add a decrement button and a reset button to the Counter component. The decrement button should decrement 
// the counter by the amount passed as a prop, and the reset button should reset the counter to the initial 
// value passed as a prop.

// Add a side effect to the Counter component from State - 1 exercise that prints the current value 
// of the counter inside of the console.

// Add a side effect to the Counter component from State - 1 exercise that prints the current value 
// of the counter inside of the console.

// Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated 
// to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop.
// Print the value of the ref to the console only when it's different from the previous value.

