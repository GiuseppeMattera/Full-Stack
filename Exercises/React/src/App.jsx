import AllertClock from "./components/AllertClock";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Hello from "./components/Hello"
import Message from "./components/Message";
import MouseClicker from "./components/MouseClicker";
import Prova from "./components/ProvaSvg";
import Welcome from "./components/Welcome";

const App = () => {
    const HandleShowTime = () => {
        const date = new Date();
        alert(`Current Time: ${date.toLocaleTimeString()}`);
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <Hello />
                <Hello />
                <Message />
                <Welcome name={<strong>Giuseppe</strong>} age="30" />
                <AllertClock onClick={HandleShowTime} label={"Click me for the current time!"}/>
                <Counter />
                <Prova />
                <Clock />
                <MouseClicker />
            </div>
        </>
    )
}

export default App;