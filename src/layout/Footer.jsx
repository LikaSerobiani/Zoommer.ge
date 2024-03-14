/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// icons
import FacebookIcon from "../components/icons/FacebookIcon";
import YoutubeIcon from "../components/icons/YoutubeIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import TikTokIcon from "../components/icons/TikTokIcon";
import EmailIcon from "../components/icons/EmailIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import LanguageSwitcher from "../components/languageSwitcher/Index";

export default function Footer() {
  const { t } = useTranslation("global");

  const socialMediaLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/zoommerge/?ref=page_internal",
      icon: <FacebookIcon />,
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/user/WwwZoommerGe",
      icon: <YoutubeIcon />,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/zoommer.ge/?hl=en",
      icon: <InstagramIcon />,
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@zoommer.ge",
      icon: <TikTokIcon />,
    },
  ];
  return (
    <footer>
      <div className="mt-[100px] bg-light-grey">
        <div className="container py-[20px] flex gap-[120px]">
          {/* navigation */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary text-black pb-[15px] mb-[5px] cursor-pointer font-medium">
              <h2 className="text-[13px] font-bold">
                {t("footer.navigation")}
              </h2>
            </div>
            <Link to="/about-us">
              <span className="leading-5 text-[13px]">
                {t("footer.aboutUs.title")}
              </span>
            </Link>
            <Link to="/corporate-sales">
              <span className="leading-5 text-[13px]">
                {t("footer.corporateSales.title")}
              </span>
            </Link>
          </div>
          {/* Payments */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold"> {t("footer.payment")}</h2>
            </div>
            <Link to="/payment-methods">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                {t("footer.paymentMethods.title")}
              </span>
            </Link>
          </div>
          {/* socialMedia */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold"> {t("footer.followUs")}</h2>
            </div>
            {socialMediaLinks.map((link, index) => (
              <div className="flex gap-[10px]" key={index}>
                {link.icon}
                <a
                  href={link.url}
                  target="_blank"
                  className="leading-5 text-[13px] cursor-pointer text-black font-medium"
                >
                  {link.platform}
                </a>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-[20px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">{t("footer.contact")}</h2>
            </div>
            <div className="flex gap-[10px]">
              <EmailIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Info@zoommer.ge
              </span>
            </div>
            <div className="flex gap-[10px]">
              <PhoneIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                +995 (32) 2 60 30 60 / *7007
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="bg-light-grey border-t-[2px] border-white mb-[5px]">
        <div className="container py-[20px] flex justify-between items-center">
          <p className="text-[14px] text-dark-grey leading-4 font-base">
            Copyright © 2024 Zoommer.ge. All rights reserved.
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
