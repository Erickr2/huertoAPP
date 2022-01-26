import React from 'react';

const Card = ({ header, title, description, onClick }) => {
	return (
		<>
			<div
				className='card text-white bg-dark mb-3 cartita text-center'
				style={{ maxWidth: '15rem', height: '15rem' }}
                onClick={onClick}
			>
				<div className='card-header py-2'>
					<h4 style={{height: 45}}>{ header }</h4>
				</div>
				<div className='card-body pb-5 mt-2'>
					<h6 className='card-title  pb-3'>{ title }</h6>
					<p className='card-text' style={{fontSize: 12}}>
						{ description }
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
