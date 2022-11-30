import styled from 'styled-components';

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.x5Large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semiBold};
  text-align: center;
  text-decoration: underline;
  padding: ${({ theme }) => theme.padding.large};
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.x3Large};
  }
`;

export const HomePageWrapper = styled.div`
  padding: 20px 300px;

  ${({ theme }) => theme.mediaQueries.desktab} {
    padding: 20px 100px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 20px 50px;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 20px 20px;
  }
`;

export const InputButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.large};
`;
