import React from "react";
import { Routes, Route } from "react-router-dom";
import Homecontainer from "./container";
import Home from "./pages/HomePage";
import Career from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Client from "./pages/Client";
import Registration from "./pages/Partners";
import About from "./pages/AboutUs";
import Alumni from "./pages/Alumni";
import LoginForm from "./components/Login";
import { ContactPhoneTwoTone } from "@material-ui/icons";
const ICTRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homecontainer>
             <Home />
            </Homecontainer>
          }
          exact
        />
        <Route
          path="/careers"
          element={
            <Homecontainer>
              <Career />
            </Homecontainer>
          }
          exact
        />
        <Route
          path="/about-us"
          element={
            <Homecontainer>
              <About />
            </Homecontainer>
          }
          exact
        />
        <Route
          path="/contact-us"
          element={
            <Homecontainer>
              <ContactUs />
            </Homecontainer>
          }
          exact
        />
        <Route
          path="/registration"
          element={
            <Homecontainer>
              <Registration />
            </Homecontainer>
          }
          exact
        />

        <Route
          path="/alumni-list"
          element={
            <Homecontainer>
              <Alumni />
            </Homecontainer>
          }
          exact
        />
        <Route
          path="/login"
          element={
            <Homecontainer>
              <LoginForm />
            </Homecontainer>
          }
          exact
        />
      </Routes>
    </>
  );
};
export default ICTRouter;
