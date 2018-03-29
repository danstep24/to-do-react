import axios from "../../axios";
import { fromJS } from "immutable";

import { setTasks, addTask, delTask, setTaskComplete } from "./state";


export const getTasks = () => dispatch  => {
	axios.get("/tasks").then(response => {
		const tasks = fromJS(response.data);
		dispatch(setTasks(tasks));
	})
}

export const postTask = (data) => dispatch => {
	console.log(data);
	axios.post("/tasks", {
			task: data,
	}).then(response => {
		const task = fromJS(response.data);
		dispatch(addTask(task));
	});
};

 export const deleteTask = (id) => dispatch => {
	axios.delete("/tasks/"+id).then(response => {
 		dispatch(delTask(id));
 	})
 	
 };

 export const patchTaskComplete = (id) => dispatch => {
 	axios.patch("tasks/"+id+"/completed").then(response => {
 		dispatch(setTaskComplete(id));
 	})
 }