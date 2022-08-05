import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mediaTablet, mediaDesktop } from "../../functions/media";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 18px 0;
  background-color: #7ad8f5;
  border-bottom: 2px solid #e0e0e0;
  ${mediaTablet(`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  `)}
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: #000;
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
  text-decoration: none;
  ${mediaTablet(`
  font-size: 30px;
  padding: 0 80px;
`)}
  ${mediaDesktop(`
font-size: 32px;
padding: 0 100px;
`)}
  &:hover,
  &:focus {
    text-shadow: 2px 2px 2px #1976d2;
  }
`;
