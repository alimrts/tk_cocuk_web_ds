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
        position={[-35.321, 7.955, 137.675]}
        rotation={[0, 0.014, 0]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials["Light Mirror.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials["tuikb_1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_2.geometry}
          material={materials["tuikb_3.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["tuikb_yazilar.001"]}
        position={[-12.45, 13.39, 144.95]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0045, 0.0045, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["tuikb_yazilar.001"]}
        position={[-60.946, 6.684, 137.464]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.006, 0.006, 0.007]}
      />
    </group>
  );
}

useGLTF.preload("/models/tuik_binasi.glb");
