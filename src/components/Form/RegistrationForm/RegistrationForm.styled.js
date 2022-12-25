import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  width: 618px;
  padding: 60px 80px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;

  text-align: center;
  letter-spacing: 0.04em;

  color: #111111;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;

  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
`;

export const LoginLink = styled(Link)`
  /* color: ${p => p.theme.colors.accentAlpha}; */
  color: #3091eb;
  text-decoration: underline;
`;
