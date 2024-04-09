import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";
import { ScrollToTop } from "../components";

// pages
const { Home } = lazily(() => import("../pages"));

// layout
const { Header, Footer } = lazily(() => import("../layout"));

export const pageRoutes = {
  home: "/",
};

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: pageRoutes.home,
    element: <Layout />,
    children: [
      {
        path: pageRoutes.home,
        Component: Home,
        exact: true,
      },
    ],
  },
]);
