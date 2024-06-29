import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/ReduxStore";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
