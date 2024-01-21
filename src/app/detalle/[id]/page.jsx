
export async function generateMetadata
  (props) {
  // read route params
  const {id} = props.params
  const productsjson = require("../../components/products.json");
  const detalle = productsjson.filter((a) => a.id === parseInt(id));
  const title = detalle ? `5 Estrellas - ${detalle[0].title}` : "5 Estrellas";
  const desc = detalle ? `${detalle[0].descripcion}` : "5 Estrellas";
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: title,
    description: desc
  }
}

const Detalle = (props) => {

  const { id } = props.params;
  const productsjson = require("../../components/products.json");
  const detalle = productsjson.filter((a) => a.id === parseInt(id));
  const title = detalle ? `5 Estrellas - ${detalle[0].title}` : "5 Estrellas";

  return (
    <div>
      <div className="md:w-[85vw] md:h-[80vh] md:px-10 md:py-10 md:justify-center md:items-center flex md:flex-row flex-col mx-auto pt-[10vh] md:pt-0">
        <img
          className=" w-full h-[80vh] items-center mx-auto object-contain"
          src={detalle && detalle[0].img}
          width={300}
          height={500}
        />
        <div className="w-full h-full flex flex-col items-center justify-center rounded-lg  p-4   ">
          <div className="bg-gray-100 shadow-lg p-4 ">
            <div>
              <h1 className="font-bold text-pike w-[300px] mx-auto text-center justify-center">
                {detalle && detalle[0].title}
              </h1>
              <p className="text-[12px] text-gray-500 text-center mt-4">
                Codigo: {detalle && detalle[0].cod}
              </p>
            </div>
            <div className="text-gray-400 md:h-full  overflow-y-auto p-0 md:p-4 mt-4 mb-4 flex flex-col gap-4">
              <p>Medidas: {detalle && detalle[0].medidas}</p>
              <p>Material: {detalle && detalle[0].material}</p>
              <p>{detalle && detalle[0].descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
