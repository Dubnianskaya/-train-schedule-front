import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LayoutHeader, Container, NavContainer, Link } from "./Layout.styled";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";

export const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <NavContainer>
          <Link to="/">
            <DirectionsRailwayIcon fontSize="large" color="primary" />
            Додати потяг
          </Link>
          <Link to="/trains">Усі потяги</Link>
        </NavContainer>
      </LayoutHeader>
      <main>
        <Container>
          <Suspense fallback="">
            <Outlet />
            <Toaster />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
