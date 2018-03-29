const setTasks = (state, { tasks }) => state.set("tasks", tasks);
const addTask = (state, { task }) => state.update("tasks", tasks => tasks.push(task));
const delTask = (state, { id }) => state.update("tasks", tasks => tasks.filter(task => task.get("id") !== id));
const setTaskComplete = (state, { id }) => state.update("completed", true);

const reducer = (state, action) => {
	switch (action.type) {
		case "setTasks": return setTasks(state, action); 
		case "addTask": return addTask(state, action);
		case "delTask": return delTask(state, action);
		case "setTaskComplete": return setTaskComplete(state, action);
		default: return state;
	}
};

export default reducer;