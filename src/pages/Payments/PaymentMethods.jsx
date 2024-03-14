/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

export default function PaymentMethods() {
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  return (
    <div className="my-[30px]">
      <div className={`container ${isDarkMode ? "text-white" : "text-black"}`}>
        <div className="border-b-[2px] border-light-grey pb-[30px] mb-[30px]">
          <h1 className="font-bold text-[16px] leading-6">
            {t("footer.paymentMethods.title")}
          </h1>
        </div>
        <div className="flex flex-col gap-[30px]">
          {/* heading */}
          <h1 className="font-bold text-[30px]">
            {" "}
            {t("footer.paymentMethods.title")}
          </h1>
          {/* description */}
          <div className="flex gap-y-[15px] flex-col w-[70%]">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold">
                {t("footer.paymentMethods.description1")}
              </h1>
              <div className="flex flex-col gap-5">
                <span>{t("footer.paymentMethods.method1")}</span>
                <span>{t("footer.paymentMethods.method2")}</span>
                <span>{t("footer.paymentMethods.method3")}</span>
                <span>{t("footer.paymentMethods.method4")}</span>
                <span>{t("footer.paymentMethods.method5")}</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="font-bold">
                {t("footer.paymentMethods.description2")}
              </h1>
              <div className="flex flex-col gap-5">
                <span>{t("footer.paymentMethods.method6")}</span>
                <span>{t("footer.paymentMethods.method7")}</span>
                <span>{t("footer.paymentMethods.method8")}</span>
                <span>{t("footer.paymentMethods.method9")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
