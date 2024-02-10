/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// icons
import FacebookIcon from "../components/Icons/FacebookIcon";
import YoutubeIcon from "../components/Icons/YoutubeIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import TikTokIcon from "../components/Icons/TikTokIcon";
import EmailIcon from "../components/Icons/EmailIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";

export default function Footer() {
  return (
    <footer>
      <div className="bg-light-grey">
        <div className="container py-[20px] flex gap-[120px]">
          {/* navigation */}
          <div className="flex flex-col gap-[20px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">ნავიგაცია</h2>
            </div>
            <Link to="/about-us">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                ჩვენ შესახებ
              </span>
            </Link>
            <Link to="/terms-and-conditions">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                წესები და პირობები
              </span>
            </Link>
            <Link to="/corporate-sales">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                კორპორატიული გაყიდვები
              </span>
            </Link>
            <Link to="/delivery-service">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                მიწოდების სერვისი
              </span>
            </Link>
            <Link to="/career">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                კარიერა
              </span>
            </Link>
            <Link to="/trade-in">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Trade In
              </span>
            </Link>
          </div>
          {/* Payments */}
          <div className="flex flex-col gap-[20px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">გადახდები</h2>
            </div>
            <Link to="/payment-methods">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                გადახდის მეთოდები
              </span>
            </Link>
            <Link to="/warranty">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                გარანტია
              </span>
            </Link>
            <Link to="/installment">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                განვადება
              </span>
            </Link>
            <Link to="/return-item">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                ნივთის დაბრუნება
              </span>
            </Link>
            <Link to="/how-to-buy-online">
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                ნივთის ონლაინ ყიდვის ინსტრუქცია
              </span>
            </Link>
          </div>
          {/* socialMedia */}
          <div className="flex flex-col gap-[20px]">
            <div className="border-b-[1px] w-[190px] border-primary pb-[15px] mb-[5px]">
              <h2 className="text-[13px] font-bold">გამოგვყევი</h2>
            </div>
            <div className="flex gap-[10px]">
              <FacebookIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Facebook
              </span>
            </div>
            <div className="flex gap-[10px]">
              <YoutubeIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Youtube
              </span>
            </div>
            <div className="flex gap-[10px]">
              <InstagramIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Instagram
              </span>
            </div>
            <div className="flex gap-[10px]">
              <TikTokIcon />
              <span className="leading-5 text-[13px] cursor-pointer text-black font-medium">
                Tik Tok
              </span>
            </div>
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
