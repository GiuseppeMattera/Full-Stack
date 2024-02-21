const MouseClicker = () => {
	const handleButtonClick = (event) => {
		console.log(event.target.name)
	}

    const handleImgClick = (event) => {
        console.log(event.currentTarget.src);
    }

	return (
		<div>
			<button name="button_name" className="flex flex-row items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 
            to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-fit 
            h-fit px-4 py-2 gap-2 text-black" onClick={handleButtonClick}>
                Click me
                <img onClick={handleImgClick} width={30} height={30} 
                    src='https://www.svgrepo.com/show/306646/react.svg' />
			</button>
		</div>
	)
}

export default MouseClicker;

// Create a MouseClicker component that contains a button with a name attribute set to the "one" string.
// Attach an event handler to the button that prints the name prop to the console when clicked by reading 
// the event.target.name property.

// Add an image inside the button and add an onClick event handler to it that prints the src of the image to 
// the console. How can you prevent the name attribute of the button from being printed to the console when 
// the image is clicked?