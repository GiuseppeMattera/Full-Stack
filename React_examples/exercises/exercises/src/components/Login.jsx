import { useState } from "react";

const Login = ({ onLogin }) => {
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

    const handleLogin = () => {
        console.log(data)

		onLogin(data)
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
            <h2>Login</h2>
            <input name="username" onChange={handleInputChange} value={data.username} />
            <input name="password" type="password" onChange={handleInputChange} value={data.password} />
            <input name="session" type="checkbox" onChange={handleInputChange} checked={data.session} />
            <button disabled={!data.username || !data.password} onClick={handleLogin}>Login</button>
            <button onClick={handleResetForm}>Reset</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default Login;