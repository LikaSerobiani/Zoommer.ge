/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

export default function CorporateSales() {
  const { t } = useTranslation("global");

  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
          <h1 className="font-bold text-[16px] text-black leading-6">
            {t("footer.corporateSales.title")}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          {/* heading */}
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[35px]">
              {t("footer.corporateSales.title")}
            </h1>
            <p className="text-secondary">
              {" "}
              {t("footer.corporateSales.description1")}
            </p>
          </div>
          {/* description */}
          <div className="flex gap-y-[15px] flex-col w-[70%]">
            <span>{t("footer.corporateSales.description2")}</span>
            <span>{t("footer.corporateSales.description3")}</span>
            <span>{t("footer.corporateSales.description4")}</span>
            <span>{t("footer.corporateSales.description5")}</span>
            <p className="font-bold">
              {t("footer.corporateSales.description1")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
