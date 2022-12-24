import { Button, ImgLogout } from './Logout.styled';
import logoutIcon from 'assets/icons/logout.svg';

function Logout() {
  return (
      <Button> <ImgLogout src={logoutIcon} alt=''/> Log Out</Button>
  );
}

export default Logout;
