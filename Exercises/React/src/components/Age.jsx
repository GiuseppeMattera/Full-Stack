const Age = ({ age }) => {
    return (
        <>
            {
                age > 18 ? <p>Your age is {age}</p> : <p>You are very young</p>
            }
        </>
    )
}

export default Age;

// Starting from the last props exercise, modify the Age component so that the "Your age is " 
// message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.