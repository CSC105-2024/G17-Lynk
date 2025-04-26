import React from "react";
import { useTheme } from "@/components/theme-provider";

const Logo = ({
  //href = "/",
  version = "v1",
  className = "",
  lightClass = "",
  darkClass = "",
}) => {
  const { theme } = useTheme();

  const logoVersions = {
    v1: {
      dark: "/logo-dark-v1.svg",
      light: "/logo-light-v1.svg",
      className: "h-auto",
    },
    v2: {
      dark: "/logo-dark-v2.svg",
      light: "/logo-light-v2.svg",
      className: "h-auto",
    },
  };

  const currentLogo = logoVersions[version] || logoVersions.v1;

  return (
    //<a href={href}>
    <img
      src={theme === "dark" ? currentLogo.dark : currentLogo.light}
      alt="Lynk Logo"
      className={`
          ${currentLogo.className} 
          ${className} 
          ${theme === "dark" ? darkClass : lightClass}
        `}
    />
    //</a>
  );
};

export default Logo;
