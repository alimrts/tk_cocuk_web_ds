import { useRef } from "react";
import { useBox } from "@react-three/cannon";

function Obstacle({ args, position, ...props }) {
  const [ref] = useBox(
    () => ({ args, type: "Static", mass: 10, position: position, ...props }),
    useRef()
  );

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} /> */}
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default function Obstacles() {
  return (
    <>
      {/* front blocks */}
      <Obstacle
        position={[14, 0, 12.5]}
        args={[1, 4, 15]}
        material={"ground"}
      ></Obstacle>
      <Obstacle
        position={[14, 0, -6.5]}
        args={[1, 4, 15]}
        material={"ground"}
      ></Obstacle>

      {/* right blocks */}
      <Obstacle
        position={[8.5, 0, 20]}
        args={[1, 4, 12]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>
      <Obstacle
        position={[8.5, 0, -14.5]}
        args={[1, 4, 12]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>

      {/* back blocks */}
      <Obstacle
        position={[-13.2, 0, 12.5]}
        args={[1, 4, 15]}
        material={"ground"}
      ></Obstacle>
      <Obstacle
        position={[-13.2, 0, -6.5]}
        args={[1, 4, 15]}
        material={"ground"}
      ></Obstacle>

      {/* left blocks */}
      <Obstacle
        position={[-7.8, 0, 20]}
        args={[1, 4, 12]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>
      <Obstacle
        position={[-7.8, 0, -14.5]}
        args={[1, 4, 12]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>

      {/* control room screens */}
      <Obstacle
        position={[0, 0, -7]}
        args={[7, 4, 16]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>
      <Obstacle
        position={[8.9, 0, 0]}
        args={[3, 4, 16]}
        rotation={[0, 0, 0]}
        material={"ground"}
      ></Obstacle>

      <Obstacle
        position={[-8.7, 0, -1]}
        args={[3, 4, 16]}
        rotation={[0, 0, 0]}
        material={"ground"}
      ></Obstacle>

      <Obstacle
        position={[0, 0, 6.8]}
        args={[2.6, 4, 2.6]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      ></Obstacle>
    </>
  );
}
