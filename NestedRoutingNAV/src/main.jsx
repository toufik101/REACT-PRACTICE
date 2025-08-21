import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
<Route path="/" element={<App />}>
      {/* Child routes go into <Outlet /> */}
      <Route index element={<Home/>} />   {/* default child */}
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="services" element={<Services/>} />
    </Route>
    </Routes>
  </BrowserRouter>
);
