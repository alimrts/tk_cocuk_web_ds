import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";

import textureImage from "../../img/bilgi_merkezi.png";

export function Dome(props) {
  const { nodes, materials } = useGLTF("/models/dome.glb");

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const defaultColor = new Color("#CCffff");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 7.665, -0.405]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["Light Mirror"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials["MultiMat_0 Slot #5"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bilgi_m_t.geometry}
        material={materials["Light Mirror"]}
        position={[-0.15, 3.841, 14.846]}
        scale={0.01}
      />
      <mesh
        position={[-0.15, 3.5, 14.95]}
        rotation={[0.0, 0, 0.07]}
        {...props}
        visible={true}
        scale={12}
      >
        <planeGeometry args={[0.35, 0.08]} />

        <meshBasicMaterial
          map={texture}
          color={defaultColor}
          transparent
          alphaTest={0.5} // Adjust as needed
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/dome.glb");
