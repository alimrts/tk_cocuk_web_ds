import { Debug, useContactMaterial, useBox } from "@react-three/cannon";
import { useState, useRef } from "react";
import useZustandStore from "../../zustandStore";
import Floor from "./Floor";
import Obstacles from "./Obstacles";
import Player from "./Player";
import { CityScene1 } from "./CityScene1";
import { Dome } from "./Dome";

import { useControls } from "leva";
import { GezegenlerBinasi } from "./GezegenlerBinasi";
import SolarSystem from "./SolarSystem";

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

function ObstacleTriggerGunes({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: false,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );
  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" /> */}
    </mesh>
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

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );
  const setIsGunesGateTriggered = useZustandStore(
    (state) => state.setIsGunesGateTriggered
  );

  const handleGunesGateTrigger = () => {
    setIsGunesGateTriggered(true);
    console.log("gunes gate: " + isGunesGateTriggered);
  };

  const isGeriClicked = useZustandStore((state) => state.isGeriClicked);

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
        position={[0.5, -0.05, 3]}
        // rotation={[0, 3.1, 0]}
        scale={[1, 1, 1]}
      />

      <Dome scale={[0.885, 0.885, 0.885]} />

      <GezegenlerBinasi scale={[0.7, 0.7, 0.7]} position={[0.5, -0.75, 23]} />

      <ObstacleTriggerGunes
        position={[0.5, 0, 65.8]}
        args={[4.6, 4, 4.6]}
        rotation={[0, 1.6, 0]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision event on BoxTrigger", e);
          handleGunesGateTrigger();
        }}
      />

      <Player
        position={isGeriClicked ? [0.5, 0, 60.5] : [0, 1, 0]}
        linearDamping={0.95}
        material={"slippery"}
        cinsiyet={cinsiyet}
      />

      {/* </ToggleDebug> */}
    </>
  );
}
