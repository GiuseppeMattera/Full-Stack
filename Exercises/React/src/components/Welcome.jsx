import Age from "./Age";
import Message from "./Message";

const Welcome = ({ name = 'unknown user', age= 'unknown' }) => {
	return (
		<div>
            <p>Welcome, <strong>{ name }</strong>!</p>
            <Age age={ age }/>
            {age > 18 && <Age age= { age }/>}
            {age && <Age age= { age }/>}
            {age > 18 && age < 65 && <Age age= { age }/>}
            {age > 18 && age < 65 && name === "John" && <Age age= { age }/>}
            <Message />
        </div>
	);
}

export default Welcome;

// Create a Welcome function component that receives a name prop and renders the Welcome, {name}! message within a p tag.
// Render this component to you App component, passing it a name prop of your choosing.
// What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?

// Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
// Modify the value passed to the name prop so that it's contained within a strong tag.

// Modify the Welcome component so that the Age component is rendered 5 times. For every time use conditional rendering with one of the following conditions:
// - The Age component is rendered only if the age prop is greater than 18.
// - The Age component is rendered only if the age prop is present.
// - The Age component is rendered only if the age prop is greater than 18 and less than 65.
// - The Age component is rendered only if the age prop is greater than 18, less than 65 and the name prop is equal to "John".