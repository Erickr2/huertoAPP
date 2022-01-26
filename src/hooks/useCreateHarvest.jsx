import { useState } from 'react'
import { useHistory } from 'react-router';

import { _createHarvest } from '../api/huertoAPI';

const initialState = {
	nombre: '',
	fec_ini: '',
	fec_fin: '',
	no_plant: 0,
};
const errorState = {
	status: false,
	msg: '',
};

const alertState = {
	status: false,
	msg: '',
};

const useCreateHarvest = () => {

    const history = useHistory();

	const [harvest, setHarvest] = useState(initialState);
	const [error, setError] = useState(errorState);
	const [alert, setAlert] = useState(alertState);

	const { nombre, no_plant, fec_ini, fec_fin } = harvest;

	const handleChange = e => {
		const {
			target: { name, value },
		} = e;
		setHarvest({
			...harvest,
			[name]: name === 'no_plant' ? parseInt(value) : value,
		});
	};

	const handleSubmit = async () => {
		if (nombre === '' || no_plant === 0 || fec_ini === '' || fec_fin === '') {
			setError({
				status: true,
				msg: 'Todos los campos son obligatorios.',
			});
			setTimeout(() => {
				setError(errorState);
			}, 1500);
			return;
		} else {
			const response = await _createHarvest(harvest);
			if (response.error) {
				setError({
					status: true,
					msg: response.error,
				});
				return;
			} else {
				setAlert({
					status: true,
					msg: 'Se ha guardado con éxito la cosecha',
				});
				setTimeout(() => {
					setAlert(alertState);
					history.push('/');
				}, 1500);
			}
		}
	};

	const handleRedirectHome = () => history.push('/');

    return {
        nombre,
        no_plant,
        fec_ini,
        fec_fin,
        alert,
        error,
        handleChange,
        handleSubmit,
		handleRedirectHome
    }
}

export default useCreateHarvest
