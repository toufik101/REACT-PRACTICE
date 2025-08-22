import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Project from "./Components/Project.jsx";
import ProjectHome from "./Components/ProjectHome.jsx";
import ProjectsLayout from "./Layouts/ProjectsLayout.jsx";
import MarketingLayout from "./Layouts/MarketingLayout.jsx";
import EditProject from "./Components/EditProject.jsx";
import MarketingHome from "./Components/MarketingHome.jsx";
import Contact from "./Components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<MarketingHome/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="projects">
        <Route index element={<ProjectHome />} />
        <Route element={<ProjectsLayout />}>
          <Route path=":pid" element={<Project />} />
          <Route path=":pid/edit" element={<EditProject />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
