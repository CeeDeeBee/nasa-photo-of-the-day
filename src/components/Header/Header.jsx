import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 1% 0;

    h1 {
        color: #ffffff;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>NASA Astronomy Photo of the Day</h1>
        </StyledHeader>
    )
}

export default Header;