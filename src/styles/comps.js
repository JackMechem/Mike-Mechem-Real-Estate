import styled from "styled-components";
import Colors from "./colors";

const SideBarContainer = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 400px;
    margin: 10px;
    border-radius: 10px;
    padding: 20px;

    background-color: ${Colors.color[0]};
`

export {
    SideBarContainer
}