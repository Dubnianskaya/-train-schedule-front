import { useState } from "react";
import { Container } from "../Container";
import { HeaderStyled, Link, NavContainer, MenuButton } from "./Header.styled";
import { Logo } from "../Logo";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderStyled>
        <Container>
          <NavContainer>
            <Link to="/">
              <Logo />
            </Link>
            <MenuButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Потяги
              <ArrowDropDownIcon style={{ color: "#fff" }} />
            </MenuButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/trains">Усі потяги</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/search">Пошук потягів</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/">Додати потяги</Link>
              </MenuItem>
            </Menu>
          </NavContainer>
        </Container>
      </HeaderStyled>
    </>
  );
};
