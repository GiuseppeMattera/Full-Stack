import AllertClock from "./components/AllertClock";
import Clock from "./components/Clock";
import Color from "./components/Color";
import Colors from "./components/Colors";
import Counter from "./components/Counter";
import FocusableInput from "./components/FocusableInput";
import Hello from "./components/Hello"
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";
import Message from "./components/Message";
import MouseClicker from "./components/MouseClicker";
import Prova from "./components/ProvaSvg";
import TodoList from "./components/TodoList";
import UncontrolledLogin from "./components/UncontrolledLogin";
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
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                <FocusableInput />
                <Color color={{id: 1, name: "Red"}} />
                <Colors colors={[
                    {id: 1, name: "Red"},
                    {id: 2, name: "Blue"},
                    {id: 3, name: "Green"},
                    {id: 4, name: "White"},
                ]} />
                <TodoList />
            </div>
        </>
    )
}

export default App;