import logo from '../../../img/petly.svg';
import { LogoContainer } from './Logo.styled';

function Logo() {
  console.log(logo);
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" width={82} height={42} />
    </LogoContainer>
  );
}

export default Logo;
