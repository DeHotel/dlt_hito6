import { createContext, useState } from "react";

export const Contexto = createContext();

const ContextoProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  return (
    <Contexto.Provider value={{ total, setTotal, carrito, setCarrito }}>
      {children}
    </Contexto.Provider>
  );
};

export default ContextoProvider;
