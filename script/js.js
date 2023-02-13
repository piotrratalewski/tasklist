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
	const init = () => {
		render();
		const form = document.querySelector(".js-form");
		form.addEventListener("submit", event => {
			event.preventDefault();
			const newTaskContent = document.querySelector(".js-newTask").value.trim();
			console.log(newTaskContent);
		});
	};
	init();
}
