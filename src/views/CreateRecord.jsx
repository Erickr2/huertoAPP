import React from 'react';
import AlertGeneric from '../components/AlertGeneric';

import Button from '../components/Button';
import useCreateRecord from '../hooks/useCreateRecord';

const CreateRecord = () => {
	const {
		temp,
		hum,
		alt,
		fecha,
		nameHarvest,
		alert,
		error,
		handleChange,
		handleSubmit,
		handleRedirectHome,
	} = useCreateRecord();

	return (
		<>
			<div className='container'>
				<h2 className=' text-center text-primary mb-1 pt-2'>
					Captura los datos de tu cosecha del día de hoy
				</h2>

				<div className='d-flex flex-column justify-content-center align-items-center'>
					<div className='form-group my-0 mb-1'>
						<label forname='nombre' className='text-primary'>
							Cosecha:
							<strong> {nameHarvest} </strong>
						</label>
					</div>
					<form
						className='p-4 d-flex shadow bg-primary'
						style={{
							maxWidth: '35rem',
							border: '2px solid #393F44',
							borderRadius: 30,
						}}
					>
						<div className='m-0 py-1 d-flex  justify-content-between align-items-center text-center'>
							<div>
								<div className='form-group mb-1'>
									<label
										forname='nombre'
										className='text-light'
										style={{ fontSize: 12 }}
									>
										Fecha Actual
									</label>
									<input
										className='form-control text-muted bg-white text-center'
										type='date'
										name='fecha'
										value={fecha}
										onChange={handleChange}
									/>
								</div>
								<div className='form-group my-1'>
									<label
										forname='nombre'
										className='text-light'
										style={{ fontSize: 12 }}
									>
										Temperatura °C
									</label>
									<input
										className='form-control text-muted bg-white text-center'
										type='number'
										min='0'
										increment='1'
										placeholder='28'
										name='temp'
										value={temp}
										onChange={handleChange}
									/>
								</div>
								<div className='form-group my-1'>
									<label
										forname='nombre'
										className='text-light'
										style={{ fontSize: 13 }}
									>
										Humedad %
									</label>
									<input
										className='form-control text-muted bg-white text-center'
										type='number'
										min='0'
										increment='1'
										placeholder='80'
										name='hum'
										value={hum}
										onChange={handleChange}
									/>
								</div>
								<div className='form-group my-1'>
									<label
										forname='nombre'
										className='text-light'
										style={{ fontSize: 13 }}
									>
										Altura cm
									</label>
									<input
										className='form-control text-muted bg-white text-center'
										type='number'
										min='0'
										increment='1'
										placeholder='5'
										name='alt'
										value={alt}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</form>

					{alert.status && (
						<AlertGeneric typeAlert='success' text={alert.msg} />
					)}

					{error.status && <AlertGeneric typeAlert='danger' text={error.msg} />}

					<div className='d-flex justify-content-between mt-2'>
						<Button
							title='Regresar'
							typeButton='danger'
							onClick={handleRedirectHome}
							className='m-3'
						/>
						<Button
							title='guardar'
							typeButton='success'
							onClick={handleSubmit}
							className='m-3'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateRecord;
