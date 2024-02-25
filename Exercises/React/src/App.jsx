import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AllertClock from "./components/AllertClock";
import Clock from "./components/Clock";
import Color from "./components/Color";
import Colors from "./components/Colors";
import Container from "./components/Container";
import Counter from "./components/Counter";
import FocusableInput from "./components/FocusableInput";
import GithubUsersList from "./components/GitHubUserList";
import Hello from "./components/Hello"
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";
import Message from "./components/Message";
import MouseClicker from "./components/MouseClicker";
import Prova from "./components/ProvaSvg";
import TodoList from "./components/TodoList";
import UncontrolledLogin from "./components/UncontrolledLogin";
import Welcome from "./components/Welcome";
import LanguageContext from "./context/LanguageContext";
import GitHubUser from "./components/GithubUser";
import CurrentLocation from "./components/CurrentLocation";
import WelcomeRoutes from "./components/WelcomeRoutes";
import ShowGithubUser from "./components/ShowGithubUser";

const App = () => {
    const [language, setLanguage] = useState('en');

    const handleSetLanguage = (language) => {
        setLanguage(language);
    }

    const HandleShowTime = () => {
        const date = new Date();
        alert(`Current Time: ${date.toLocaleTimeString()}`);
    }

    return (
        <>
            <div className="flex flex-col gap-4 ml-6">
                <Hello />
                <Hello />
                <Message />
                <Welcome name={<strong>Giuseppe</strong>} age="30" />
                <AllertClock onClick={HandleShowTime} label={"Click me for the current time!"}/>
                <Counter />
                <Prova />
                <button onClick={() => handleSetLanguage('it')} className="w-fit px-3 py-2 text-xs font-medium 
                        text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
                        focus:ring-4 focus:outline-none focus:ring-blue-300">
                            ITA
                </button>
                <button onClick={() => handleSetLanguage('en')} className="w-fit px-3 py-2 text-xs font-medium 
                        text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                        focus:ring-4 focus:outline-none focus:ring-blue-300">
                            ENG
                </button>
                <LanguageContext.Provider value={language}>
                    <Clock />
                </LanguageContext.Provider>
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
                <Container title={"Titolo Casuale"} 
                    children={<p>Clicca sul titolo per far scomparire questo paragrafo</p>}/>
                <GithubUsersList />
                <GitHubUser username={"GiuseppeMattera"} />
                <CurrentLocation />
                <BrowserRouter>
                    <Link to="/">Click for the Welcome!</Link>
                    <Link to="/counter">Click for the counter!</Link>
                    <Link to="/users/GiuseppeMattera">Click for the user!</Link>
                    <Routes>
                        <Route path="/" element={<WelcomeRoutes name="Jimmy" />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/users/:username" element={<ShowGithubUser />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;