import Message from "./Message";

const Hello = () => {
    return (
        <>
            <div className="flex flex-col">
                <h2>Hello, World!</h2>
                <Message />
            </div>
        </>
    )
}

export default Hello;


// Create a new React application with vite and remove all the files within the src folder. 
// Inside src folder create a Hello function component that renders the "Hello, World!" message within an h2 tag.
// Write a function component called App that renders the Hello component within a div tag.
// Create a new index.jsx file within the src folder and render the App component using the 
// createRoot function and the render method on the created root's object.
// Start the application with the npm run dev command and open the application in your browser 
// (the default location is http://localhost:5173).