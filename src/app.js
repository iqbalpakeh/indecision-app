//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ["Thing one", "Thing two", "Thing three"]
		};
	}
	render() {
		const title = "Indecision App";
		const subtitle = "Put your life in the hands of a computer.";

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} />
				<Options options={this.state.options} />
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
	handlePick() {
		alert("handlePick");
	}

	render() {
		return (
			<div>
				<button onClick={this.handlePick} disabled={!this.props.hasOptions}>
					What should I do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{this.props.options.map(option => (
					<Option key={option} optionText={option} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>{this.props.optionText}</div>;
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if (option) {
			alert(option);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
