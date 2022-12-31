import styled from 'styled-components';

export const ListNotices = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${p => `${p.theme.space[5]}px`};
  justify-content: center;
`;
