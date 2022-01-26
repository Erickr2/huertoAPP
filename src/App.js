import AppRouter from './router/AppRouter';

const App = () => {
	return (
		<div className='container bg-white mt-3 shadow-lg' style={styles.container}>
			<h1 className='text-center pt-4 text-muted'>Huerto App</h1>
			<AppRouter />
		</div>
	);
};

const styles = {
	container: {
		minHeight: '90vh',
		borderRadius: 50,

	},
};

export default App;
