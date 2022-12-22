export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    accentAlpha: 'rgb(252, 132, 45, 0.2)',
    accent: '#FC842D',
    primaryBackground: '#F0F1F3',
    burgerBackground: '#264061',
    border: '#E0E0E0',

    text: {
      sectionTitle: '#212121',
      primaryText: '#9B9FAA',
      secondaryText: '#212121',
      accent: '#FC842D',
      caloriesText: '#264061',
    },

    button: {
      primaryBackground: '#FC842D',
      secondaryBackground: '#FFFFFF',
      accent: '#FC842D',
      border: '#FC842D',
      primaryText: '#FC842D',
      secondaryText: '#FFFFFF',
      none: 'transparent',
    },

    form: {
      formTitle: '#FC842D',
      formText: '#9B9FAA',
      formPlaceholder: '#9B9FAA',
      formInputBorder: '#E0E0E0',
      formErrorMessage: '#FC842D',
      checkboxText: '#9B9FAA',
      checkboxAccentText: '#FC842D',
      checkboxAccent: '#FC842D',
      checkboxBorder: '#E0E0E0',
    },
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Gotham Pro, sans-serif',
    main: 'Verdana, sans-serif',
  },

  textTransform: {
    cap: 'capitalize',
    lowCase: 'lowercase',
    upCase: 'uppercase',
  },

  fontSizes: {
    xxs: '8px',
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '26px',
    xl: '34px',
    xxl: '48px',
  },

  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  letterSpacing: {
    s: '0.01rem',
    m: '0.03rem',
    l: '0.04rem',
    xl: '0.05rem',
  },

  lineHeights: {
    body: 1.25,
    form: 1.75,
    nav: 0.93,
    title: 1.23,
    text: 1.21,
  },

  borders: {
    none: 'none',
    normal: ' 2px solid',
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '30px',
    round: '50%',
  },
  animation: {
    cubic: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  breakpoints: ['320px', '480px', '768px', '1200px'],
};
