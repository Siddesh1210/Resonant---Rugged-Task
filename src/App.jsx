import React from "react";
import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Watches from "./pages/Watches.ProductPage";
import Earbuds from "./pages/Earbuds.ProductPage";
import Laptops from "./pages/Laptops.ProductPage";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <ScrollToTop />
        <Navbar />
        <Outlet />
        <ToastContainer />
        <Footer />
    </Provider>
  );
};

export const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products/allwatches",
        element: <Watches />,
      },
      {
        path: "/products/allearbuds",
        element: <Earbuds />,
      },
      {
        path: "/products/alllaptops",
        element: <Laptops />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default AppLayout;
