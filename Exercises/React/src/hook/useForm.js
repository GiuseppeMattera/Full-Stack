import { useState } from 'react'

export function useForm(initialValue = {}) {
	const [data, setData] = useState(initialValue ?? {})

	function handleInputChange(event) {
		const { name, value, type, checked } = event.target
		setData((data) => {
			return {
				...data,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	return [data, handleInputChange]
}


// Create a custom hook that keeps track of the state of a controlled form with the username and password 
// inputs, and returns the current value of the inputs as well as an event handler to update either input.