import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const headerup2 = () => {
  return (
    <div >
      <div className="w-full fixed top-0 flex  h-[20] items-center justify-center  px-40 2xl:px-60 bg-pike p-2">
        <div className="flex gap-4 md:text-[0.6rem] lg:text-[1rem] ">
          <div className="flex items-center  ">
            <AiOutlineInfoCircle className="text-white" />

            <p className="text-white ml-2 ">
              Horarios de Lunes a Viernes - 8 a 18 hs / Av. Burgues 3610
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineWhatsApp className="text-white" />

            <p className="text-white ml-2">+598 98 412 760</p>
          </div>
          <div className="flex items-center">
            <AiOutlineMail className="text-white" />

            <p className="text-white ml-2">5estrellas2023@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerup2;
