import { FiSearch } from "react-icons/fi";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";

const navbarData = {
  brand: {
    name: "AUDIO PRO",
    logo: "/images/logo.png",
  },

  menu: [
    { label: "Home",        href: "#home",        icon: "bi-house" },
    { label: "Featured",    href: "#featured",    icon: "bi-star" },
    { label: "Best Sellers",href: "#bestsellers", icon: "bi-trophy" },
    { label: "Speakers",    href: "#speakers",    icon: "bi-speaker" },
    { label: "Amplifiers",  href: "#amplifiers",  icon: "bi-lightning" },
    { label: "Blog",        href: "#blog",        icon: "bi-journal-text" },
    { label: "Subwoofers",  href: "#subwoofers",  icon: "bi-music-note-beamed" },
  ],

  actions: [
    { icon: <FiSearch size={18} /> },
    { icon: <HiOutlineUser size={18} />, text: "My account" },
    { icon: <HiOutlineShoppingBag size={18} />, text: "0,00 €" },
  ],
};

export default navbarData;
