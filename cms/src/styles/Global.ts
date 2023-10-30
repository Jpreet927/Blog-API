import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Playfair Display", serif;
    }

    h1, h2, h3, h4, h5, h6, p, a {
        color: #3F3F3F;
    }

    fieldset {
        border: 0 none;
    }
`;

export default GlobalStyles;
