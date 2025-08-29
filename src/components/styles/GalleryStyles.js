import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
`;

export const Card = styled.div`
  width: 300px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CarName = styled.h3`
  text-align: center;
  padding: 0.5rem;
  background-color: #f5f5f5;
  margin: 0;
`;
