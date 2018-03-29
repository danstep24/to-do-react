import React from "react";

export default ({ onChange, value }) => (
	<div className="input">
		<label>New Task</label>
		<input onChange={ onChange } value={ value } />
	</div>
)