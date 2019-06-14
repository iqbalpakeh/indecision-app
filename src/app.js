//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

console.log("App.js is running!");

var template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some information</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
			<li>Item Three</li>
		</ol>
	</div>
);

var templateTwo = (
	<div>
		<h1>Iqbal Pakeh</h1>
		<p>Age: 34</p>
		<p>Location: Singapore</p>
	</div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
