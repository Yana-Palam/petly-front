import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  width: 83px;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
  color: #111111
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  margin-left: 24px;
`;

export const ImgDelete = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 216px;
  height: 32px;
  margin-left: 24px;
  padding-left: 12px;
  border: 1px solid transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;

  color: #111111;
  background-color: #FFFFFF;
  outline: none;
  ${({ active }) => active && `
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  `}

`;
