"use client";

// import { socialLink } from "@/lib/constants";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import IconButton from "./icon-button";
import { FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export const socialLink = [
  {
    icon: <FiGithub />,
    url: "https://github.com/adityasharma-work",
  },
  {
    icon: <CiLinkedin />,
    url: "https://www.linkedin.com/in/connect-aditya-sharma/",
  },
  {
    icon: <TbBrandLeetcode />,
    url: "https://leetcode.com/u/adityasharma4368/",
  },
  {
    icon: <SiMedium />,
    url: "https://medium.com/@adityasharma4368",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/__adi.s__/",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {socialLink.map((link, index) => (
        <IconButton key={index} onClick={() => window.open(link.url, "_blank")}>
          {link.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
