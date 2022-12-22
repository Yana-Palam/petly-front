import { useMediaQuery } from 'react-responsive';

function useMatchMedia() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1199px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const obj = {
    isMobile,
    isTablet,
    isDesktop,
  };
  return obj;
}

export default useMatchMedia;
