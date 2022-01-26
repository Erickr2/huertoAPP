import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from './Button';
import { _deleteHarvest } from '../api/huertoAPI';

const TableHarvest = ({ harvests, setHarvests }) => {
	const history = useHistory();

	const [currentHarvests, setCurrentHarvests] = useState(harvests);

	const deleteHarvest = async id => {
		const filteredHarvest = currentHarvests.filter(harvest => harvest.id_cos !== id);
		setCurrentHarvests(filteredHarvest);
		setHarvests(filteredHarvest);
		_deleteHarvest(id);
	};

	const updateHarvest = harvest => {
		localStorage.setItem('currentHarvest', JSON.stringify(harvest));
		history.push('/actualizar-cosecha');
	};

	const createRecord = harvest => {
		history.push('/crear-registro');
		localStorage.setItem('currentHarvest', JSON.stringify(harvest));
	};

	return (
		<>
			<div className='container px-5'>
				<div className='mx-2'>
					<table className='table table-primary table-responsive text-center'>
						<thead>
							<tr>
								<th scope='col'>Id</th>
								<th scope='col'>Nombre</th>
								<th scope='col'>Fecha Inicio</th>
								<th scope='col'>Fecha Fin</th>
								<th scope='col'>No. Plantas</th>
								<th scope='col'></th>
								<th scope='col'></th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{currentHarvests.map(harvest => (
								<tr className='table-secondary' key={harvest.id_cos}>
									<th scope='row'>{harvest.id_cos}</th>
									<td>{harvest.nombre}</td>
									<td>{harvest.fec_ini}</td>
									<td>{harvest.fec_fin}</td>
									<td>{harvest.no_plant}</td>
									<td>
										<Button
											title='eliminar'
											typeButton='danger'
											style={{ fontSize: 13, width: 110 }}
											onClick={() => deleteHarvest(harvest.id_cos)}
										/>
									</td>
									<td>
										<Button
											title='actualizar'
											typeButton='info'
											style={{ fontSize: 13 }}
											onClick={() => updateHarvest(harvest)}
										/>
									</td>
									<td>
										<Button
											title='registrar'
											typeButton='success'
											style={{ fontSize: 13 }}
											onClick={() => createRecord(harvest)}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TableHarvest;
