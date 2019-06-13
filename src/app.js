//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

console.log("App.js is running!");

// JSX - Javascript XML
var template = <p>Does this change?</p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
