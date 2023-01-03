import useMatchMedia from '../../../hooks/useMatchMedia';
import Logo from '../Logo';
import Nav from '../Nav';
import UserNav from '../UserNav';
import MobMenuBtn from '../MobMenuButton';

import { ModalWrapper, Wrap } from '../Header.styled';

function LoggedIn({ closeMobMenu, mobileMenuIsOpen, toggleMenu }) {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <Wrap>
        <Logo onClick={closeMobMenu} />
        {isTablet && !mobileMenuIsOpen && <UserNav />}
        {isDesktop ? (
          <>
            <Nav />
            <UserNav />
          </>
        ) : (
          <MobMenuBtn
            toggleMenu={toggleMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
        )}
      </Wrap>

      {/* ----------Mobile menu is open---------- */}
      {!isDesktop && mobileMenuIsOpen && (
        <ModalWrapper>
          {isMobile && <UserNav closeMobMenu={closeMobMenu} />}
          <Nav closeMobMenu={closeMobMenu} />
        </ModalWrapper>
      )}
    </>
  );
}
export default LoggedIn;
