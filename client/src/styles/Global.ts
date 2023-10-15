import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Playfair Display", serif;
    }

    a {
        color: #3F3F3F;
    }
`;

export default GlobalStyles;
