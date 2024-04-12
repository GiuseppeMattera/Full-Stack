import { StrictMode, useState } from "react"
import { AllertClock } from "./AllertClock"
import { Clock } from "./Clock"
import { Counter } from "./Counter"
import { HandleShowTime } from "./HandleShowTime"
import { Hello } from "./Hello"
import { Message } from "./Message"
import { Welcome } from "./Welcome"
import { MouseClicker } from "./MouseClicker"
import { FocusableInput } from "./FocusableInput"
import Color from "./Color"
import Colors from "./Colors"
import { TodoList } from "./TodoList"
import Container from "./Container"
import LanguageContext from "./LanguageContext"
import { GithubUser } from "./GithubUser"
import GithubUsersList from "./GithubUsersList"

export function App() {
    const [language, setLanguage] = useState("en")

    const handleSetLanguage = (language) => {
        setLanguage(language)
    }

    return (
        <div>
            <GithubUsersList />

            {/* <GithubUser username={'GiuseppeMattera'} /> */}
            
            {/* <button onClick={() => handleSetLanguage("en")}>EN</button>
            <button onClick={() => handleSetLanguage("it")}>IT</button> */}
            
            {/* <LanguageContext.Provider value={{language, handleSetLanguage}}>
                <p>Choose a language:</p>
                <select onChange={handleSetLanguage(event.target.value)}>
                    <option name="eng" value="en">EN</option>
                    <option name="ita" value="it">IT</option>
                </select>
                <Clock />
            </LanguageContext.Provider> */}

            {/* <Hello />
            <Hello /> 
            <Message /> 
            <Welcome name="John" age={30} />
            <AllertClock onClick={HandleShowTime} label={"Click me for the Current Time"} />
            <Counter initValue={8} incrementAmount={4} decrementAmount={2}/>
            <StrictMode><Clock /></StrictMode>
            <MouseClicker />
            <FocusableInput />
            <Color color={{id: 1, name: "Red"}} />
            <Colors colors={[
                {id: 1, name: "Red"},
                {id: 2, name: "Blue"},
                {id: 3, name: "Green"},
                {id: 4, name: "White"},
            ]} />
            <TodoList />
            <Container title="My-Container">
                <Hello />
                <Hello /> 
                <Message /> 
                <Welcome name="John" age={30} />
                <AllertClock onClick={HandleShowTime} label={"Click me for the Current Time"} />
                <Counter initValue={8} incrementAmount={4} decrementAmount={2}/>
            </Container> */}
        </div>
    )
}