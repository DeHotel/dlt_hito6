import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <div className="navbar flex justify-between pl-10 pr-10">
        <div>
          Pizzería Mamma Mía!{"     "}
          <Link
            to="/"
            className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
          >
            🍕 ir al Inicio
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex justify-center">
            <FaPizzaSlice color="red" size={90} className="ml-2" />
          </div>
          <div className="text-center mt-10 mb-20">
            <h1 className="mb-4">La ruta que intentas consultar no existe!</h1>
          </div>
          <div className="text-center">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
