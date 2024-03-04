/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// icons
import FacebookIcon from "../components/icons/FacebookIcon";
import YoutubeIcon from "../components/icons/YoutubeIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import TikTokIcon from "../components/icons/TikTokIcon";
import EmailIcon from "../components/icons/EmailIcon";
import PhoneIcon from "../components/icons/PhoneIcon";

export default function Footer() {
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
      <div className="bg-light-grey mt-[100px]">
        <div className="container py-[20px] flex gap-[120px]">
          {/* navigation */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">ნავიგაცია</h2>
            </div>
            <Link to="/about-us">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                ჩვენ შესახებ
              </span>
            </Link>
            <Link to="/corporate-sales">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                კორპორატიული გაყიდვები
              </span>
            </Link>
            <Link to="/trade-in">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Trade In
              </span>
            </Link>
          </div>
          {/* Payments */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">გადახდები</h2>
            </div>
            <Link to="/payment-methods">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                გადახდის მეთოდები
              </span>
            </Link>
            <Link to="/return-item">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                ნივთის დაბრუნება
              </span>
            </Link>
          </div>
          {/* socialMedia */}
          <div className="flex flex-col gap-[10px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">გამოგვყევი</h2>
            </div>
            {socialMediaLinks.map((link, index) => (
              <div className="flex gap-[10px]" key={index}>
                {link.icon}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <h2 className="text-[13px] font-bold">კონტაქტი</h2>
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
        <div className="container py-[20px]">
          <p className="text-[14px] text-dark-grey leading-4 font-base">
            Copyright © 2024 Zoommer.ge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
