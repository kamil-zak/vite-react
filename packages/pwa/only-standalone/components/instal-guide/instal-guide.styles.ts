import styled from 'styled-components';

export const InstalGuideWrapper = styled.div`
  display: grid;
  gap: 40px;
  max-width: 700px;
  margin: 20px auto;
  font-family: Helvetica, Arial, sans-serif;
`;

export const InstalGuideItem = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  padding: 20px 5px;
  background: #efeef1;
  border-radius: 5px;
`;

export const InstalGuideText = styled.p<{ large?: boolean }>`
  margin: 0;
  padding: 0;
  font-size: ${({ large }) => (large ? '30' : '20')}px;
  text-align: center;
`;
