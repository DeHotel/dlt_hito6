import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import { formatNumber } from "../utils/formatNumber";
import { Contexto } from "../context/Contexto";

import "../assets/css/styleCarrito.css";

const Cart = () => {
  const { total, setTotal, carrito, setCarrito } = useContext(Contexto);

  const handleAgregar = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const handleQuitar = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  setTotal(
    carrito.reduce(
      (total, carrito) => total + carrito.price * carrito.cantidad,
      0
    )
  );

  return (
    <>
      <div className="containerCarrito">
        <div>
          <h1>Carrito</h1>
        </div>
        <div>
          {carrito.map((producto, id) => {
            return (
              <div className="rowAround" key={producto.id}>
                <div>
                  <img src={producto.img} width="50px" alt="" />
                </div>
                <div>{producto.name}</div>
                <div>${formatNumber(producto.price)}</div>
                <div>
                  <Button
                    className="bg-transparent text-green-600 border-solid border-green-600 mt-3"
                    onClick={() => handleAgregar(producto.id)}
                  >
                    +
                  </Button>
                </div>
                <div style={{ textAlign: "center" }}>{producto.cantidad}</div>
                <div>
                  <Button
                    className="bg-transparent text-red-600 border-solid border-red-600 mt-3"
                    onClick={() => handleQuitar(producto.id)}
                  >
                    -
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: 24, paddingTop: 20 }}>
          Total: ${formatNumber(total)}
        </div>
        <div>
          <Button className="bg-black text-white border-solid border-black mt-3">
            Pagar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
