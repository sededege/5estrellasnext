"use client";

import { IoIosConstruct } from "react-icons/io";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineFilter,
  AiFillCreditCard,
  AiOutlineDropbox,
} from "react-icons/ai";
import { GiFactory, GiClothes, GiCoinsPile } from "react-icons/gi";
import { BsFillMusicPlayerFill, BsTruck } from "react-icons/bs";
import { FaBaby, FaTruck } from "react-icons/fa";
import Pagination from "./components/pagination";
import Products from "./components/products";
import Image from 'next/image'
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Page = () => {
  const products = require("./components/products.json");

  const [products2, setProducts2] = useState(products);
  const [price, setPrice] = useState();
  const [select, setSelect] = useState();
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts =
    products2 &&
    products2
      .sort((a, b) => a?.attributes?.Title.localeCompare(b?.attributes?.Title))
      .slice(firstPostIndex, lastPostIndex);

  const categories = require("./components/categorias.json");

  const [showModal, setShowModal] = useState(false);

  const banners = [
    {
      id: 0,
      name: "Pagá en cuotas!",
    },
    {
      id: 1,
      name: "Envíos a todo el país",
    },
    {
      id: 2,
      name: "Retira en el día",
    },
  ];



  const iconos = (e) => {
    if (e === "Industrias y Oficinas") {
      return <GiFactory className="text-[1rem]" />;
    }
    if (e === "Construcción") {
      return <IoIosConstruct className="text-[1rem]" />;
    }
    if (e === "Ropa, Calzados y Accesorios") {
      return <GiClothes className="text-[1rem]" />;
    }
    if (e === "Electrónica, Audio y Video") {
      return <BsFillMusicPlayerFill className="text-[1rem]" />;
    }
    if (e === "Hogar, Muebles y Jardín") {
      return <AiFillHome className="text-[1rem]" />;
    }
    if (e === "Bebés") {
      return <FaBaby className="text-[1rem]" />;
    }
  };
  const iconos2 = (e) => {
    if (e === "Pagá en cuotas!") {
      return (
        <AiFillCreditCard className="md:text-[3rem] text-[2rem] text-gray-700" />
      );
    }
    if (e === "Retira en el día") {
      return (
        <AiOutlineDropbox className="md:text-[3rem] text-[2rem]  text-gray-700" />
      );
    }
    if (e === "Envíos a todo el país") {
      return <FaTruck className="md:text-[3rem] text-[2rem] text-gray-700" />;
    }
    if (e === "Electrónica, Audio y Video") {
      return <BsFillMusicPlayerFill className="text-[3rem] text-gray-400" />;
    }
    if (e === "Hogar, Muebles y Jardín") {
      return <AiFillHome className="text-[3rem] text-gray-400" />;
    }
    if (e === "Bebés") {
      return <FaBaby className="text-[3rem] text-gray-400" />;
    }
  };

  const Popup = () => {
    return (
      <>
        {showModal ? (
          <>
            <div className="flex bg-black bg-opacity-30 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[30vw] bg-white outline-none focus:outline-none">
                  <div className="relative p-0 flex-auto">
                    <Image
                      className="w-full h-[200px] rounded-t-lg object-cover"
                      src={banner}
                      width="200"
                      height="267"
                      alt="me"
                    ></Image>
                    <div>
                      <h1 className="font-bold text-pike text-center mt-4">
                        ¿Necesitas comprar al por mayor?
                      </h1>
                      <p className="text-center">
                        Tenemos el mejor precio para tu empresa!
                      </p>
                    </div>

                    <form
                      type="POST"
                      className=" rounded px-8 pt-6 pb-8 w-full"
                    >
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Empresa (*)
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email (*)
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Teléfono
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="text-white bg-pike2 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      /*                       onClick={() => setShowModal(false)}
                       */
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  };

  const cambiar = (props) => {
    setProducts2(products);
    if (props === "todos") {
      setSelect("todos");
    
      setProducts2(products)
    } else {
      setSelect(props);

      const asd = products.filter((a) => a.cat === props);
    
      setProducts2(asd)
    }

    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col md:px-40 2xl:px-60 px-4 ">
            <FloatingWhatsApp placeholder='Ingresa un mensaje' chatMessage='Hola! ¿En que podemos ayudarte?' statusMessage='Habitualmente responde en 15 minutos.' avatar='./logoblanco.png' accountName="5 Estrellas" phoneNumber="+59898412760"/>
            

      {/*     <div className="md:px-[400px]">
        <ul className="flex gap-4  ">
          {banners &&
            banners.map((a) => (
              <li
                onClick={() => cambiar(a)}
                className={`${
                  select === a.name ? "bg-white" : " bg-white "
                } :  py-4 w-full flex-col cursor-pointer rounded-lg hover:bg-white border-gray-100 gap-2 text-pike2 text-[1rem] justify-center flex text-center  items-center`}
              >
                {iconos2(a.name)}
                <p className="text-pike font-semibold md:flex hidden">{a.name}</p>
                <p className="text-pike font-bold text-[0.8rem] flex md:hidden">{a.name}</p>
                <p className="text-gray-200 md:flex hidden">{a.name}</p>
              </li>
            ))}
        </ul>
      </div> */}

      <div className=" md:flex w-full items-center bg-pike2 rounded-t-lg justify-between ">
        <div className="w-full flex justify-between items-center">
          <div
           
            className="flex p-4 box-border box-none font-bold text-pike3"
          >
            Catálogo
          </div>
          <button
            onClick={() => setModal(true)}
            className="font-bold bg-pike3 p-2 text-white rounded-lg text-center justify-center flex md:hidden mr-4"
          >
            Filtros
          </button>
        </div>
        <div className="p-4 hidden md:flex">
          <input
            className="w-[300px] p-2 bg-white rounded-l-md text-center shadow-md"
            type="text"
            placeholder="Qué estas buscando?"
          />
          <AiOutlineSearch className="bg-pike2 text-[2.5rem] p-1 text-pike3 rounded-r-md cursor-pointer" />
        </div>
      </div>

      {modal && (
        <div className="w-full bg-white bg-opacity-90 p-10 mt-[10vh] left-0 z-[100]  rounded-bl-lg fixed">
          <div className="flex justify-between items-center">
            <h2 className="font-bold mt-4 text-left p-4">Categorias</h2>
            <h2
              onClick={() => setModal(false)}
              className="font-bold mt-4 text-left p-4"
            >
              x
            </h2>
          </div>
          <ul className="px-2 gap-2 flex flex-col">
            <li
              onClick={() => cambiar("todos")}
              className={`${
                select === "todos"
                  ? "bg-pike text-white"
                  : "bg-gray-200 text-gray-500"
              } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
            >
              <AiOutlineFilter /> Todas las categorias
            </li>
            {categories &&
              categories.map((a) => (
                <li
                  onClick={() => cambiar(a.name)}
                  key={a.name}
                  className={`${
                    select === a.name
                      ? "bg-pike text-white"
                      : "bg-gray-200 text-gray-500"
                  } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
                  /* className="px-4 py-2 text-gray-500 text-left flex items-center gap-2 hover:text-black hover:bg-yellow-200 cursor-pointer" */
                >
                  {/* {iconos(a.name)} {a.name}{" "} */}
                  {a.name}
                </li>
              ))}
          </ul>
          {/*  <h2 className="font-bold mt-4 text-left px-4">Precio</h2>
          <Range categorias={select} data={categories2} /> */}
        </div>
      )}
      <div className=" md:flex h-full bg-gray-200 shadow-lg rounded-b-lg text-pike3">
        <div className="w-1/4  rounded-bl-lg hidden md:block">
          <h2 className="font-bold mt-4 text-left p-4">Categorias</h2>
          <ul className="px-2 gap-2 flex flex-col">
            <li
              onClick={() => cambiar("todos")}
              className={`${
                select === "todos"
                  ? "bg-pike text-white"
                  : "bg-gray-200 text-gray-500"
              } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
            >
              <AiOutlineFilter /> Todas las categorias
            </li>
            {categories &&
              categories.map((a) => (
                <li
                key={a.name}
                  onClick={() => cambiar(a.name)}
                  className={`${
                    select === a.name
                      ? "bg-pike text-white"
                      : "bg-gray-200 text-gray-500"
                  } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
                  /* className="px-4 py-2 text-gray-500 text-left flex items-center gap-2 hover:text-black hover:bg-yellow-200 cursor-pointer" */
                >
                  {/* {iconos(a.name)} {a.name}{" "} */}
                  {a.name}
                </li>
              ))}
          </ul>
          {/*  <h2 className="font-bold mt-4 text-left px-4">Precio</h2>
          <Range categorias={select} data={categories2} /> */}
        </div>
        <Products products={currentPosts} />
      </div>
      <Pagination
        className="p-2"
        totalPosts={products && products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Page;
