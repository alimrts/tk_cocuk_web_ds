import React, { Suspense, useRef, useState, useEffect } from "react";

import "./SoloarSystemStyle.css";

import { useGLTF, useCursor, Text } from "@react-three/drei";

import * as THREE from "three";
import textureMain from "../../img/basin_d_main.jpg";

const TuikIcDaire3 = (props) => {
  const { nodes, materials } = useGLTF("./models/basin_daire.glb");

  const group = useRef();

  const [hovered, set] = useState();
  useCursor(hovered, "pointer", "auto", document.body);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureMain);
  // Flip the texture vertically
  texture.flipY = false;

  return (
    <group ref={group} {...props} dispose={null} scale={[3, 3, 3]}>
      <group
        position={[15.572, 1.518, 4.561]}
        rotation={[1.367, -0.901, 1.319]}
        scale={0.165}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh053.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh053_1.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <group
        position={[-18.558, 2.27, -1.763]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.705, 1.705, 1.833]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh054.geometry}
          material={materials["MAT_Monitors02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh054_1.geometry}
          material={materials["Material.019"]}
        />
      </group>
      <group position={[0, 0.508, 9.06]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh055.geometry}
          material={materials.Block}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh055_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh055_2.geometry}
          material={materials.Block}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr1001.geometry}
        material={materials["gr1.003"]}
        position={[-17.44, 7.665, 0.64]}
        rotation={[0, 1.566, 0]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr2001.geometry}
        material={materials["gr4.003"]}
        position={[17.464, 7.622, 0.652]}
        rotation={[-0.081, -1.57, -0.081]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr3001.geometry}
        material={materials["gr3.003"]}
        position={[14.124, 8.098, -2.077]}
        rotation={[3.107, -1.57, 3.107]}
        scale={[0.1, 0.074, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr4001.geometry}
        material={materials["gr2.003"]}
        position={[-14.131, 8.084, -2.157]}
        rotation={[3.136, 1.567, -3.136]}
        scale={[0.1, 0.074, 0.1]}
      />
      <group
        position={[-15.627, 1.518, 4.853]}
        rotation={[1.327, 0.894, -1.256]}
        scale={0.165}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh060.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh060_1.geometry}
          material={materials["Material.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tavan.geometry}
        material={materials["house.004"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.56, 44.56, 3.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof_roof2_0001.geometry}
        material={materials["roof2.003"]}
        position={[0, 15.315, -0.673]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[12.059, 11.488, 0.585]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials["house.004"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.389, 44.389, 3.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor001.geometry}
        material={materials["floor.003"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.56, 44.56, 3.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dec_dec2_0001.geometry}
        material={materials["dec2.003"]}
        position={[-14.355, 9.466, -2.153]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.22, 5.748, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dec_dec1_0001.geometry}
        material={materials["dec1.003"]}
        position={[-14.355, 9.466, -2.153]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.22, 5.748, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame_frame2_0001.geometry}
        material={materials["frame2.003"]}
        position={[0, 6.204, -3.069]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[10.319, 0.033, 4.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame_frame1_0001.geometry}
        material={materials["frame1.003"]}
        position={[0, 6.204, -3.069]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[10.319, 0.033, 4.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main_screen.geometry}
        // material={materials.main_sc}
        position={[0, -0.145, 0.115]}
        scale={0.01}
      >
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <group
        position={[0, 1.226, -0.996]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.374, 2.431, 0.105]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh070.geometry}
          material={materials["stage4.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh070_1.geometry}
          material={materials["stage1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh070_2.geometry}
          material={materials["lighting.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh070_3.geometry}
          material={materials["stage3.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh070_4.geometry}
          material={materials["stage2.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stage_stage5_0001.geometry}
        material={materials["stage5.003"]}
        position={[0, 1.226, -0.996]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.374, 2.431, 0.105]}
      />
      <group position={[-17.731, 2.498, 4.589]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh072.geometry}
          material={materials["Cube_light2.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_1.geometry}
          material={materials["Cube_light1.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_2.geometry}
          material={materials["Cube_light3.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_3.geometry}
          material={materials["Cube_light4.005"]}
        />
      </group>
      <group position={[-13.124, 1.205, -1.494]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073.geometry}
          material={materials["Cube_light2.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_1.geometry}
          material={materials["Cube_light1.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_2.geometry}
          material={materials["Cube_light3.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_3.geometry}
          material={materials["Cube_light4.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_4.geometry}
          material={materials["sag_belge_screen.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_5.geometry}
          material={materials["sol_belge_screen.004"]}
        />
      </group>
    </group>
  );
};

export default TuikIcDaire3;
