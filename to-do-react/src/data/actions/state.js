export const setTasks = tasks => {
	return {
		type: "setTasks",
		tasks: tasks,
	};
};

export const addTask = task => {
	return {
		type: "addTask",
		task: task,
	};
};

export const delTask = id => {
	return {
		type: "delTask",
		id: id,
	}
}

export const setTaskComplete = id => {
	return {
		type: "setTaskComplete",
		id: id,
	}
}