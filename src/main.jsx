import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locales/en/global.json";
import global_geo from "./locales/geo/global.json";

const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
i18next.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  fallbackLng: "geo",
  resources: {
    en: {
      global: global_en,
    },
    geo: {
      global: global_geo,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <I18nextProvider i18n={i18next}>
      <App />
      <ToastContainer />
    </I18nextProvider>
  </>
);
