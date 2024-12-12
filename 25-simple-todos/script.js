/**
 * Simple Todos
 *
 * STEP 1
 * Render the initial todos. Write code for adding a new todo when the user
 * submits the form. See pseudo-code below for help getting started!
 *
 * STEP 2
 * When a user clicks on a todo (listitem), find the todo and set it as completed.
 *
 * STEP 3
 * Add a button with the text "Toggle" to each listitem that **toggles** the
 * todo's status (if its `completed` is `true` then it should be set to `false`
 * and vice versa).
 *
 * STEP 4
 * Add another button to each listitem with the text "Delete" to each listitem
 * that deletes the todo.
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server and causing a page reload
	e.preventDefault();

	// Get title from input-field
	const newTodoTitle = inputNewTodoTitleEl.value.trim();

	// Abort if input is empty
	if (newTodoTitle === "") {
		alert("No todo for you!");
		return false;
	}

	// Create a new todo-object
	const newTodo = {
		title: newTodoTitle,
		completed: false,
	}

	// Add it to the todos-array
	todos.push(newTodo);

	// Render a representation of the updated todos-array
	renderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Listen for click-events on the todos list
todolistEl.addEventListener("click", (e) => {
	console.log("You clicked on either the whole list, or one of its children", e.target);

	if (e.target.tagName === "SPAN") {
		// User clicked on a listitem
		console.log("You clicked on the todo with title:", e.target.innerText);
		const clickedTodoTitle = e.target.innerText;

		// Search todos for the todo with the matching title
		const clickedTodo = todos.find((todo) => {
			return (todo.title === clickedTodoTitle);
		});
		console.log("Result from find:", clickedTodo);

		// If no todo was found, bail
		if (!clickedTodo) {
			return;
		}

		// Set completed to true on the found todo
		clickedTodo.completed = !clickedTodo.completed;

		// Re-render todos so the DOM reflects the current truth
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// User clicked on a button

		// Get parent element (which is the `<li>` element)
		const parentLiEl = e.target.parentElement;

		// From the parent element's POV, get the span-element
		const todoTitleEl = parentLiEl.querySelector("span");

		// Get the todo title from the innerText of the span
		const clickedTodoTitle = todoTitleEl.innerText;

		/*
		// Find index of todo in `todos` that has a matching title
		const clickedTodo = todos.find(todo => todo.title === clickedTodoTitle);
		const todoIndex = todos.indexOf(clickedTodo);
		todos.splice(todoIndex, 1);
		*/

		// Using filter to get all todos that are NOT matching the
		// title of the todo we want to remove
		todos = todos.filter((todo) => {
			return todo.title !== clickedTodoTitle;
		});

		// Render updated todos
		renderTodos();
	}
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Sort our todos before rendering them
	sortTodos();

	// Map over the todos-array and _transform_ each todo into a string
	todolistEl.innerHTML = todos
		.map((todo) => {
			// Create a new listitem for each todoitem
			// Any completed items should also have the `completed` CSS-class!

			// Which CSS classes should the LI have?
			const todoCssClass = todo.completed ? "list-group-item completed" : "list-group-item";

			// Append a new `<li>` to the todoList
			return `<li class="${todoCssClass}"> <span>${todo.title}</span> <button class="btn btn-danger btn-sm">Delete</button> </li>`;
		})  // Array [string, string, string, string]
		.join("");  // string
}

// Sort todos
const sortTodos = () => {
	// Sort by title
	todos.sort((a, b) => {
		return a.title.localeCompare(b.title, "sv");

		/*
		// Wont sort "å" before "ä" because of teckenkodning
		if (a.title.toLocaleLowerCase() < b.title.toLowerCase()) {
			return -1;
		}

		if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1;
		}

		return 0;
		*/
	});
}

// Render the initial representation of the todos-array
renderTodos();
