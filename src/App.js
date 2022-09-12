import { Stage, Sprite } from "@inlet/react-pixi";
import Tanks from "./Tanks/Tanks";
const App = () => (
  <Stage>
    <Tanks x={100} y={100} />
  </Stage>
);

export default App;
