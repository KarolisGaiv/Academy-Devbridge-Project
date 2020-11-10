import React from "react";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

import { MainNavigation } from "./MainNavigation";

const Default = () => {
  const lastVisible = boolean("Show last instruction", false);
  return (
    <MainNavigation />
  );
};

export default Default;