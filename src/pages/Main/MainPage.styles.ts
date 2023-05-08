import styled, { css } from 'styled-components';

export const MainPageWrapper = styled.div`
  padding: 50px 20px;
  display: grid;
  gap: 100px;
  justify-items: center;
`;

export const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const ActionButton = styled.div<{ newGame?: boolean }>`
  display: grid;
  gap: 10px;
  justify-items: center;

  ${({ newGame }) =>
    newGame &&
    css`
      @media (min-width: 1000px) {
        margin-right: 80px;
        gap: 20px;
      }
    `}
`;

export const ActionText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ActionImage = styled.img`
  height: 50px;

  @media (min-width: 1000px) {
    height: 150px;
  }
`;
