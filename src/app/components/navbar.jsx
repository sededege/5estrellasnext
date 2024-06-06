"use client";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";


const Header = () => {
  const [menu, setMenu] = useState("Inicio");
  const [menuopen, setMenuopen] = useState(false);

  const pathname = usePathname()


  

  const menunav = [
    {
      id: 0,
      name: "Inicio",
      path: "/",
    },
  /*   {
      id: 1,
      name: "Catálogo",
      path: "/catalogo",
    }, */
    {
      id: 2,
      name: "Sobre Nosotros",
      path: "/sobre-nosotros",
    },
    {
      id: 3,
      name: "Contacto",
      path: "/contacto",
    },
  ];

  const Burgermenu = () => {
    return (
      <div className="h-[100vh]  bg-white w-[100vw] fixed top-0 left-0 z-[2000] ">
        <AiOutlineClose
          onClick={() => setMenuopen(false)}
          className="absolute right-10 top-10 font-bold text-[2rem]"
        />
        {
          <ul className="flex flex-col gap-4 text-right text-pike2 cursor-pointer w-full h-full  items-center justify-center ">
            {menunav.map((a) => (
              <Link
              key={a.name}
                className={`${
                  pathname === a.path
                    ? "text-pike font-bold"
                    : "text-pike3 font-medium"
                } `}
              >
                {a.name}
              </Link>
            ))}
          </ul>
        }
      </div>
    );
  };


  const [scroll, setY] = useState(0);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    []
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      {/* DESKTOP */}
      <nav
        className={`${
          scroll > 10
            ? "top-0  border-b-4 border-pike fixed "
            : "top-8 absolute "
        } w-full hidden md:flex z-[100] bg-white justify-between items-center px-40 2xl:px-60 h-20 transition-all ease-in 2s`}
      >
        <Image src="/logo.png" alt="logo" width={40} height={100}
       />
        <div className="flex gap-4 mr-6">
          <ul className="flex gap-4 text-right text-pike2 cursor-pointer">
            {menunav.map((a) => (
              <Link
                href={a.path}
                key={a.name}
                className={`${
                  pathname === a.path
                    ? "text-pike border-b-2 border-red-400  font-bold"
                    : "text-gray-500 font-medium"
                } transition-all 2s ease-in-out p-2 `}
              >
                {a.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        className={`${
          scroll > 10
            ? "top-0  border-b-4 border-pike fixed "
            : "top-0 absolute "
        } fixed w-full flex md:hidden z-[100] bg-white justify-between items-center px-4 h-16 transition-all ease-in 2s`}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={60}
          className="relative"
        />

        {menuopen && <Burgermenu />}
        <div className="flex gap-2">
          <div
            onClick={() => showCart()}
            className="flex items-center relative "
          >
            {/*  {cartItems.length > 0 && (
              <p className="absolute  bottom-4 left-3 bg-red-500 w-5 h-5 text-[12px] items-center flex justify-center text-white rounded-full ">
                {cartItems.length}
              </p>
            )}
 */}
            <AiOutlineShoppingCart className="flex z-100 cursor-pointer text-[1.8rem] text-gray-500" />
          </div>
          <AiOutlineMenu
            onClick={() => setMenuopen(true)}
            className="flex z-100 cursor-pointer text-[1.8rem] text-gray-500"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
