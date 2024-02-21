import { useState } from 'react'

const Welcome = ({ name }) => {
	return <p>Hello, {name}!</p>
}

const InteractiveWelcome = () => {
	const [name, setName] = useState('')

	function handleChange(event) {
		setName(event.target.value)
	}

	return (
		<div className='mb-4'>
			<input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5" 
            onChange={handleChange} value={name} />
			<Welcome name={name} />
		</div>
	)
}

export default InteractiveWelcome;


// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. 
// The input tag should be a controlled component.