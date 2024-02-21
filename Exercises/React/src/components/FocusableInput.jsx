import { useEffect, useRef } from 'react'

const FocusableInput = () => {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
			<input className='border-double border-4 border-sky-500 m-4' data-testid="one" name="one" ref={inputRef} />
		</div>
	)
}

export default FocusableInput;

// Create a FocusableInput component that renders an input tag. As soon as the component renders, 
// the input tag should be focused automatically.