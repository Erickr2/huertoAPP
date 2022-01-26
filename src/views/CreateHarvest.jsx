import React from 'react';

import Button from '../components/Button';
import AlertGeneric from '../components/AlertGeneric';
import useCreateHarvest from '../hooks/useCreateHarvest';

const CreateHarvest = () => {
	const {
		nombre,
		no_plant,
		fec_ini,
		fec_fin,
		alert,
		error,
		handleChange,
		handleSubmit,
		handleRedirectHome
	} = useCreateHarvest();

	return (
		<>
			<div className='container'>
				<h2 className=' text-center text-primary mb-5 pt-2'>
					Captura tu nueva cosecha
				</h2>

				<div className='d-flex flex-column justify-content-center align-items-center'>
					<form
						className='p-4 d-flex flex-column shadow bg-primary'
						style={{
							maxWidth: '35rem',
							border: '2px solid #393F44',
							borderRadius: 30,
						}}
					>
						<div className='m-0 p-2 d-flex justify-content-between'>
							<div className='form-group'>
								<label forname='nombre' className='text-light'>
									Nombre de Cosecha
								</label>
								<input
									className='form-control text-muted'
									type='text'
									placeholder='Cosecha #1'
									name='nombre'
									value={nombre}
									onChange={handleChange}
								/>
							</div>

							<div className='form-group'>
								<label forname='no_plant' className='text-light'>
									Numero de plantas en tu cosecha
								</label>
								<input
									className='form-control text-muted'
									type='number'
									min='1'
									increment='1'
									placeholder='15'
									name='no_plant'
									value={no_plant === 0 ? '' : no_plant}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className='m-0 p-2 d-flex justify-content-between'>
							<div className='form-group'>
								<label forname='fec_ini' className='text-light'>
									Fecha Inicio
								</label>
								<input
									className='form-control text-muted'
									style={{ maxWidth: 200 }}
									type='date'
									placeholder='01/05/2021'
									name='fec_ini'
									value={fec_ini}
									onChange={handleChange}
								/>
								<small className='form-text text-muted'>
									Es cuando inicia el seguimiento de tu cosecha.
								</small>
							</div>

							<div className='form-group'>
								<label forname='fec_fin' className='text-light'>
									Fecha Fin
								</label>
								<input
									className='form-control text-muted'
									type='date'
									placeholder='31/05/2021'
									name='fec_fin'
									value={fec_fin}
									onChange={handleChange}
								/>
								<small className='form-text text-muted'>
									Aquí finaliza el seguimiento de tu cosecha.
								</small>
							</div>
						</div>
						<div className='d-flex justify-content-around'>
							<Button
								title='Regresar'
								typeButton='danger'
								onClick={handleRedirectHome}
							/>
							<Button
								title='guardar'
								typeButton='success'
								onClick={handleSubmit}
							/>
						</div>
					</form>

					{alert.status && <AlertGeneric typeAlert='success' text={alert.msg} />}

					{error.status && <AlertGeneric typeAlert='danger' text={error.msg} />}
				</div>
			</div>
		</>
	);
};

export default CreateHarvest;
