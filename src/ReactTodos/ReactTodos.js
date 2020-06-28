import React from 'react';
import '../App.scss';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			input: "",
			tasks: [],
			isClicked: []
		}
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	}

	addTask = () => {
		if (this.state.input.length) {
			this.setState({
				tasks: this.state.tasks.concat([this.state.input]),
				input: "",
				isClicked: this.state.isClicked.concat([false])
			});
		}
		else {
			alert('Invalid Task');
		}
	}

	onAddClick = () => {
		this.addTask();
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.addTask();
		}
	}

	onTaskClick = (index) => {
		let clicked = this.state.isClicked[index];
		let new_clicks = this.state.isClicked;
		new_clicks.splice(index, 1, !clicked);
		this.setState({ isClicked: new_clicks });
	}

	onDelClick = (index) => {
		let new_clicks = this.state.isClicked;
		let new_tasks = this.state.tasks;
		new_clicks.splice(index, 1);
		new_tasks.splice(index, 1);
		this.setState({
			tasks: new_tasks,
			isClicked: new_clicks
		});
	}


	render() {
		return (
			<div className="react-todos">
				<div className="whole" />
				<center>
					<p className="react-head">
						To-Do List
		    		</p>
					<div className="division">
						<input
							type="text"
							onChange={this.onInputChange}
							onKeyPress={this.handleKeyPress}
							placeholder="Add task"
							value={this.state.input} />
						<button
							onClick={this.onAddClick}>
							Add
			    		</button>
					</div>
					<ul className="division1">
						{
							this.state.tasks.map((data, index) => {
								return (
									<li className="flex justify-between" key={index}>
										<p
											className={this.state.isClicked[index] ? "line_through pointer task tl" : "pointer task tl"}
											onClick={() => this.onTaskClick(index)}>{data}</p>
										<button className="pointer dim w-30 delButton"
											onClick={() => this.onDelClick(index)}>Delete</button>
									</li>
								);
							})
						}
					</ul>
				</center>
			</div>
		);
	}
}

export default App;
