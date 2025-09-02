import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CarName = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  display: block;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
