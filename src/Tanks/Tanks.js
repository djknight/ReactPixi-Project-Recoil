import React from "react";
import { Sprite } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

const tanks = "Spites\body.png";

function Tanks(props) {
  return (
    <Sprite anchor="0.5,0.5" texture={PIXI.Texture.from(tanks)} {...props} />
  );
}

export default Tanks;
