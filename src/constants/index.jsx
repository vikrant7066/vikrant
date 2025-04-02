import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#" }, // Add Home link
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_MEDIA_LINKS = [

  {
    href: "",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  

];
