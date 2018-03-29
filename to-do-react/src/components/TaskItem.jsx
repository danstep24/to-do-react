import React, { Component } from "react";


class TaskItem extends Component {
	
	render() {
		const {task, onClick, onClickComplete } = this.props;
		const styles = onClickComplete ? "completed" : "btn-success";
		return (
			<li className="listItem">
				<p>
					{ task.get("task") } 
				</p>
				<button type="button" onClick={ onClick } className="btn btn-danger">x</button>
				<button type="button" onClick={ onClickComplete } className={styles}>✓</button>
			</li>
		)
	}
}

export default TaskItem;