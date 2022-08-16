import styled from "styled-components";
import Colors from "./colors";

const BackContainer = styled.div`
    background-color: ${Colors.background};
    color: ${Colors.foreground};
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0%;
    display: flex;
    overflow-x: scroll;
    overflow-y: scroll;
`

const ButtonPill = styled.button`
    background: ${props => props.color};
    color: ${Colors.primary};
    height: 55px;
    width: 150px;
    border: none;
    border-radius: 90px;
    margin: 10px 0px;
    font-size: 20px;
    font-weight: ${props => props.bold ? "bold" : "normal"};

    cursor: pointer;

    &:hover {
        background-color: ${Colors.color[1]};
    }
`

const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: ${Colors.primary};
`

const Paragraph = styled.p`
    color: ${Colors.primary};
    margin: 10px 50px;
    font-size: large;
    line-height: 30px;
`

const ContentContainer = styled.div`
    position: relative;
    width: 100%;
    overflow-y: scroll;
`

const PageContainer = styled.div`
    width: 100%;
    min-height: 150%;
    text-align: center;
`

const PageImage = styled.img`
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: 0 0;
    margin-bottom: 50px;
`

const PageImageTitleContainer = styled.div`
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: rgba(43, 43, 43, 0.7); */
    padding: 30px;
    border-radius: 10px;
`

const PageImageTitle = styled.p`
    font-size: 40px;
    margin: 10px 20px;
    color: ${Colors.primary};
    text-shadow: 3px 3px 3px ${Colors.color[0]};
`

const PageImageSubTitle = styled.p`
    color: ${Colors.primary};
    text-shadow: 3px 3px 3px ${Colors.color[0]};
`

const Foot = styled.div`
    position: static;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: auto;
    height: 100px;
    bottom: 0px;

    padding: 10px 30px;
    margin: 10px;

    /* background-color: ${Colors.color[1]}; */
    /* color: white; */
    /* border: solid ${Colors.color[2]} 1px; */

`

const FooterTextLeft = styled.p`
    /* position: absolute; */
    color: ${Colors.primary};

    font-size: large;
`

const FooterTextRight = styled.a`
    position: absolute;
    color: ${Colors.primary};
    right: 40px;
    font-size: large;
`
export {
    BackContainer,
    ButtonPill,
    Title,
    Paragraph,
    ContentContainer,
    PageContainer,
    PageImage,
    PageImageTitle,
    PageImageSubTitle,
    PageImageTitleContainer,
    Foot,
    FooterTextLeft,
    FooterTextRight,
}