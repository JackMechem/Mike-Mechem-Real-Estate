import styled from "styled-components";
import Colors from "./colors";

const BackContainer = styled.div`
    background-color: ${Colors.background};
    color: ${Colors.foreground};
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0%;
`

const ButtonPill = styled.button`
    background: ${props => props.color};
    color: ${Colors.foreground};
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 90px;
`

export {
    BackContainer,
    ButtonPill
}