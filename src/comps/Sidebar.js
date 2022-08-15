import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Colors from "../styles/colors";
import { LogoImage, SideBarContainer, SideBarHandle, SideContainer } from "../styles/comps";
import { ButtonPill } from "../styles/global";
import { FaArrowsAltH } from "react-icons/fa";
import Logo from '../Assets/SVGs/Logo-SVG-With-Text.svg'

const Sidebar = () => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

    const navigate = useNavigate();

    const nav = (route) => {
        navigate(route);
    }



    return (<SideContainer>

        <SideBarContainer shown={sideBarIsOpen}>
            <LogoImage src={Logo} height="100px" />
            <ButtonPill color={Colors.background} onClick={() => { nav("/") }}>Home</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/sellers") }}>Sellers</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/buyers") }}>Buyers</ButtonPill>
            <ButtonPill color={Colors.background} onClick={() => { nav("/contact") }}>Contact</ButtonPill>
        </SideBarContainer>

        <SideBarHandle onClick={() => {
            setSideBarIsOpen(!sideBarIsOpen);
        }}><FaArrowsAltH /></SideBarHandle>

    </SideContainer>)
}

export default Sidebar;