import logo from '../../../assets/icons/petly.svg';
import { LogoContainer, LogoImg } from './Logo.styled';

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
}

export default Logo;
