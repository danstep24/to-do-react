import { connect } from "react-redux";
import { getTasks } from "../data/actions/api";

import TaskList from "../components/TaskList";

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getTasks())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);