import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";

import textureImage from "../../img/bilgi_merkezi.png";

export function TuikBinasi(props) {
  const { nodes, materials } = useGLTF("/models/tuik_binasi.glb");

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const defaultColor = new Color("#CCffff");
  return (
    <group {...props} dispose={null} position={[-4.2, 0, 12.405]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tuik_binasi.geometry}
        material={materials.Palet}
        position={[-58.676, -0.461, 81.564]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/tuik_binasi.glb");
