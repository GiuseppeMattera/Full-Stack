import { useState } from 'react'

export const TodoList = () => {
	const [todos, setTodos] = useState([])

	const handleAddTodo = (event) => {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])

		event.target.elements.todo.value = ''
	}

	const handleResetTodos = () => {
		setTodos([])
	}

	return (
		<>
			<form onSubmit={handleAddTodo}>
				<input data-testid="todo-input" name="todo" />
				<button type="submit">Add</button>
			</form>
			<button onClick={handleResetTodos}>Reset</button>

			<ul data-testid="todo-list">
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</>
	)
}
