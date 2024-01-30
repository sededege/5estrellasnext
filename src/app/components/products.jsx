/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { AiOutlineShoppingCart, AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Pagination from "./pagination";
import { useRouter } from 'next/navigation';
import { useStateValue } from "../context/StateProvider";
import Image from 'next/image'

const Products = ({ products, currentPage, postsPerPage, setCurrentPage }) => {
    const router = useRouter();
  const [images, setImages] = React.useState([]);
  const [cantidad, setCantidad] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);

  React.useEffect(() => {
    if (items && items.length > 0) {
      addtocart();
    }

    products ? setCargando(false) : setCargando(true);

  }, [images, items, products]);



  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }

  return (
    <div className="w-full h-full bg-white gap-4 p-4 rounded-br-lg md:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
        {products && products.length > 0 ? (
          products.map((a, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index / 10 }}
              key={a.id}
              className="md:px-0 h-full shadow-md hover:shadow-2xl transition-all 1s ease-in rounded-lg cursor-pointer bg-white "
            >
              <Image
                onClick={() => router.push(`/producto/${convertToSlug(a.title)}`)}
                src={a.img}
                width={300}
                height={500}
                alt='logo' 
                className=" px-4 object-contain md:object-contain 2xl:object-contain w-full "
              />
              <div className="md:px-5 px-10">
                <h2 className="md:text-[0.8rem] text-[1rem] font-semibold md:h-[60px] py-2 text-gray-500 text-center">
                  {a.title}
                </h2>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="w-full h-[80vh] flex-col col-span-4 flex items-center text-center gap-2 justify-center">
            {cargando ? (
              <>
                <div role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className=" text-center items-center justify-center">
                  Cargando productos...
                </p>
              </>
            ) : (
              <p className=" text-center items-center justify-center">
                No hay productos con esas coincidencias.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
