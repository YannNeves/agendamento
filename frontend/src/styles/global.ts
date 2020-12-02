import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Open+Sans:wght@400;700&display=swap');

  /* CSS Reset */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none;
  }
  /* remember to define focus styles! */
  :focus {
      outline: 0;
  }
  /* remember to highlight inserts somehow! */
  ins {
      text-decoration: none;
  }
  del {
      text-decoration: line-through;
  }
  /* tables still need 'cellspacing="0"' in the markup */
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  html, body, #root {
    height: 100vh;
  }


  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFF9F9;
    font-size: 16px;
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
    color: #FF7D7D;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    cursor: pointer;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 900;
    font-size: 32px;
    margin-bottom: 16px;
  }

  label {
    margin-bottom: 16px;
  }

`;

export default GlobalStyle;
