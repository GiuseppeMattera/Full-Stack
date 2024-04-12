const UncontrolledForm = () => {
    const handleLogin = (event) => {
		event.preventDefault()

		const username = event.target.elements.namedItem('username').value
		const password = event.target.elements.namedItem('password').value
		const session = event.target.elements.namedItem('session').checked

		console.log({ username, password, remember })
	}

    return (
        <>
            <h2>Uncotrolled Form</h2>
            <form onSubmit={handleLogin}>
                <input name="username" />
                <input name="password" />
                <input name="session" type="checkbox" />

                <button>Login</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}

export default UncontrolledForm;