import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../styles/colors";
import { SideBarContainer } from "../styles/comps";
import { ButtonPill } from "../styles/global";

const Sidebar = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/")
    }

    const navigateAbout = () => {
        navigate("/about")
    }

    return(<SideBarContainer>
        <ButtonPill color={Colors.color[1]}>Button 1</ButtonPill>
    </SideBarContainer>)
}

export default Sidebar;