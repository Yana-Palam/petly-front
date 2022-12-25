import styled from 'styled-components';

export const DivPhoto = styled.div`
  width: 233px;
  height: 233px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: 32px;
`;

export const ImgPhoto = styled.img`
  width: 233px;
  height: 233px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.sectionTitle};
  background: none;
  position: absolute;
  top: 200px;
  right: 0;
`;

export const ImgCamera = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;
