import { useEffect, useState } from 'react';
import { GalleryContainer, Card, CarImage, CarName } from './styles/GalleryStyles';
import { fetchCars } from '../services/carService';

export default function Gallery() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const data = await fetchCars('chevrolet');
      setCars(data);
    };
    loadCars();
  }, []);

  return (
    <GalleryContainer>
      {cars.map((car, index) => (
        <Card key={index}>
          <CarImage src={`/images/car${(index % 5) + 1}.jpg`} alt={`${car.make} ${car.model}`} />
          <CarName>{`${car.make} ${car.model}`}</CarName>
        </Card>
      ))}
    </GalleryContainer>
  );
}

