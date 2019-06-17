const appRoot = document.getElementById("app");

let buttonMessage = "Show details";

const onChangeState = () => {
	if (buttonMessage === "Show details") {
		buttonMessage = "Hide details";
	} else {
		buttonMessage = "Show details";
	}
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onChangeState}>{buttonMessage}</button>
			{buttonMessage === "Hide details" ? (
				<p>Here's some details for you!</p>
			) : (
				undefined
			)}
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
