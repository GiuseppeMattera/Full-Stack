import Hello from "./components/Hello"
import Message from "./components/Message";
import Welcome from "./components/Welcome";

const App = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <Hello />
                <Hello />
                <Message />
                <Welcome name={<strong>Giuseppe</strong>} age="30" />
            </div>
        </>
    )
}

export default App;