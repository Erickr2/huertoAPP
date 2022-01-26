import React, { useEffect, useState } from 'react';
import { _getReportHarvest } from '../api/huertoAPI';


const ReportCard = ({ id }) => {
	const [reportHarvestDetail, setReportHarvestDetail] = useState({});

	const {
		nombre,
		fechaIni,
		fechaFin,
		noPlantas,
		registrosRealizados,
		temperaturaPromedio,
		humedadPromedio,
		alturaMaxima,
	} = reportHarvestDetail;

	useEffect(() => {
		getHarvestRecord();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getHarvestRecord = async () => {
		const { reporte } = await _getReportHarvest(id);
		setReportHarvestDetail(reporte[0]);
	};

	if (!reportHarvestDetail) return;

	return (
		<>
			<div className='container px-2 mt-2 d-flex justify-content-around text-center w-75 h-75'>
				<div className='card mr-5' style={{ width: '18rem', fontSize: 12 }}>
					<div className='card-header text-white'>Datos Principales</div>
					<ul className='list-group list-group-flush d-flex'>
						<li className='list-group-item'>
							Nombre: <strong>{nombre}</strong>
						</li>
						<li className='list-group-item'>
							# Plantas: <strong>{noPlantas}</strong>
						</li>
						<li className='list-group-item'>
							Fecha Inicio: <strong>{fechaIni}</strong>
						</li>
						<li className='list-group-item'>
							Fecha Fin: <strong>{fechaFin}</strong>
						</li>
					</ul>
				</div>
				<div className='card ml-5' style={{ width: '18rem', fontSize: 12 }}>
					<div className='card-header text-white'>Detalle de los registro</div>
					<ul className='list-group list-group-flush d-flex'>
						<li className='list-group-item'>
							Registros Realizados: <strong>{registrosRealizados}</strong>
						</li>
						<li className='list-group-item'>
							Temperatura Promedio: <strong>{temperaturaPromedio}°C</strong>
						</li>
						<li className='list-group-item'>
							Humedad Promedio: <strong>{humedadPromedio}%</strong>
						</li>
						<li className='list-group-item'>
							Altura Máxima: <strong>{alturaMaxima} cm</strong>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ReportCard;
