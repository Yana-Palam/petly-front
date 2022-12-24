import logo from '../../../assets/icons/petly.svg';
import { LogoContainer } from './Logo.styled';

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" width={82} height={42} />
    </LogoContainer>
  );
}

export default Logo;

//fix
