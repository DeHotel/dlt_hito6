import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes/routes";
import { Routes, Route } from "react-router-dom";
import ContextoProvider from "./context/Contexto";

function App() {
  return (
    <ContextoProvider>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </ContextoProvider>
  );
}

export default App;
