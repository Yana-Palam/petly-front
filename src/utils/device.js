const size = {
  mobile: '320px',
  mobileOnly: '479px',
  fablet: '480px',
  fabletOnly: '767px',
  tablet: '768px',
  noDesktop: '1279px',
  desktop: '1280px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  fablet: `(min-width: ${size.fablet})`,
  fabletOnly: `(min-width:${size.fablet}) and (max-width:${size.fabletOnly})`,
  fabletAndMobileOnly: `(max-width:${size.fabletOnly})`,

  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:${size.noDesktop})`,

  noDesktop: `(max-width: ${size.noDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
