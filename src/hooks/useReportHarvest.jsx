import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

import { _getAllHarvest, _getReportByIdHarvest } from '../api/huertoAPI';

const reportState = {
	dates: [],
	temperatures: [],
	dampness: [],
	heights: [],
};

const alertState = {
	status: false,
	msg: '',
};

const useReportHarvest = () => {
    const history = useHistory();

	const [harvests, setHarvests] = useState([]);
	const [viewReport, setViewReport] = useState(false);
	const [reportHarvest, setReportHarvest] = useState(reportState);
	const [data, setData] = useState({});
	const [idCurrentHarvest, setIdCurrentHarvest] = useState(0);
	const [alert, setAlert] = useState(alertState);

	const { dates, temperatures, dampness, heights } = reportHarvest;

	useEffect(() => {
		getAllrecords();
	}, []);

	useEffect(() => {
		setData({
			labels: dates,
			datasets: [
				{
					label: 'Temperatura',
					data: temperatures,
					backgroundColor: 'rgb(255, 99, 132)',
				},
				{
					label: 'Humedad',
					data: dampness,
					backgroundColor: 'rgb(54, 162, 235)',
				},
				{
					label: 'Altura',
					data: heights,
					backgroundColor: 'rgb(75, 192, 192)',
				},
			],
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reportHarvest]);

	const handleRedirectHome = () => history.push('/');

	const getAllrecords = async () => {
		const { cosechas } = await _getAllHarvest();
		setHarvests(cosechas);
	};

	const handleViewReport = async id => {
		setIdCurrentHarvest(id);

		const { reporte } = await _getReportByIdHarvest(id);

		if (!reporte) {
			setAlert({
				status: true,
				msg: 'No hay registros todavía, ingresa alguno para ver mas información',
			});

			setTimeout(() => {
				setAlert(alertState);
			}, 1500);
			return;
		} else {
			const dates = reporte.map(report => report.fecha);
			const temperatures = reporte.map(report => report.temperatura);
			const dampness = reporte.map(report => report.humedad);
			const heights = reporte.map(report => report.altura);

			setReportHarvest({
				dates,
				temperatures,
				dampness,
				heights,
			});
			setViewReport(true);
		}
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
    return {
        idCurrentHarvest,
        harvests,
		alert,
        data,
        options,
        viewReport,
        handleViewReport,
        handleRedirectHome,
    }
}

export default useReportHarvest
