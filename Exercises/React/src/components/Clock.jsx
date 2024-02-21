import { useEffect, useState } from "react"

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h2>Current Time: {date.toLocaleTimeString()}</h2>
        </>
    )
}

export default Clock;

// Build a Clock component that renders the current time within an h2 tag. 
// Use the useEffect hook to update the time every second.