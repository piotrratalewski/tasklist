{
	const tasks = [
		{
			content: "zrobić zakupy",
			done: false,
		},
		{
			content: "wydać pieniądze",
			done: true,
		},
	];
	const render = () => {
		let htmlString = "";
		for (const task of tasks) {
			htmlString += `
    <li>
	${task.done ? (htmlString.innerHTML = "ok!") : ""}
	
    ${task.content}
    </li>
    `;
		}

		document.querySelector(".js-tasks").innerHTML = htmlString;
	};
	const onFormSubmit = event => {
		event.preventDefault();
		const newTaskContent = document.querySelector(".js-newTask").value.trim();
		if (newTaskContent === "") {
			return;
		}
		addNewTask(newTaskContent);
	};
	const addNewTask = newTaskContent => {
		tasks.push({
			content: newTaskContent,
		});
		render();
	};

	const init = () => {
		render();
		const form = document.querySelector(".js-form");
		form.addEventListener("submit", onFormSubmit);
	};
	init();
}
