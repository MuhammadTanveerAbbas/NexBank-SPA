import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer
      className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full max-w-screen-xl`}
      >
        {/* Logo and Description */}
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="NexBank logo"
            className="w-[266px] h-[172px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((linkGroup) => (
            <div
              key={linkGroup.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {linkGroup.title}
              </h4>
              <ul className="list-none mt-4">
                {linkGroup.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer transition-all duration-200 ease-in-out hover:text-secondary hover:translate-x-1 ${
                      index !== linkGroup.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45] max-w-screen-xl">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © 2025 NexBank. All rights reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-7">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={`${social.id} icon`}
              className={`w-[21px] h-[21px] object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 ${
                index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
