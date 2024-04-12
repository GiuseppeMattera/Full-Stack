import { Age } from "./Age";
import { Message } from "./Message";

export function Welcome({ name="unknown user", age="unknown" }) { 
    return (
        <div className="welcome">
            <p>Welcome, <strong>{ name }</strong>!</p>
            <Age age={ age }/>
            {age > 18 && <Age age= { age }/>}
            {age && <Age age= { age }/>}
            {age > 18 && age < 65 && <Age age= { age }/>}
            {age > 18 && age < 65 && name === "John" && <Age age= { age }/>}
            <Message />
        </div>
    )
}