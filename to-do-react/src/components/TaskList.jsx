import React, { Component } from "react";
import TaskItem from "../containers/TaskItem";

class TaskList extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render(){
		const { tasks } = this.props;

		return(
			<div>
			{ tasks.map((task) => (

			<TaskItem key={task.get("id")} task={task}/>

			))} 
			</div>
		)
	}
};

export default TaskList;