import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Section from 'components/Common/Section';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header /*closeModal={closeModal} isOpen={isOpen} */ />
      <Suspense fallback={<Loader />}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
