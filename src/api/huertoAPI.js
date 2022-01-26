import axiosClient from '../config/axios';

export const _createHarvest = async harvest => {
	try {
		const { data } = await axiosClient.post('/cosecha', harvest);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _getAllHarvest = async () => {
	try {
		const { data } = await axiosClient.get('/cosecha');
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _deleteHarvest = async id => {
	try {
		const { data } = await axiosClient.delete(`/cosecha/${id}`);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _updateHarvest = async (id, updatedHarvest) => {
	try {
		const { data } = await axiosClient.put(`/cosecha/${id}`, updatedHarvest);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _createRecord = async (id, record) => {
	try {
		const { data } = await axiosClient.post(`/registro/${id}`, record);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _getReportByIdHarvest = async id => {
	try {
		const { data } = await axiosClient.get(`/reporte-registros-diarios/${id}`);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};

export const _getReportHarvest = async id => {
	try {
		const { data } = await axiosClient.get(`/reporte-cosecha/${id}`);
		return data;
	} catch (error) {
		console.log('this is the error: ', error);
	}
};