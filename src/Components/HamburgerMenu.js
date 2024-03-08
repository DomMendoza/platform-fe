import * as React from "react";
import { useRef, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import Hamburger from "hamburger-react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    { path: "/", name: "Home" },
    { path: "/aboutUs", name: "About Us" },
    { path: "/packages", name: "Packages" },
    { path: "/gallery", name: "Gallery" },
    { path: "/faqs", name: "FAQs" },
    { path: "/contactUs", name: "Contact Us" },
  ];

  const sidebar = {
    open: {
      clipPath: `circle(2200px at 10% 6%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
      background: "#ED4B82",
      transitionDelay: ".45s",
    },
    closed: {
      clipPath: "circle(30px at 10% 6%)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      background: "transparent",
      transitionDelay: "0",
      // zIndex: 0,
    },
  };

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      display: "block", // Show the element at the start
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transitionEnd: {
        display: "none", // Hide the element after transition ends
      },
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const handleClick = (e, path) => {
    e.preventDefault();
    setIsOpen(!isOpen); // Toggle the value of isOpen

    // Navigate to the specified path after toggling isOpen
    window.location.href = path;
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`${
        isOpen ? "z-20" : "z-10 delay-1000"
      } absolute right-0 top-0 w-full h-screen bg-red-600`}
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full"
        variants={sidebar}
      />
      <div className="bg-red-600">
        <motion.ul
          variants={navVariants}
          className="absolute right-0 top-16 w-full"
        >
          {navData.map((item, key) => (
            <motion.li
              variants={menuVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center m-16 items-center cursor-pointer list-none font-bold text-3xl text-white text-center"
            >
              <a href={item.path} onClick={(e) => handleClick(e, item.path)}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-3 px-5 flex justify-start  ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded color="green" />
      </div>
    </motion.nav>
  );
};
