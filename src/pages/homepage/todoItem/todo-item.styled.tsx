import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.x3Large};

  border: 1px solid #eee;
  padding: ${({ theme }) => theme.padding.medium};
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr 10fr 1fr;
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Text = styled.p<{ $isChecked: boolean }>`
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
