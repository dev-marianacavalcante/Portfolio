import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;

          ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors["base-card"]};
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors["base-button"]};
      border-radius: 999px;
    }
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background-color: var(--bg);
  font-family: 'DM Sans', sans-serif;
  color: var(--white);
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--white);
}

button {
  cursor: pointer;
}

button,
input {
  border: 0;
}

button:focus,
input:focus {
  border: 0;
}

`;
