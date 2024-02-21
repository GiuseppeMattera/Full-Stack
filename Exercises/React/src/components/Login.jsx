import { useState } from "react";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        session: false
    })

    const handleInputChange = (event) => {
        setData(data => {
            return {
                ...data,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
		console.log(data)
	}

	const handleResetForm = () => {
		setData({
			username: '',
			password: '',
			remember: false,
		})
	}

    return (
        <>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" name="username" 
                        onChange={handleInputChange} value={data.username} />
                <input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" name="password" 
                        type="password" onChange={handleInputChange} value={data.password} />
                <input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" name="session" type="checkbox" 
                        onChange={handleInputChange} checked={data.session} />
                <div>
                    <button onClick={handleLogin} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]' 
                    disabled={!data.username || !data.password}>Login</button>
                    <button onClick={handleResetForm} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center mb-2 w-[100px] h-[30px]' 
                    disabled={!data.username || !data.password}>Reset</button>
                </div>
            </form>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default Login;

// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
// All three inputs should be controlled components.

// Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

// Use the form element to handle the form's submission, and attach the handleLogin event handler to the onSubmit 
// event of the form element. How do you prevent the default behavior of the form element?