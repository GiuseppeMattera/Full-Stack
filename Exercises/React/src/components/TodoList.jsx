import { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([])

	const handleAddTodo = (event) => {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])
	}

    const handleResetTodos = () => {
		setTodos([])
	}

    const handleRemoveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

	return (
		<div>
			<form onSubmit={handleAddTodo} className="flex flex-row items-center">
				<input className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-2 m-2" 
                    data-testid="todo-input" name="todo" />
				<button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center w-[100px] h-[20px]' 
                    type="submit">
                        Add
                </button>
                <button className='text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 
                    hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center w-[100px] h-[20px]' 
                    onClick={handleResetTodos}>
                        Reset
                </button>
			</form>
			<ul data-testid="todo-list">
				{todos.map((todo, index) => (
                    <>
                        <div key={index} className="flex gap-2">
                            <li>{todo}</li>
                            <button onClick={() => handleRemoveTodo(index)} className="me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none 
                                bg-white rounded-lg border border-red-600 hover:bg-gray-100 hover:text-blue-700 
                                focus:z-10 focus:ring-4 focus:ring-gray-100">
                                REMOVE
                            </button>
                        </div>
                    </>
				))}
			</ul>
		</div>
	)
}

export default TodoList;

// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state 
// variable. The todos state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.

// Modify the TodoList component so that the input clears every time a Todo is added to the todos array. 
// Add a "reset" button that clears the todos array when clicked.

// Modify the TodoList by adding a "remove" button to each li tag.
// When clicked, the event handler should remove corresponding item from the todos array.