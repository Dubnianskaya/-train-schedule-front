import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback="">
          <Outlet />
          <Toaster />
        </Suspense>
      </main>
    </>
  );
};
