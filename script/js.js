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
		let htmlStrin = "";
		for (const task of tasks) {
			htmlStrin += `
    <li>
    ${task.content}
    </li>
    `;
		}
		document.querySelector(".js-tasks").innerHTML = htmlStrin;
	};
	const init = () => {
		render();
	};
	init();
}
