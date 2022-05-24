import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Apparts, Clock, Home, Error404, Fetch } from "containers";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/apparts" element={<Apparts />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </App>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
