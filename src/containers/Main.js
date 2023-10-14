import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(props) {
  if (settings.isSplash) {
    return (
      <div>
        <Router basename="/"> 
          <Routes>
            <Route
              path="/"
              element={<Splash theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/home"
              element={<Splash theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/experience"
              element={<Experience theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/education"
              element={<Education theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/splash"
              element={<Splash theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={props.theme} setTheme={props.setTheme} />}
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router basename="/"> 
          <Routes>
            <Route
              path="/"
              element={<Home theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/experience"
              element={<Experience theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/education"
              element={<Education theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={props.theme} setTheme={props.setTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={props.theme} setTheme={props.setTheme} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
