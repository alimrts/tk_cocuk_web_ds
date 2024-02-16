import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";

export function Dome(props) {
  const { nodes, materials } = useGLTF("/models/dome.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Icosphere002" position={[0, 7.665, -0.405]} scale={0.01}>
        <mesh
          name="Mesh003"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials["Light Mirror"]}
        />
        <mesh
          name="Mesh003_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Mesh003_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials["MultiMat_0 Slot #5.001"]}
        />
      </group>
      <group name="bilgi_m_t" position={[-0.15, 3.841, 14.846]} scale={0.01}>
        <mesh
          name="Mesh004"
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials["Poles.001"]}
        />
        <mesh
          name="Mesh004_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials["oyun_merkezi.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/dome.glb");
