import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

    padding: 1rem;

    .logo{
        height: 3rem;
        width: 3rem;
        fill: ${(props) => props.theme.colors.text};
    }


    
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`

export const DarkModeIcon = styled(MdOutlineDarkMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;

`