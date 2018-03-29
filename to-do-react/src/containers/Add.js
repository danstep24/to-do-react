import { connect } from "react-redux";
import Add from "../components/Add";
import { postTask } from "../data/actions/api"

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch(postTask(data)),
	}
}

export default connect (null, mapDispatchToProps)(Add)