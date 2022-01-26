import React from 'react';

const Button = ({ title, typeButton, onClick, style, className }) => {
	return (
		<>
			<button
				type='button'
				className={`btn btn-${typeButton} btn-lg text-white my-2 ${className}`}
				style={{
					outline: 'none',
					border: 'none',
					textTransform: 'uppercase',
					...style
				}}
				onClick={onClick}
			>
				{title}
			</button>
		</>
	);
};


export default Button;
