import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  border: ${p => p.theme.borders.none};
  color: rgba(17, 17, 17, 0.6);
  background: none;
  margin-top: 16px;
`;

export const ImgLogout = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

