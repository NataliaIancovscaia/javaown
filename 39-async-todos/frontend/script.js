/**
 * Async Todos
 *
 * STEG 1.
 * Skriv funktionen `fetchTodos()` som gör en GET-request till
 * `http://localhost:3001/todos`, översätter från JSON till JavaScript-array
 * och returnerar den.
 *
 * STEG 2.
 * Skriv funktionen `getAndRenderTodos()` som kallar på `fetchTodos()`, väntar på den
 * och tar datan och skriver över `todos`. Därefter kallar den på `renderTodos()`.
 *
 * STEG 3.
 * Ändra i click-handlern så att när man klickar på en knapp så skickas det en
 * DELETE-request till `http://localhost:3001/todos/<id>`, väntar på svaret och
 * därefter (om den lyckades) kallar på `getAndRenderTodos()`.
 *
 * STEG 4.
 * Gör en PATCH när man togglar en todo. Skicka med vad `completed` ska ha för
 * nytt värde.
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const completedTodolistEl = document.querySelector("#completed-todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");

// List of todos
let todos = [];

/**
 * Fetch all todos from the API and return them
 *
 */
const fetchTodos = async () => {
	const res = await fetch("http://localhost:3001/todos");
	if (!res.ok) {
		throw new Error(`Response was not OK. Status: ${res.status} ${res.statusText}`);
	}

	const data = await res.json();

	return data;
}

/**
 * Create a new todo in the API
 */
const createTodo = async (newTodo) => {
	// POST todo to the API
	const res = await fetch("http://localhost:3001/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTodo),
	});

	// Check that everything went ok
	if (!res.ok) {
		alert("Could not create todo! 🥺");
		console.log("Could not create todo:", res);
		return;
	}

	return res;
}

/**
 * Delete a todo from the API
 */
const deleteTodo = async (id) => {
	// DELETE todo from the API
	const res = await fetch("http://localhost:3001/todos/" + id, {
		method: "DELETE",
	});

	// Check that everything went ok
	if (!res.ok) {
		alert("Could not delete todo! 😇");
		console.log("Could not delete todo:", res);
		return;
	}

	return res;
}

/**
 * Update a todo in the API
 */
const updateTodo = async (id, data) => {
	// PATCH todo in the API
	const res = await fetch("http://localhost:3001/todos/" + id, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	// Check that everything went ok
	if (!res.ok) {
		alert("Could not update todo! 🤨");
		console.log("Could not update todo:", res);
		return;
	}

	return res;
}

/**
 * Invokes `fetchTodos`, updates our local copy `todos` and then
 * invokes `renderTodos`
 */
const getAndRenderTodos = async () => {
	// Call `fetchTodos()` to fetch the todos from the API
	const fetchedTodos = await fetchTodos();

	// Update our local copy of todos with the fetched todos
	todos = fetchedTodos;

	// Call `renderTodos()` to render the todos
	renderTodos();
}

// Render a representation of the todos-array to the DOM
const renderTodos = () => {
	// Sort our todos before rendering them
	sortTodos();

	// Map over the unfinished todos and _transform_ each todo into a string
	todolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed === false;
		})
		.map((todo) => {
			return `
				<li class="list-group-item" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>
			`;
		})
		.join("");

	// Map over the finished todos and _transform_ each todo into a string
	completedTodolistEl.innerHTML = todos
		.filter(todo => {
			return todo.completed;
		})
		.map((todo) => {
			return `
				<li class="list-group-item completed" data-todo-id="${todo.id}">
					<span>${todo.title}</span>
					<button class="btn btn-danger btn-sm">Delete</button>
				</li>
			`;
		})
		.join("");
}

// Sort todos
const sortTodos = () => {
	// Sort by title
	todos.sort((a, b) => {
		return a.title.localeCompare(b.title, "sv");
	});
}

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", async (e) => {
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

	// Ask the nice API to create a todo for us
	await createTodo(newTodo);

	// Get the updated list of todos
	getAndRenderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Get all todos lists and listen for clicks
document.querySelectorAll("ul.todos").forEach((listEl) => {

	// Listen for click-events on each todos list
	listEl.addEventListener("click", async (e) => {
		console.log("You clicked on either the whole list, or one of its children", e.target);

		if (e.target.tagName === "SPAN") {
			// User clicked on a listitem, get the todo id from parent `li`
			const clickedTodoId = Number(e.target.parentElement.dataset.todoId);

			// Search todos for the todo with the matching title
			const clickedTodo = todos.find((todo) => {
				return (todo.id === clickedTodoId);
			});
			console.log("Result from find:", clickedTodo);

			// If no todo was found, bail
			if (!clickedTodo) {
				return;
			}

			// Patch the todo in the API ❤️‍🩹
			await updateTodo(clickedTodoId, {
				completed: !clickedTodo.completed,
			});

			// Render updated todos
			getAndRenderTodos();

		} else if (e.target.tagName === "BUTTON") {
			// User clicked on a button, get the todo id from closest `li`
			const clickedTodoId = Number(e.target.closest("li").dataset.todoId);

			// Ask the nice API to delete this horrible, boring todo for us, mkai?
			await deleteTodo(clickedTodoId);

			// Render updated todos
			getAndRenderTodos();
		}
	});
});

// Render the initial representation of the todos-array
getAndRenderTodos();
