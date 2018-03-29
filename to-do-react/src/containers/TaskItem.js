import { connect } from "react-redux";
import { deleteTask } from "../data/actions/api";
import TaskItem from "../components/TaskItem";
import { patchTaskComplete } from "../data/actions/api";


const mapDispatchToProps = (dispatch, { task }) => {
	return {
		onClick: () => dispatch(deleteTask(task.get("id"))),
		onClickComplete: () => dispatch(patchTaskComplete(task.get("id"))),
	};
};


export default connect (null, mapDispatchToProps)(TaskItem)