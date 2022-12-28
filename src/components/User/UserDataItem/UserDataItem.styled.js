import styled from 'styled-components';
import { device } from 'utils/device';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  width: 56px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-right: 14px;

  @media (${device.fablet}) {
    width: 83px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};

  @media (${device.fablet}) {
    width: 32px;
    height: 32px;
  }
`;

// export const ImgDelete = styled.img`
//   width: 12px;
//   height: 12px;
//
//   @media (${device.fablet}) {
//     width: 20px;
//     height: 20px;
//   }
// `;

export const Input = styled.input`
  width: 159px;
  height: 24px;
  margin-right: 9px;
  padding-left: 12px;
  border: 1px solid transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: #111111;
  background-color: #FFFFFF;
  outline: none;
  ${({ active }) => active && `
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  `}

  @media (${device.fablet}) {
    width: 216px;
    height: 32px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;
