import React, {Component} from "react";

import Input from "./Input";

class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			input: props.input.slice(),
		}
		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault(); 
		let data = this.state.input;
		this.props.onSubmit(data);
	}



	change(e) {
		this.setState({ input: e.target.value});
	}
	
	render(){
		return(
			<form onSubmit={ this.submit }>
				<Input 
					onChange={ e => this.change(e)}
					value={this.state.value} />
				<button className="btn btn-success">Add Task</button>
			</form>
			//disable button if input field is empty

		)
	}

};
export default Form;