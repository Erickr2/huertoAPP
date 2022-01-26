import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { _createRecord } from '../api/huertoAPI';


const initialState = {
	fecha: '',
	temp: 0,
	hum: 80,
	alt: 0,
};
const errorState = {
	status: false,
	msg: '',
};

const alertState = {
	status: false,
	msg: '',
};

const useCreateRecord = () => {
	const history = useHistory();

	const [record, setRecord] = useState(initialState);
	const [idHarvest, setIdHarvest] = useState(0);
	const [nameHarvest, setNameHarvest] = useState('');
	const [error, setError] = useState(errorState);
	const [alert, setAlert] = useState(alertState);

	const { fecha, temp, hum, alt } = record;

	useEffect(() => {
		const { id_cos, nombre } = JSON.parse(localStorage.getItem('currentHarvest'));
		setIdHarvest(id_cos);
		setNameHarvest(nombre);
	}, []);

	const handleRedirectHome = () => history.push('/');

	const handleChange = e => {
		const {
			target: { name, value },
		} = e;
		setRecord({
			...record,
			[name]: name === 'fecha' ? value : parseInt(value),
		});
	};

	const handleSubmit = async () => {
		if (fecha === '' ) {
			setError({
				status: true,
				msg: 'Todos los campos son obligatorios.',
			});
			setTimeout(() => {
				setError(errorState);
			}, 1500);
			return;
		} else {
			const response = await _createRecord(idHarvest, record);
			if (response.error) {
				setError({
					status: true,
					msg: response.error,
				});
				return;
			} else {
				setAlert({
					status: true,
					msg: 'Se ha guardado con éxito el registro',
				});
				setTimeout(() => {
					setAlert(alertState);
					handleRedirectHome();
				}, 1500);
			}
		}
	};

	return {
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
	};
};

export default useCreateRecord;
