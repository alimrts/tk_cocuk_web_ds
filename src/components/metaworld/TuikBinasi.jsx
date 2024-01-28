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
      <group
        position={[-67.377, 7.955, 43.669]}
        rotation={[0, -1.557, 0]}
        scale={0.011}
      >
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
