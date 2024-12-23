import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const registrar = (e) => {
    e.preventDefault;
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === ""
    ) {
      alert("Debe completar todos los datos para registrarse.!");
      return;
    }

    var validaEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validaEmail.test(email.trim())) {
      alert("Formato de email parece no ser correcto.!");
      return;
    }

    if (password.trim().length < 6) {
      alert("La contraseña debe contener 6 caracteres como mínimo.!");
      return;
    }
    if (password.trim() != password2.trim()) {
      alert("Las contraseñas no coinciden.!");
      return;
    }

    alert("Usuario registrado correctamente");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <div className="flex justify-center">
      <Card className="mt-10 border" color="transparent">
        {/* <Typography variant="h2" color="blue-gray" className="ml-5"> */}
        <p className="ml-5 pt-5 text-2xl font-bold">Formulario de Registro</p>
        {/* </Typography> */}
        <Typography color="gray" className="ml-5 mt-1 font-normal">
          Por favor ingrese sus datos para registrarse.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="ml-5 mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 flex justify-start"
            >
              Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className="pl-1 w-11/12 rounded !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 flex justify-start"
            >
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
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 flex justify-start"
            >
              Confirme Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              minLength={6}
              className="pl-1 w-11/12 !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <Button
              className="mt-6 w-11/12 text-white bg-gray-500 flex justify-center"
              fullWidth
              onClick={registrar}
            >
              <FaPlus size={26} className="mr-2" />
              Registrar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
