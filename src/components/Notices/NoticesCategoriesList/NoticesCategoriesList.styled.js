import styled from 'styled-components';
import { device } from 'utils/device';

export const ListNotices = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${p => `${p.theme.space[5]}px`};

  @media ${device.tablet} {
    /* max-width: ${p => `${p.theme.space[9] - 176}px`}; */
    flex-basis: calc((100% - 32px) / 2);
  }

  @media ${device.desktop} {
    flex-basis: calc((100% - 96px) / 4);
    /* max-width: ${p => `${p.theme.space[8] + 32}px`}; */
  }
`;
