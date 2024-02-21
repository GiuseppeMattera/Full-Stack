const UncontrolledLogin = () => {
	const onLogin = (event) => {
		event.preventDefault()

		const username = event.target.elements.namedItem('username').value
		const password = event.target.elements.namedItem('password').value
		const remember = event.target.elements.namedItem('remember').checked

		console.log({ username, password, remember })
	}

	return (
		<form onSubmit={onLogin}>
            <h2>Uncontrolled Login</h2>
			<input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" 
                    data-testid="username" name="username" />
			<input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" 
                    data-testid="password" name="password" />
			<input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" 
                    data-testid="remember" name="remember" type="checkbox" />
			<button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]'>
                        Login
            </button>
			<button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]' 
                    type="reset">
                        Reset
            </button>
		</form>
	)
}

export default UncontrolledLogin;

// Implement an UncontrolledLogin component that implements all the operations of the Login component, 
// but does so using uncontrolled components. Attempt to access the values of the form using the DOM API 
// by reading the event.target of the onSubmit event handler.