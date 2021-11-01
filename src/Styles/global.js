import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
        background-color: paleturquoise;
        color: balck;
        text-align: center;
        animation-duration: 1s;
        animation-name: fadein;
    }
    h1, ul, li {
        margin: 10px;
    }
    ul {
        list-style: none;
        display: flex;
        border-radius: 10px;
        justify-content: space-evenly;
        flex-wrap: wrap;
        animation-duration: 3s;
        animation-name: fadein;
    }
    li {
        width: 200px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        height: 250px;
        align-items: center;
        height: 550px;
        background-color: #ffffff;
        border-top-left-radius: 20px;
    
        justify-content: space-evenly;
        animation-duration: 3s;
        animation-name: fadeLi;
    }
    img {
        width: 100px;
        height: 150px;
    }
    img, h2, p, span, button {
        margin: 1px;
    }
    
   
    button {
        background-color: purple;
        cursor: pointer;
        padding: 5px;
        color: white;
        border: 2px solid white;
        border-radius: 10px;

        :hover {
            background-color: green;
        }
    }
    @keyframes fadein {
        from {
            margin-left: 100%;

        }
      
        to {
          margin-left: 0%;

        }
    }
    @keyframes fadeLi {
        from {
            margin-right: 5%;
        }
      
        to {
            margin-left: 0%;

        }
    }
`;
