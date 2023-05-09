import styled from 'styled-components';
import bg from '../../assets/bg.png';

export const MainPageWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  padding: 50px 0px;
`;

export const PreviewLines = styled.div`
  width: 500px;
  max-width: 100vw;
  display: grid;
  gap: 5px;
  box-sizing: border-box;
  padding: 10px;
  background-image: url(${bg});
  background-position: 85px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PreviewLine = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;

export const TabConfigurator = styled.div`
  display: grid;
  grid-template-columns: max-content 10px max-content;
  justify-items: center;
  gap: 5px;
  align-items: center;
  width: 70px;
`;

export const TabConfiguratorButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 5px 10px;
  border: 0;
  color: white;
`;
