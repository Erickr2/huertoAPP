import React from 'react';
import { Bar } from 'react-chartjs-2';

import Button from '../components/Button';
import ReportCard from '../components/ReportCard';
import AlertGeneric from '../components/AlertGeneric';
import useReportHarvest from '../hooks/useReportHarvest';



const ReportHarvest = () => {

	const {
        idCurrentHarvest,
        harvests,
        data,
		alert,
        options,
        viewReport,
        handleViewReport,
        handleRedirectHome,
    } = useReportHarvest();

	return (
		<>
			<div className='container'>
				{!viewReport ? (
					<>
						<h2 className=' text-center text-primary mb-5 pt-2'>
							Revisa los datos de tu cosecha
						</h2>

						<p className='text-muted text-center'>Selecciona una opción</p>

						<div className='container d-flex flex-column w-50 px-5'>
							{harvests.map(harvest => (
								<Button
									key={harvest.id_cos}
									typeButton='primary'
									title={harvest.nombre}
									onClick={() => handleViewReport(harvest.id_cos)}
								/>
							))}
							<Button
								typeButton='info'
								title='Volver a menú principal'
								className='mt-5'
								onClick={handleRedirectHome}
							/>
						</div>
					</>
				) : (
					<>
						<div className='container d-flex justify-content-center'>
							<Bar
								data={data}
								options={{
									...options,
									maintainAspectRatio: false,
								}}
								height={204}
								width={50}
							/>
						</div>

						<ReportCard id={idCurrentHarvest} />
						<div className='d-flex justify-content-center pt-2 pb-3'>
							<Button
								title='Volver a Menú principal'
								typeButton='info'
								onClick={handleRedirectHome}
							/>
						</div>
					</>
				)}
				{alert.status && (
					<div className='d-flex justify-content-center pt-2 pb-3'>
						<AlertGeneric typeAlert='danger' text={alert.msg} />
					</div>
				)}
			</div>
		</>
	);
};

export default ReportHarvest;
