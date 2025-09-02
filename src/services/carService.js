import axios from 'axios';

const API_KEY = 'LJ2t/h6Y4bJi0mjSGFzcTw==0Vedu2moQN7hstmi';
const BASE_URL = 'https://api.api-ninjas.com/v1/cars';

export const fetchCars = async (make = 'toyota') => {
  try {
    const response = await axios.get(`${BASE_URL}?make=${make}`, {
      headers: { 'X-Api-Key': API_KEY },
    });
    return response.data; // deve retornar um array de carros
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    return [];
  }
};
