import axios from 'axios';

const ACCESS_KEY = '6t4J1vAmZNhD4_uUEKLax6BXMkgFDqhTUXDj0j3kioI';
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';

export const fetchCarImage = async (query) => {
  try {
    const response = await axios.get(UNSPLASH_URL, {
      params: { query, per_page: 1 },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    const results = response.data.results;
    return results.length > 0 ? results[0].urls.small : null;
  } catch (error) {
    console.error('Erro ao buscar imagem no Unsplash:', error);
    return null;
  }
};

