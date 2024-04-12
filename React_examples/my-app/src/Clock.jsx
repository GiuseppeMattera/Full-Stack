import { useContext, useEffect, useState } from "react"
import LanguageContext from "./LanguageContext";

export function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const language = useContext(LanguageContext)

    return (
        <>
            <h3>
                {language === "en" ? `Current Time: ${date.toLocaleTimeString()}` : `Ora corrente: ${date.toLocaleTimeString()}`}
            </h3>
        </>
    )
}