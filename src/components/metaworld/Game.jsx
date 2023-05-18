import { Debug, useContactMaterial } from "@react-three/cannon";
import Floor from "./Floor";
import Obstacles from "./Obstacles";
import Player from "./Player";
import { CityScene1 } from "./CityScene1";

import { useControls } from "leva";

function ToggleDebug({ children }) {
  const debugRendererVisible = useControls("Debug Renderer", {
    visible: false,
  });

  return (
    <>
      {debugRendererVisible.visible ? (
        <Debug>{children}</Debug>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default function Game(props) {
  const cinsiyet = props.cinsiyet;
  useContactMaterial("ground", "slippery", {
    friction: 0,
    restitution: 0.3,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 3,
  });

  return (
    <>
      {/* <ToggleDebug>*/}
      <Floor
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.0295, 0]}
        material={"ground"}
      />
      <Obstacles />
      <CityScene1
        position={[0.5, -0.1, 3]}
        // rotation={[0, 3.1, 0]}
        scale={[1.2, 1.2, 1.2]}
      />

      <Player
        position={[0, 1, 0]}
        linearDamping={0.95}
        material={"slippery"}
        cinsiyet={cinsiyet}
      />

      {/* </ToggleDebug> */}
    </>
  );
}
