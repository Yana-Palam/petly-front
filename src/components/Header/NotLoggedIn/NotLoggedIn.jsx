import useMatchMedia from '../../../hooks/useMatchMedia';
import Logo from '../Logo';
import Nav from '../Nav';
import AuthNav from '../AuthNav';
import MobMenuBtn from '../MobMenuButton';

import { ModalWrapper, Wrap } from '../Header.styled';

function NotLoggedIn({ closeMobMenu, mobileMenuIsOpen, toggleMenu }) {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <Wrap>
        <Logo onClick={closeMobMenu} />
        {isTablet && !mobileMenuIsOpen && (
          <>
            <AuthNav />
          </>
        )}
        {isDesktop && (
          <>
            <Nav />
            <AuthNav />
          </>
        )}
        {!isDesktop && (
          <MobMenuBtn
            toggleMenu={toggleMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
        )}
      </Wrap>

      {/* ----------Mobile menu is open---------- */}
      {!isDesktop && mobileMenuIsOpen && (
        <ModalWrapper>
          {isMobile && <AuthNav onClick={closeMobMenu} />}
          <Nav closeMobMenu={closeMobMenu} />
        </ModalWrapper>
      )}
    </>
  );
}
export default NotLoggedIn;
