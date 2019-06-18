//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

class IndecisionApp extends React.Component {
	render() {
		const title = "Indecision App";
		const subtitle = "Put your life in the hands of a computer.";
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<Option />
				<Option />
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>Option component here</div>;
	}
}

class AddOption extends React.Component {
	render() {
		return <div>AddOption component here</div>;
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
