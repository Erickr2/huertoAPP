import React from 'react';

const AlertGeneric = ({ typeAlert, text }) => {
	return (
		<div
			className={`alert alert-dismissible alert-${typeAlert} text-center my-4`}
			style={{ width: 400 }}
		>
			<strong>{text}</strong>
		</div>
	);
};

export default AlertGeneric;
