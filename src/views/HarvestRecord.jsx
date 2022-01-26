import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Button from '../components/Button';
import { _getAllHarvest } from '../api/huertoAPI';
import TableHarvest from '../components/TableHarvest';

const HarvestRecord = () => {
	const history = useHistory();
	const [harvests, setHarvests] = useState([]);

	useEffect(() => {
		getAllrecords();
	}, []);

	const getAllrecords = async () => {
		const { cosechas } = await _getAllHarvest();
		setHarvests(cosechas);
	};

	return (
		<div className=''>
			<h2 className=' text-center text-primary mb-4 pt-1'>
				Registra los datos de tu cosecha del día de hoy
			</h2>

			<div className='container' style={{ maxWidth: '90%' }}>
				{harvests.length === 0 ? (
					<>
						<div className='d-flex flex-column justify-content-center align-items-center'>
							<h4 className='text-center text-primary mt-5 pt-3'>
								No hay cosechas aún, crea una
							</h4>
							<Button
								typeButton='info'
								title='Crear una cosecha'
								onClick={() => history.push('/crear-cosecha')}
								style={{ width: '30%' }}
							/>
						</div>
					</>
				) : (
					<div className='mt-5'>
						<TableHarvest harvests={harvests} setHarvests={setHarvests} />
					</div>
				)}

				<div className='mt-5 pt-3 d-flex justify-content-center'>
					<Button
						typeButton='primary'
						title='Volver a menú principal'
						onClick={() => history.push('/')}
						style={{ width: '30%' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default HarvestRecord;
