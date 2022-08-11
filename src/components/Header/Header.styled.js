import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { mediaTablet } from "../../functions/media";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 18px 0;
  background-color: #1976d2;
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
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  &:hover,
  &:focus {
    text-shadow: 2px 2px 2px #1976d2;
  }
`;

export const MenuButton = styled(Button)`
  font-family: inherit;
  align-items: flex-end;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: 80px;
  padding: 0;
  line-height: 1;
`;
