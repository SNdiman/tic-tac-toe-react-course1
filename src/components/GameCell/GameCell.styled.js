import styled from "styled-components";

export const CellStyle= styled.button`
    background-color:  ${(props) => props.theme.colors.secondary};
    color:  ${(props) => props.theme.colors.primary};
    font-size: 3rem;

    border: none;
    border-radius: 10px;
    width: 10rem;
    height: 10rem;
    box-shadow: 5px 15px #888888;
    cursor: pointer;
    padding: 3rem;

    .iconX{
        height: 3rem;
        width: 3rem;
        fill: ${(props) => props.theme.colors.text};
    }

    .iconY{
        height: 3rem;
        width: 3rem;
        fill: ${(props) => props.theme.colors.text};
    }


    
`