/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DemoScene(props) {
  const { nodes, materials } = useGLTF("./models/kontrol_odasi2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(9)"].geometry}
        material={materials.FX_HUD}
        position={[7.81, 1.1, -1.88]}
        rotation={[1.57, 1.37, -1.57]}
        scale={[0.75, 0.83, 0.77]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Barrier_01_(4)004"].geometry}
          material={materials.FX_HUD_02}
          position={[0.57, 0, 0]}
          rotation={[0, 0, -1.57]}
          scale={[0.95, 0.94, 0.91]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(8)"].geometry}
        material={materials.FX_HUD}
        position={[-6.83, 0.38, 7.59]}
        rotation={[0.28, -0.77, 0.2]}
        scale={[0.99, 1.09, 1.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(7)"].geometry}
        material={materials.FX_HUD}
        position={[-7.26, 1.08, -1.88]}
        rotation={[1.57, -1.37, 1.57]}
        scale={[0.75, 0.83, 0.77]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Text_Arrow_01_(2)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.32, -0.12, 0]}
          rotation={[0, 0, 1.57]}
          scale={[0.93, 1.03, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Text_Arrow_01_(3)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.32, -0.21, 0]}
          rotation={[0, 0, 1.57]}
          scale={[0.93, 1.03, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Text_04_(2)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.44, -0.12, 0]}
          scale={[1.03, 0.93, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Text_04_(3)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.41, -0.21, 0]}
          scale={[0.61, 0.93, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Text_02_(1)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.41, 0.17, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[1.03, 0.93, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Box_03_(1)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.41, 0.16, 0]}
          scale={[0.72, 0.65, 0.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["SM_Hud_Barrier_01_(5)006"].geometry}
          material={materials.FX_HUD_02}
          position={[-0.56, 0, 0]}
          rotation={[0, 0, 1.57]}
          scale={[0.95, 0.94, 0.91]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(6)"].geometry}
        material={materials.FX_HUD}
        position={[-7.18, 1.12, 2.3]}
        rotation={[1.57, -1.37, 1.57]}
        scale={[0.8, 0.89, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(5)"].geometry}
        material={materials.FX_HUD}
        position={[1.82, 1.05, 7.36]}
        rotation={[0.2, 0, 0]}
        scale={[0.98, 1.09, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(3)"].geometry}
        material={materials.FX_HUD}
        position={[-1.34, 1.05, 7.36]}
        rotation={[0.2, 0, 0]}
        scale={[0.98, 1.09, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(11)"].geometry}
        material={materials.FX_HUD}
        position={[7.34, 0.32, 7.62]}
        rotation={[0.28, 0.77, -0.2]}
        scale={[0.98, 1.09, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Screen_Backing_01_(10)"].geometry}
        material={materials.FX_HUD}
        position={[7.88, 1.14, 2.3]}
        rotation={[1.57, 1.37, -1.57]}
        scale={[0.8, 0.89, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Rear_Wall_01002.geometry}
        material={materials.Material}
        position={[6.98, 1.8, 9.28]}
        rotation={[Math.PI, -0.59, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Rear_Wall_01003.geometry}
        material={materials.Material}
        position={[9.22, 1.8, 4.93]}
        rotation={[Math.PI, -1.56, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Rear_Wall_01004.geometry}
        material={materials.Material}
        position={[-8.49, 2.09, 4.92]}
        rotation={[0, 1.56, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Rear_Wall_01005.geometry}
        material={materials.Material}
        position={[-6.18, 2.09, 9.23]}
        rotation={[-Math.PI, 0.62, -Math.PI]}
      />
      <group
        position={[6.73, 1.59, 8.86]}
        rotation={[Math.PI / 2, 0, 2.55]}
        scale={0.17}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[8.8, 1.68, 4.64]}
        rotation={[Math.PI / 2, 0, 1.59]}
        scale={0.14}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[-5.82, 1.48, 8.86]}
        rotation={[Math.PI / 2, 0, -2.52]}
        scale={0.18}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.MAT_Monitors02}
        position={[0.77, 1.01, -3.14]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.38, 0.38, 0.41]}
      />
      <group
        position={[-7.96, 1.68, 4.92]}
        rotation={[Math.PI / 2, 0, -1.54]}
        scale={0.14}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[0.13, 1.51, 8.59]} scale={0.87}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial020_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial020_2.geometry}
          material={materials.MAT_Monitors02}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.001"]}
        position={[0.34, 1.82, -3.14]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.38}
      />
      <group
        position={[-6.24, 1.18, 8.83]}
        rotation={[0, -0.59, 0]}
        scale={0.87}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001_2.geometry}
          material={materials["MAT_Monitors02.001"]}
        />
      </group>
      <group position={[6.81, 1.18, 9.08]} rotation={[0, 0.59, 0]} scale={0.87}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial002_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial002_2.geometry}
          material={materials["MAT_Monitors02.002"]}
        />
      </group>
      <group position={[8.94, 1.48, 4.92]} rotation={[0, 1.55, 0]} scale={0.87}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial003_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial003_2.geometry}
          material={materials["MAT_Monitors02.003"]}
        />
      </group>
      <group
        position={[-8.1, 1.48, 4.64]}
        rotation={[Math.PI, -1.54, Math.PI]}
        scale={0.87}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial004_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial004_2.geometry}
          material={materials["MAT_Monitors02.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Prop_Screen_Small_02_(3)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[1.33, 0.62, -4.04]}
        rotation={[-2.38, 0.69, 2.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Prop_MapTable_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[0.25, -0.16, -3.17]}
        rotation={[0, 0.27, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Floor_Small_Hatch_Door_01001.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-4.29, -0.13, 0.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Floor_Small_Hatch_Door_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[4.83, -0.13, 0.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Floor_Small_Hatch_01_(1)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[3.57, -0.12, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Floor_Small_Hatch_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-5.55, -0.12, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Floor_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.21, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Console_Corner_02.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.21, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Console_Corner_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.21, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Console_02.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.21, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Console_01.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.21, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(9)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[6.78, -0.93, 6.91]}
        rotation={[0, 0.78, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(8)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-6.29, -0.93, 6.95]}
        rotation={[0, -0.77, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(7)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-6.15, -0.18, -1.79]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(6)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-6.15, -0.18, 2.34]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(5)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[6.82, -0.18, -1.79]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(4)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[6.71, -0.18, 2.24]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(3)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[1.82, -0.18, 6.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Bld_Bridge_Chair_01_(2)"].geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-1.31, -0.18, 6.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bld_Bridge_Rear_Wall_01001.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[0.32, 1.8, 10.71]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.57, 1.14, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_Arrow_01006.geometry}
        material={materials.FX_HUD_02}
        position={[-0.85, 1.31, 7.41]}
        rotation={[0.2, 0, 1.57]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_Arrow_01005.geometry}
        material={materials.FX_HUD_02}
        position={[2.31, 1.31, 7.41]}
        rotation={[0.2, 0, 1.57]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_Arrow_01004.geometry}
        material={materials.FX_HUD_02}
        position={[-7.22, 1.33, 2.69]}
        rotation={[1.57, -1.37, 3.14]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_Arrow_01003.geometry}
        material={materials.FX_HUD_02}
        position={[7.92, 1.35, 1.91]}
        rotation={[1.57, 1.37, 0]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(3)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.02, 0.16, 7.34]}
        rotation={[0.28, -0.77, 1.77]}
        scale={1.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(3)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.78, 0.93, -1.64]}
        rotation={[1.57, 1.37, 0]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(2)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.04, 0.26, 7.35]}
        rotation={[0.28, -0.77, 1.77]}
        scale={1.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(2)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.79, 1, -1.64]}
        rotation={[1.57, 1.37, 0]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(1)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-0.85, 1.23, 7.4]}
        rotation={[0.2, 0, 1.57]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(1)005"].geometry}
        material={materials.FX_HUD_02}
        position={[2.31, 1.23, 7.4]}
        rotation={[0.2, 0, 1.57]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(1)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.21, 1.26, 2.69]}
        rotation={[1.57, -1.37, 3.14]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_Arrow_01_(1)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.91, 1.28, 1.91]}
        rotation={[1.57, 1.37, 0]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_04006.geometry}
        material={materials.FX_HUD_02}
        position={[-0.98, 1.31, 7.41]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_04005.geometry}
        material={materials.FX_HUD_02}
        position={[2.18, 1.31, 7.41]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_04004.geometry}
        material={materials.FX_HUD_02}
        position={[-7.22, 1.33, 2.59]}
        rotation={[1.57, -1.37, 1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_04003.geometry}
        material={materials.FX_HUD_02}
        position={[7.92, 1.35, 2.01]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(3)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.09, 0.16, 7.27]}
        rotation={[0.28, -0.77, 0.2]}
        scale={[0.6, 1.02, 1.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(3)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.78, 0.93, -1.57]}
        rotation={[1.57, 1.37, -1.57]}
        scale={[0.46, 0.77, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(2)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.12, 0.26, 7.27]}
        rotation={[0.28, -0.77, 0.2]}
        scale={1.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(2)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.79, 1, -1.55]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(1)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-1.03, 1.23, 7.4]}
        rotation={[0.2, 0, 0]}
        scale={[1.75, 1.01, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(1)005"].geometry}
        material={materials.FX_HUD_02}
        position={[2.13, 1.23, 7.4]}
        rotation={[0.2, 0, 0]}
        scale={[1.75, 1.01, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(1)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.21, 1.26, 2.55]}
        rotation={[1.57, -1.37, 1.57]}
        scale={[1.42, 0.82, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_04_(1)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.91, 1.28, 2.05]}
        rotation={[1.57, 1.37, -1.57]}
        scale={[1.42, 0.82, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_03013.geometry}
        material={materials.FX_HUD_02}
        position={[-7.24, 1, -1.57]}
        rotation={[1.57, -1.37, -1.57]}
        scale={[0.92, 1.09, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_03012.geometry}
        material={materials.FX_HUD_02}
        position={[-6.53, 0.28, 7.87]}
        rotation={[0.28, -0.77, -2.95]}
        scale={[1.22, 1.45, 1.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_03011.geometry}
        material={materials.FX_HUD_02}
        position={[7.79, 1.02, -2.2]}
        rotation={[1.57, 1.37, 1.57]}
        scale={[0.92, 1.09, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_03010.geometry}
        material={materials.FX_HUD_02}
        position={[7.54, 0.39, 7.44]}
        rotation={[-2.86, -0.77, -2.95]}
        scale={[2.18, 1.01, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02021.geometry}
        material={materials.FX_HUD_02}
        position={[-0.96, 1.06, 7.36]}
        rotation={[0.2, 0, -Math.PI]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02019.geometry}
        material={materials.FX_HUD_02}
        position={[2.2, 1.06, 7.36]}
        rotation={[0.2, 0, -Math.PI]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02018.geometry}
        material={materials.FX_HUD_02}
        position={[-7.18, 1.12, 2.61]}
        rotation={[1.57, -1.37, -1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02017.geometry}
        material={materials.FX_HUD_02}
        position={[-7.29, 1.24, -1.59]}
        rotation={[1.57, -1.37, -1.57]}
        scale={[1.27, 1.04, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02016.geometry}
        material={materials.FX_HUD_02}
        position={[-6.59, 0.59, 7.89]}
        rotation={[0.28, -0.77, -2.95]}
        scale={[1.68, 1.38, 1.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02015.geometry}
        material={materials.FX_HUD_02}
        position={[7.84, 1.26, -2.17]}
        rotation={[1.57, 1.37, 1.57]}
        scale={[1.27, 1.04, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02014.geometry}
        material={materials.FX_HUD_02}
        position={[7.88, 1.14, 1.99]}
        rotation={[1.57, 1.37, 1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_02013.geometry}
        material={materials.FX_HUD_02}
        position={[7.58, 0.14, 7.33]}
        rotation={[0.28, 0.77, -0.2]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_02_(1)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.14, 0.57, 7.33]}
        rotation={[0.28, -0.77, -2.95]}
        scale={1.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Text_02_(1)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.84, 1.24, -1.58]}
        rotation={[1.57, 1.37, 1.57]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_01006.geometry}
        material={materials.FX_HUD_02}
        position={[-1.68, 1.22, 7.39]}
        rotation={[0.2, 0, -Math.PI]}
        scale={[0.79, 1.01, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_01005.geometry}
        material={materials.FX_HUD_02}
        position={[1.48, 1.22, 7.39]}
        rotation={[0.2, 0, -Math.PI]}
        scale={[0.79, 1.01, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_01004.geometry}
        material={materials.FX_HUD_02}
        position={[-7.21, 1.26, 2.02]}
        rotation={[1.57, -1.37, -1.57]}
        scale={[0.64, 0.82, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Text_01003.geometry}
        material={materials.FX_HUD_02}
        position={[7.91, 1.28, 2.58]}
        rotation={[1.57, 1.37, 1.57]}
        scale={[0.64, 0.82, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Rings_04007.geometry}
        material={materials.FX_HUD_02}
        position={[-1.69, 0.95, 7.34]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Rings_04006.geometry}
        material={materials.FX_HUD_02}
        position={[1.47, 0.95, 7.34]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Rings_04005.geometry}
        material={materials.FX_HUD_02}
        position={[-7.17, 1.03, 2.01]}
        rotation={[1.57, -1.37, 1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Rings_04004.geometry}
        material={materials.FX_HUD_02}
        position={[7.86, 1.05, 2.59]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Rings_01006.geometry}
        material={materials.FX_HUD_02}
        position={[7.11, 0.45, 7.89]}
        rotation={[0.28, 0.77, -0.2]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_08006.geometry}
        material={materials.FX_HUD_02}
        position={[-7.25, 1.07, -1.88]}
        rotation={[1.57, -1.37, 1.57]}
        scale={[0.86, 1.02, 0.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_08005.geometry}
        material={materials.FX_HUD_02}
        position={[-6.83, 0.38, 7.59]}
        rotation={[0.28, -0.77, 0.2]}
        scale={[1.14, 1.35, 1.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_08004.geometry}
        material={materials.FX_HUD_02}
        position={[7.81, 1.09, -1.88]}
        rotation={[1.57, 1.37, -1.57]}
        scale={[0.86, 1.02, 0.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_03007.geometry}
        material={materials.FX_HUD_02}
        position={[-7.26, 1.08, -1.88]}
        rotation={[1.57, -1.37, 1.57]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_03006.geometry}
        material={materials.FX_HUD_02}
        position={[-6.83, 0.39, 7.59]}
        rotation={[0.28, -0.77, 0.2]}
        scale={0.64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Reticle_03005.geometry}
        material={materials.FX_HUD_02}
        position={[7.81, 1.1, -1.88]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_03006.geometry}
        material={materials.FX_HUD_02}
        position={[-0.99, 1.01, 7.35]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_03005.geometry}
        material={materials.FX_HUD_02}
        position={[2.17, 1.01, 7.35]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_03004.geometry}
        material={materials.FX_HUD_02}
        position={[-7.17, 1.08, 2.58]}
        rotation={[1.57, -1.37, 1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_03003.geometry}
        material={materials.FX_HUD_02}
        position={[7.87, 1.1, 2.02]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Box_03_(1)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.14, 0.56, 7.33]}
        rotation={[0.28, -0.77, 0.2]}
        scale={0.71}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Box_03_(1)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.84, 1.23, -1.58]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_02006.geometry}
        material={materials.FX_HUD_02}
        position={[7.14, 0.15, 7.78]}
        rotation={[0.28, 0.77, -0.2]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Box_01005.geometry}
        material={materials.FX_HUD_02}
        position={[7.58, 0.39, 7.41]}
        rotation={[0.28, 0.77, -0.2]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Barrier_02006.geometry}
        material={materials.FX_HUD_02}
        position={[7.38, 0.61, 7.66]}
        rotation={[0.28, 0.77, -0.2]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(3)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-1.34, 1.34, 7.42]}
        rotation={[0.2, 0, 0]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(3)005"].geometry}
        material={materials.FX_HUD_02}
        position={[1.82, 1.34, 7.42]}
        rotation={[0.2, 0, 0]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(3)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.23, 1.36, 2.3]}
        rotation={[1.57, -1.37, 1.57]}
        scale={[0.92, 0.89, 0.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(3)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.93, 1.38, 2.3]}
        rotation={[1.56, 1.11, -1.54]}
        scale={[0.92, 0.88, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(2)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-1.34, 0.77, 7.3]}
        rotation={[0.2, 0, -Math.PI]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(2)005"].geometry}
        material={materials.FX_HUD_02}
        position={[1.82, 0.77, 7.3]}
        rotation={[0.2, 0, -Math.PI]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(2)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.14, 0.89, 2.3]}
        rotation={[1.57, -1.37, -1.57]}
        scale={[0.92, 0.89, 0.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(2)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.83, 0.91, 2.3]}
        rotation={[1.56, 1.11, 1.6]}
        scale={[0.92, 0.88, 0.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_02_(1)006"].geometry}
        material={materials.FX_HUD_02}
        position={[7.3, 0.03, 7.58]}
        rotation={[0.28, 0.77, 2.95]}
        scale={[1.13, 1.09, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Barrier_01006.geometry}
        material={materials.FX_HUD_02}
        position={[7.73, 0.32, 7.23]}
        rotation={[0.28, 0.77, -1.77]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(5)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.22, 0.38, 7.2]}
        rotation={[0.28, -0.77, 1.77]}
        scale={[1.04, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(5)004"].geometry}
        material={materials.FX_HUD_02}
        position={[7.81, 1.1, -1.46]}
        rotation={[1.57, 1.37, 0]}
        scale={[0.78, 0.7, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(4)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.26, 1.08, -1.46]}
        rotation={[1.57, -1.37, 0]}
        scale={[0.78, 0.7, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(4)005"].geometry}
        material={materials.FX_HUD_02}
        position={[-6.44, 0.38, 7.99]}
        rotation={[0.28, -0.77, -1.38]}
        scale={[1.04, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(3)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-0.78, 1.05, 7.36]}
        rotation={[0.2, 0, -1.57]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(3)005"].geometry}
        material={materials.FX_HUD_02}
        position={[2.38, 1.05, 7.36]}
        rotation={[0.2, 0, -1.57]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(3)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.18, 1.12, 2.75]}
        rotation={[1.57, -1.37, 0]}
        scale={[0.84, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(3)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.88, 1.14, 1.85]}
        rotation={[1.57, 1.37, -3.14]}
        scale={[0.84, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(2)006"].geometry}
        material={materials.FX_HUD_02}
        position={[-1.89, 1.05, 7.36]}
        rotation={[0.2, 0, 1.57]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(2)005"].geometry}
        material={materials.FX_HUD_02}
        position={[1.27, 1.05, 7.36]}
        rotation={[0.2, 0, 1.57]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(2)004"].geometry}
        material={materials.FX_HUD_02}
        position={[-7.18, 1.12, 1.85]}
        rotation={[1.57, -1.37, 3.14]}
        scale={[0.84, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(2)003"].geometry}
        material={materials.FX_HUD_02}
        position={[7.88, 1.14, 2.75]}
        rotation={[1.57, 1.37, 0]}
        scale={[0.84, 0.75, 0.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["SM_Hud_Barrier_01_(1)006"].geometry}
        material={materials.FX_HUD_02}
        position={[6.95, 0.32, 8.01]}
        rotation={[0.28, 0.77, 1.38]}
        scale={[1.03, 0.92, 0.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Arrows_01007.geometry}
        material={materials.FX_HUD_02}
        position={[-1.34, 0.95, 7.34]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Arrows_01006.geometry}
        material={materials.FX_HUD_02}
        position={[1.82, 0.95, 7.34]}
        rotation={[0.2, 0, 0]}
        scale={1.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Arrows_01005.geometry}
        material={materials.FX_HUD_02}
        position={[-7.17, 1.04, 2.3]}
        rotation={[1.57, -1.37, 1.57]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Hud_Arrows_01004.geometry}
        material={materials.FX_HUD_02}
        position={[7.86, 1.06, 2.3]}
        rotation={[1.57, 1.37, -1.57]}
        scale={0.82}
      />
    </group>
  );
}
useGLTF.preload("./models/kontrol_odasi2.glb");
