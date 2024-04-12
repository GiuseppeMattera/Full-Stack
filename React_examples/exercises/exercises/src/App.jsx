import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";
import UncontrolledForm from "./components/UncontrolledForm";

const App = () => {
    return (
        <>
            <Login />
            <UncontrolledForm />
            <hr />
            <InteractiveWelcome />
        </>
    )
}

export default App;