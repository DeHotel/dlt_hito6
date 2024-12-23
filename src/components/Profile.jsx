import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Profile = () => {
  const [email, setEmail] = useState("usuario@mail.cl");

  const cerrarSesion = (e) => {
    e.preventDefault;
    setEmail("");
    alert("Se ha cerrado la sesión");
  };

  return (
    <div className="flex justify-center">
      <Card className="mt-10 mb-10 border" color="transparent">
        {/* <Typography variant="h2" color="blue-gray" className="ml-5"> */}
        <p className="ml-5 text-2xl font-bold">Profile</p>
        {/* </Typography> */}
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="ml-5 mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Email:
            </Typography>
            <Input
              type="email"
              size="lg"
              className="pl-1 w-11/12 rounded !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              readOnly
            />
            <Button
              className="mt-6 w-11/12 text-white bg-gray-500 flex justify-center"
              fullWidth
              onClick={cerrarSesion}
            >
              Cerrar Sesión
              {/* <LuLogIn size={30} className="ml-2" /> */}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Profile;
