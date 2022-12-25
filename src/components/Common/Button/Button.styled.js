import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[7]}px`};
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.main};
  border-radius: ${p => p.theme.radii.xl};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.button.secondaryText};
  background: ${p => p.theme.colors.button.primaryBackground};
  line-height: ${x => x.theme.lineHeights.body};
  font-weight: ${x => x.theme.fontWeights.bold};
  width: 182px;
  height: 43px;
  /* box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5); */
`;
