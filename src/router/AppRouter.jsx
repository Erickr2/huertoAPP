import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../index.css'
import MainView from '../views/MainView';
import CreateHarvest from '../views/CreateHarvest';
import HarvestRecord from '../views/HarvestRecord';
import UpdateHarvest from '../views/UpdateHarvest';
import CreateRecord from '../views/CreateRecord';
import ReportHarvest from '../views/ReportHarvest';

const routes = [
	{ path: '/', name: 'Inicio', Component: MainView },
	{ path: '/crear-cosecha', name: 'Crear Cosecha', Component: CreateHarvest },
    { path: '/actualizar-cosecha', name: 'Actualizar Cosecha', Component: UpdateHarvest },
    { path: '/cosecha', name: 'Encabezado de la Cosecha', Component: HarvestRecord },
	{ path: '/crear-registro', name: 'Registro de la Cosecha', Component: CreateRecord },
	{ path: '/reporte-cosecha', name: 'Reporte de la Cosecha', Component: ReportHarvest },
];

const AppRouter = () => {
	return (
		<Router>
			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={300}
							classNames='alert'
							unmountOnExit
						>
							<Component />
						</CSSTransition>
					)}
				</Route>
			))}
		</Router>
	);
};

export default AppRouter;
