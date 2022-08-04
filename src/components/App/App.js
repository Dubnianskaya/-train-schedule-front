import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Global } from "@emotion/react";
import { Layout } from "../Layout";
import { HomePage } from "../../pages";
import { GlobalStyles } from "../../styles";

const createChunk = (componentName) => {
  return lazy(() =>
    import(`../../pages/${componentName}`).then((module) => ({
      default: module[componentName],
    }))
  );
};

const Trains = createChunk("Trains");

export function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains" element={<Trains />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
