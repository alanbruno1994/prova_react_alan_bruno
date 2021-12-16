import {createGlobalStyle} from "styled-components"

const GlobalStyle=createGlobalStyle `
    *{

        margin:0;
        padding: 0;
        box-sizing:border-box;
        outline: none;
        font-family: 'Open Sans', sans-serif;
    }

    body,html{
        background: #F7F7F7;
    }
`

export default GlobalStyle