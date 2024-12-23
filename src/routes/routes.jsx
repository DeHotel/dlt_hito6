import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pizza from "../pages/Pizza";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Profile from "../components/Profile";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },

  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/profile",
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  // HITO 5: SE DEJA RUTA FIJA AL CODIGO p001
  // {
  //   path: "/pizza/p001",
  //   element: (
  //     <MainLayout>
  //       <Pizza />
  //     </MainLayout>
  //   ),
  // },
  //            OPCION PARA VER DETALLE DE CUALQUIER PIZZA
  {
    path: "/pizza/:id",
    element: (
      <MainLayout>
        <Pizza />
      </MainLayout>
    ),
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
