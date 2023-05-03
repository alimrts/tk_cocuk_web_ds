import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import { useHelper, Html } from "@react-three/drei";
import { BoxHelper } from "three";

import TestIcerik from "./TestIcerik";
import { DemoScene } from "./DemoScene";
import { DemoScene1 } from "./DemoScene1";

const AnimatedBox = (props) => {
  const meshRef = useRef();

  console.log("isTesting: ", props.isTesting);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // useHelper(meshRef, BoxHelper, "blue");
  //   useFrame(() => {
  //     console.log("Hi");
  //     meshRef.current.rotation.x += 0.01;
  //   });

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });

  return (
    // <mesh ref={meshRef} scale={[4, 4, 4]}>
    //   <boxGeometry />
    //   <meshStandardMaterial />
    // </mesh>
    <>
      {" "}
      <mesh
        {...props}
        visible={true}
        ref={meshRef}
        scale={clicked ? 2 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <Html>{<div>Test!</div>}</Html>
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        <Html>{clicked && <TestIcerik />}</Html>
      </mesh>
      {/* <div
          style={{
            background: "white",
            width: 200,
            height: "100%",
            borderRadius: 8,
            visibility: clicked ? "visible" : "hidden",
          }}
        >
          <h3>Tüik Çocuk</h3>
          <p>Örnek mekanizma</p>
        </div> */}
      {clicked ? (
        <DemoScene position={[65, 0.1, 20]} rotation={[0, 95.8, 0]} />
      ) : (
        <DemoScene1 position={[0, -0.1, 0]} />
      )}
      {/* {clicked && <DemoScene />} */}
    </>
  );
};

export default AnimatedBox;
