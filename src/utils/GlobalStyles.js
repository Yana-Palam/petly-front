import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    /* by default address italic */
    font-style: normal;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    padding:0;
    margin:0;
  }

  article {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }

    .react-date-picker.react-date-picker--closed.react-date-picker--enabled .react-date-picker__wrapper {
        border: none;
    }
    .react-date-picker.react-date-picker--open.react-date-picker--enabled .react-date-picker__wrapper{
      border: none;

    }
    .react-date-picker.react-date-picker--closed.react-date-picker--enabled,.react-date-picker.react-date-picker--open.react-date-picker--enabled{
      display: block;
    }

    .birthday-picker-input .react-date-picker__inputGroup {
      font-weight: 400;
      letter-spacing: 0.04em;
      font-size: 14px;
      line-height: 19px;
      color: #111111;
      outline: none;
      background: #FDF7F2;
      border: 1px solid rgba(245,146,86,0.5);
      border-radius: 40px;
    }

  .birthday-picker .react-date-picker__inputGroup {
      width: 156px;
      height: 24px;
      margin-right: 14px;
      padding-left: 12px;
    }

    .birthday-picker .react-date-picker__calendar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FDF7F2;
      border-radius: 50%;
      border: none;
      width: 30px;
      height: 30px;
    }
`;

export default GlobalStyles;
