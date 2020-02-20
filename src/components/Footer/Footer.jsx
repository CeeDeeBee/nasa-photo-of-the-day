import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    margin-top: 2%;

    p {
        padding: 1% 0;
        color: #ffffff;
        margin: 0;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Colin Barnes - 2020</p>
        </StyledFooter>
    )
}

export default Footer;