import styled from 'styled-components';

import media from '../../assets/styles/media';

export const StyledText = styled.h1`
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.black_100};

  ${media.desktop`
      font-size: 4.5rem;
  `}
`;
