import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { LuLogIn } from "react-icons/lu";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = (e) => {
    e.preventDefault;
    if (username.trim() === "" || password.trim() === "") {
      alert("Debe completar todos los datos para ingresar.!");
      return;
    }

    if (password.trim().length < 6) {
      alert("La contraseña debe contener 6 caracteres como mínimo.!");
      return;
    }

    var validaEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validaEmail.test(username.trim())) {
      alert("Usuario parece no ser correcto.!");
      return;
    }

    alert("Login aceptado correctamente!");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <Card className="mt-10 border" color="transparent">
        {/* <Typography variant="h2" color="blue-gray" className="ml-5"> */}
        <p className="ml-5 text-2xl font-bold">Login</p>
        {/* </Typography> */}
        <Typography color="gray" className="ml-5 mt-1 font-normal">
          Ingrese su acreditación para acceder a la App.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="ml-5 mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="usuario@mail.com"
              className="pl-1 w-11/12 rounded !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              minLength={6}
              className="pl-1 w-11/12 !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              className="mt-6 w-11/12 text-white bg-gray-500 flex justify-center"
              fullWidth
              onClick={ingresar}
            >
              Ingresar
              <LuLogIn size={30} className="ml-2" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
