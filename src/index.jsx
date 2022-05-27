import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Apparts, Clock, Home, Error404, Fetch, ToDo } from "containers";
import reportWebVitals from "./reportWebVitals";
import AppartDetails from "containers/AppartDetails";

import { Provider as MainProvider } from "contexts/Main";
import { Provider as ModalProvider } from "contexts/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MainProvider>
      <ModalProvider>
        <App>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/apparts" element={<Apparts />} />
            <Route path="/apparts/:appartSlug" element={<AppartDetails />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </App>
      </ModalProvider>
    </MainProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
