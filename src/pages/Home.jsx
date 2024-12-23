import React, { useEffect, useState } from "react";
import { Spinner } from "react-activity";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
// import data from "../assets/datos/data.json";
import pizzas from "../datos/pizzas";
import "react-activity/dist/library.css";

const Home = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [consultar, setConsultar] = useState(true);
  const url = "http://localhost:5000/api/";

  const handleReintentar = () => {
    console.log("Reintentando...");
    setConsultar(true);
  };

  useEffect(() => {
    async function consultaPizzas() {
      try {
        setLoading(true);
        const respuesta = await fetch(url + "pizzas");
        const result = await respuesta.json();
        let newPizza = result.map((pizza) => {
          return { ...pizza, cantidad: 1 };
        });
        setPizzas([...newPizza]);
        setConsultar(false);
        setLoading(false);
      } catch {
        console.error("Error consultando el catálogo: ", error);
      }
    }
    consultaPizzas();
  }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <div className="flex-col w-2/5 bg-slate-300 justify-between text-center">
  //         <div className="pt-10">Cargando información</div>
  //         <Spinner size="48" color="red" className="flex text-center" />
  //         <button className="text-white mb-10" onClick={handleReintentar}>
  //           Reintentar
  //         </button>
  //       </div>
  //     </>
  //   );
  // } else {
  return (
    <>
      <Header />
      <div id="cards" className="flex justify-evenly mt-10 gap-4 flex-wrap">
        {pizzas.map((dato, id) => (
          <div className="border-2 border-solid border-black" key={id}>
            <CardPizza
              dato={dato}
              // setTotal={props.setTotal}
              // setCarrito={props.setCarrito}
              // total={props.total}
              // carrito={props.carrito}
            />
          </div>
        ))}
      </div>
    </>
  );
  // }
};

export default Home;
