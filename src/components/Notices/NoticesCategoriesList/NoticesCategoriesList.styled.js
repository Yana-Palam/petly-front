import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${p => `${p.theme.space[3] + 4}px`};
`;

export const Item = styled.li`
  /* gap: ${p => `${p.theme.space[3] + 4}px`}; */
`;
