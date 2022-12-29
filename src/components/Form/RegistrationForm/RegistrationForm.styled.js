import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from 'components/Common/Button/Button.styled';
import { device } from 'utils/device';
import TextField from '@mui/material/TextField';

export const Input = styled(TextField)`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[5] + 8}px`};
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[5] + 8}px`};

  @media (${device.fablet}) {
    width: ${p => `${p.theme.space[9] + 106}px`};
    padding: ${p => `${p.theme.space[5] + 28}px ${p.theme.space[6] + 16}px`};
    background: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${p => p.theme.radii.xxl};
  }

  @media (${device.tablet}) {
    width: ${p => `${p.theme.space[9] + 106}px`};
  }
`;

export const ErrorText = styled.span`
  font-family: ${x => x.theme.fonts.main};
  position: absolute;
  top: 40px;
  color: #d32f2f;
  font-weight: 600;
`;

export const AuthBtn = styled(StyledButton)`
  width: 100%;
  background: ${p => p.theme.colors.button.primaryBackground};
  border-radius: ${p => p.theme.radii.xxl};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  height: ${p => `${p.theme.space[5] + 11}px`};
  color: white;

  @media (${device.tablet}) {
    height: ${p => `${p.theme.space[5] + 16}px`};
  }
`;

export const BackBtn = styled(StyledButton)`
  padding: 0px;
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.medium};
  background: ${p => p.theme.colors.button.secondaryBackground};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.button.border}`};
  border-radius: ${p => p.theme.radii.xxl};
  font-size: 20px;
  height: ${p => `${p.theme.space[5] + 11}px`};
  color: ${p => p.theme.colors.black};

  @media (${device.tablet}) {
    height: ${p => `${p.theme.space[5] + 16}px`};
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.sectionTitle};

  @media (${device.fablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.title};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.dataText};
`;

export const LoginLink = styled(Link)`
  color: ${p => p.theme.colors.text.link};
  text-decoration: underline;
`;
