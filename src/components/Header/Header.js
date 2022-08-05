import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import { Container } from "../Container";
import { HeaderStyled, Link, NavContainer } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <NavContainer>
            <Link to="/">
              <DirectionsRailwayIcon fontSize="large" color="primary" />
              Додати потяг
            </Link>
            <Link to="/trains">Усі потяги</Link>
            <Link to="/search">Пошук потягів</Link>
          </NavContainer>
        </Container>
      </HeaderStyled>
    </>
  );
};
