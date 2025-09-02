import { useEffect, useState } from 'react';
import {
  GalleryContainer,
  Card,
  CarImage,
  CarName,
  SearchBar
} from './styles/GalleryStyles';
import { fetchCars } from '../services/carService';
import { fetchCarImage } from '../services/unsplashService';

export default function Gallery() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Carrega todos os carros ao iniciar
  useEffect(() => {
    const loadAllCars = async () => {
      setLoading(true);
      const allMakes = ['chevrolet', 'toyota', 'ford', 'honda', 'bmw', 'nissan','fiat', 'volkswagen', 'audi', 'mercedes-benz', 'porsche', 'subaru', 'citroen']; // você pode expandir essa lista
      let allCars = [];

      for (const make of allMakes) {
        const data = await fetchCars(make);
        const carsWithImages = await Promise.all(
          data.map(async (car) => {
            const imageUrl = await fetchCarImage(`${car.make} ${car.model}`);
            return { ...car, imageUrl };
          })
        );
        allCars = [...allCars, ...carsWithImages];
      }

      setCars(allCars);
      setLoading(false);
    };

    loadAllCars();
  }, []);

  // Busca específica por marca
  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    const data = await fetchCars(search);

    if (!Array.isArray(data)) {
      console.error('Resposta inesperada da API:', data);
      setLoading(false);
      return;
    }

    const carsWithImages = await Promise.all(
      data.map(async (car) => {
        const imageUrl = await fetchCarImage(`${car.make} ${car.model}`);
        return { ...car, imageUrl };
      })
    );

    setCars(carsWithImages);
    setLoading(false);
  };

  return (
    <>
      <SearchBar
        type="text"
        placeholder="Pesquisar por marca..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Carregando carros...</p>}

      <GalleryContainer>
        {cars.map((car, index) => (
          <Card key={index}>
            <CarImage
              src={car.imageUrl || `/images/car${(index % 5) + 1}.jpg`}
              alt={`${car.make} ${car.model}`}
            />
            <CarName>{`${car.make} ${car.model}`}</CarName>
          </Card>
        ))}
      </GalleryContainer>
    </>
  );
}
