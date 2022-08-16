import styled from "styled-components";
import Colors from "./colors";

const SideContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
`

const SideBarContainer = styled.div`
    width: 300px;
    margin: 0px 0px 0px 0px;
    border-right: solid ${Colors.color[2]} 1px;
    padding: 20px;
    display: ${promps => promps.shown ? "flex" : "none"};
    background-color: ${Colors.background};
    flex-direction: column;
    align-items: center;
`
const SideBarHandle = styled.button`
    /* align-self: flex-end;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 90px;
    background-color: ${Colors.color[2]};
    color: ${Colors.foreground};
    cursor: pointer;
    position: absolute;
    z-index: 1000; */
    background: transparent;
    color: ${Colors.primary};
    height: 55px;
    width: 55px;
    margin: 10px;
    border: none;
    border-radius: 90px;
    font-size: 20px;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    align-self: flex-start;
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.6;

    cursor: pointer;

    &:hover {
        background-color: ${Colors.color[1]};
    }
`

const LogoImage = styled.img`
    margin-top: 10px;
    margin-bottom: 50px;
`

export {
    SideBarContainer,
    SideBarHandle,
    SideContainer,
    LogoImage,
}