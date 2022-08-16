import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Colors from "../styles/colors";
import { LogoImage, SideBarContainer, SideBarHandle, SideContainer } from "../styles/comps";
import { ButtonPill } from "../styles/global";
import { FaArrowsAltH } from "react-icons/fa";
import Logo from '../Assets/SVGs/Logo-SVG-With-Text.svg'

const Credits = styled.p`
    position: absolute;
    color: ${Colors.primary};
    bottom: 10px;
    text-align: center;
    line-height: 30px;
`

const Link = styled.a`
    color: ${Colors.primary};
    text-align: center;
`

const Sidebar = () => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

    const navigate = useNavigate();

    const nav = (route) => {
        navigate(route);
    }



    return (<SideContainer>

        <SideBarContainer shown={sideBarIsOpen}>
            <LogoImage src={Logo} height="100px" onClick={() => { nav("/") }} />
            <ButtonPill color={Colors.background} onClick={() => { nav("/") }}>Home</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/sellers") }}>Sellers</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/buyers") }}>Buyers</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/contact") }}>Contact</ButtonPill>
            <Credits>
                Website Designed By: Jack Mechem <br />
                <Link href="mailto:mechemjack@gmail.com">mechemjack@gmail.com</Link><br />
                <Link href="https://github.com/JackMechem/Mike-Mechem-Real-Estate">Github Project</Link>
            </Credits>
        </SideBarContainer>

        <SideBarHandle onClick={() => {
            setSideBarIsOpen(!sideBarIsOpen);
        }}><FaArrowsAltH /></SideBarHandle>

    </SideContainer>)
}

export default Sidebar;