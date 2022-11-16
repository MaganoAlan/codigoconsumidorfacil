import { Image } from "native-base";
import React from "react";
const capa = require("../assets/images/capa.png");

export function Capa() {
  return <Image source={capa} w="full" h="full" />;
}
