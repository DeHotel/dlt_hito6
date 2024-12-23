import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { Contexto } from "../context/Contexto";

const Pizza = (props) => {
  const [pizza, setPizza] = useState("");
  const [consultar, setConsultar] = useState(true);
  const { id } = useParams();
  const { total, setTotal, carrito, setCarrito } = useContext(Contexto);

  const handleAgregarPizzaAlCarro = () => {
    setTotal(Number(total) + Number(pizza.price));
    setCarrito([...carrito, pizza]);
    console.log([...carrito, pizza]);
  };

  // Por ahora solo se mostrará p001
  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/pizzas/${id}`)
        // fetch(`http://localhost:5000/api/pizzas/p001`)
        .then((res) => res.json())
        .then((data) => {
          setPizza(data);
        });
    } catch {
      console.error("Error consultando la Pizza: ", error);
    }
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="mt-10 mb-10 flex justify-center align-middle">
      <Card className="max-w-96 flex-col">
        <CardHeader color="blue-gray" className="relative h-50">
          <img src={pizza.img} alt="FotoPizza" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className="ml-2 mt-2 mb-2 font-bold">
            Pizza {pizza.name}
          </Typography>
          <Typography variant="h2" className="ml-2 mt-2 mb-2">
            Pizza {pizza.desc}
          </Typography>
          <hr />
          <Typography className="text-center text-1sm mt-5">
            🍕 Ingredientes:
          </Typography>
          <div className="text-center pb-5">
            <ul>
              {pizza.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <Typography className="text-center text-1xl font-bold mt-3 mb-3">
            Precio: ${formatNumber(pizza.price ? pizza.price : 0)}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between p-5">
          {/* <Button className="bg-white text-black border-solid border-black">
            Ver más 👀
          </Button> */}
          <Button
            className="bg-black text-white border-solid border-black"
            onClick={handleAgregarPizzaAlCarro}
          >
            Añadir 🛒
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Pizza;
