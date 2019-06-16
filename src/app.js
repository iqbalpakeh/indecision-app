//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

console.log("App.js is running!");

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of computer",
	options: ["One", "Two"]
};

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

let count = 0;

const addOne = () => {
	count = count + 1;
	renderCounterApp();
};

const minusOne = () => {
	count = count - 1;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById("app");

/**
 * React doesn't have built-in data binding. Thus, if data change, we need
 * to rerender the application manually!!
 */
const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
