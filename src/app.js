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

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
