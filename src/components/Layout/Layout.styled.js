import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mediaTablet, mediaDesktop } from "../../functions/media";

import train from "../../styles/images/train.png";

export const LayoutHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  border-bottom: 2px solid rgb(224, 224, 224);
`;

export const Container = styled.div`
  min-height: 100vh;

  ${mediaTablet(`
width: 100%;
background-image: url(${train});
background-size: 800px 403px;
background-position: right 0 bottom 0;
background-repeat: no-repeat;
`)}
`;

export const NavContainer = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  color: #000;
  display: flex;
  align-items: flex-end;
  font-size: 32px;
  font-weight: 500;
  padding: 0 100px;
  text-decoration: none;
  &:hover,
  &:focus {
    text-shadow: 0 5px 0 #3c93d5;
  }
`;
