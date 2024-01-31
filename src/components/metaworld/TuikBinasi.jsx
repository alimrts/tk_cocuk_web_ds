import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";
import useZustandStore from "../../zustandStore";

import textureImage from "../../img/bilgi_merkezi.png";

export function TuikBinasi(props) {
  const { nodes, materials } = useGLTF("/models/tuik_binasi.glb");

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const defaultColor = new Color("#CCffff");

  const isBilgiGateTriggered = useZustandStore(
    (state) => state.isBilgiGateTriggered
  );

  const setIsTuikGateTriggered = useZustandStore(
    (state) => state.setIsTuikGateTriggered
  );

  const handleGoToTuik = () => {
    setIsTuikGateTriggered(true);
  };

  // useEffect(() => {
  //   // ComponentDidMount - Set up any subscriptions or initializations here
  //   // ComponentWillUnmount - Cleanup and reset isGunesGateTriggered to false
  // }, [isBilgiGateTriggered]);

  return (
    <group {...props} dispose={null} position={[-4.2, 0, 12.405]}>
      <group
        position={[-67.377, 7.955, 43.669]}
        rotation={[0, -1.557, 0]}
        scale={0.011}
      >
        {isBilgiGateTriggered ? (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                backgroundColor: "#323632a4",
                width: "220px",
                textAlign: "center",
                top: -200,
                left: -125,
                fontSize: "14pt",
                cursor: "pointer",
                color: "lightblue",
                padding: "4px",
              }}
              onClick={handleGoToTuik}
            >
              TÜİK BİNASI
            </div>
          </Html>
        ) : (
          <></>
        )}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.tuikb_camlar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["tuikb_1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["tuikb_3.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials["tuikb_yazilar.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/tuik_binasi.glb");
