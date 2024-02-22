import { useContext, useEffect, useState } from "react"
import LanguageContext from "../context/LanguageContext";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const language = useContext(LanguageContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [language])

    return (
        <>
            <h2>
                {
                    language === 'en' ?
                    `Current Time: ${date.toLocaleTimeString()}`
                    :
                    `Ora Corrente: ${date.toLocaleTimeString()}`
                }
            </h2>
        </>
    )
}

export default Clock;

// Build a Clock component that renders the current time within an h2 tag. 
// Use the useEffect hook to update the time every second.