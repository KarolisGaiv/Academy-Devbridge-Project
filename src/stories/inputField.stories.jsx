import React from "react";
import InputName from "../components/InputField/InputName";
import InputPassword from "../components/InputField/InputPassword";
import InputEmail from "../components/InputField/InputEmail";

export default {
  title: "Components / InputField",
  component: InputName,
  InputPassword,
  InputEmail,
};

export const Name = () => {
  return <InputName />;
};

export const Password = () => {
  return <InputPassword />;
};

export const Email = () => {
  return <InputEmail />;
};
