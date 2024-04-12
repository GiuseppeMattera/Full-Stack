import { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <input onChange={handleChange} value={name} />
            <Welcome name={name} />
        </>
    )
}

export default InteractiveWelcome;