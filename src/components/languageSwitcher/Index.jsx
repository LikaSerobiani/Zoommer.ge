import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Index";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language || "geo"
  );

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "geo" ? "en" : "geo";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  return (
    <div>
      <Button
        onClick={toggleLanguage}
        title={currentLanguage.toUpperCase()}
        className="bg-white text-black w-[70px] border border-black"
      />
    </div>
  );
}
