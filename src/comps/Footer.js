import React from "react";
import { Foot, FooterTextLeft, FooterTextRight } from "../styles/global";

const Footer = () => {
    return(<Foot>
        <FooterTextLeft>Mike Mechem</FooterTextLeft>
        <FooterTextRight href="mailto:home.vegas@gmail.com">home.vegas@gmail.com</FooterTextRight>
    </Foot>)
}

export default Footer;