import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const getAllComplaints = () => axios.get(`${API_URL}/complaints`);
export const createComplaint = (complaint) => axios.post(`${API_URL}/complaints`, complaint);
export const getComplaintById = (id) => axios.get(`${API_URL}/complaints/${id}`);
export const updateComplaint = (id, complaint) => axios.put(`${API_URL}/complaints/${id}`, complaint);
export const deleteComplaint = (id) => axios.delete(`${API_URL}/complaints/${id}`);