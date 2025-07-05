import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL  });

export const fetchEvents = () => API.get('/events');
export const getEventById = (id) => API.get(`/events/id/${id}`);
export const getEventsByCity = (city) => API.get(`/events/city/${city}`);
export const getEventsByCategory = (category) => API.get(`/events/category/${category}`);
export const postEvent = (data) => API.post('/events/post', data);
export const updateEvent = (id, data) => API.put(`/edit/${id}`, data);
export const deleteEvent = (id) => API.delete(`/delete/${id}`);