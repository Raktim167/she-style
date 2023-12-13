import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";


const NavBar = ({setShowCart}: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "faq", label: "FAQs" },
  ];

    const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className="sm:hidden text-[26px]" onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}/>
        <Link href="/" className="text-red-600 text-4xl font-semibold hover:text-[#333]">
          iSTYLE
        </Link>
        <ul className="gap-6 hidden sm:flex">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/about" className="navLink">
            About
          </Link>
          <Link href="/faq" className="navLink">
            FAQs
          </Link>
          {/* <li className="navLink">Shop</li> */}
          {/* <li className="navLink">Blog</li> */}
          {/* <li className="navLink">Pages </li> */}
          {/* <li className="navLink">Contact</li> */}
        </ul>

        <div className="flex gap-6 text-[26px]">
          <div className="relative cursor-pointer"
            onClick={()=> setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px]
                                rounded-full text-white text-[14px] grid place-items-center"
            >
              {cartCount}
            </div>
          </div>
          <AiOutlineSearch />
        </div>
      </div>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-red-200	 opacity-95 ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-red-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default NavBar;
