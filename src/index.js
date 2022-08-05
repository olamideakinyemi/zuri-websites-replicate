import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Landingpage from "./pages/Landingpage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Industry from './pages/Industry';
import Experience from './pages/Experience';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
        <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="industry" element={<Industry />} />
      <Route path="experience" element={<Experience />} />
    </Routes>

        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
