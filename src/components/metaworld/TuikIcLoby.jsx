import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./SoloarSystemStyle.css";
import useZustandStore from "../../zustandStore";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  useCursor,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import mySvgImage from "./cursor_360.svg";

import TuikIcDaire1 from "./TuikIcDaire1";
import TuikIcDaire2 from "./TuikIcDaire2";
import TuikIcDaire3 from "./TuikIcDaire3";
import TuikIcDaire4 from "./TuikIcDaire4";

function LoaderBase() {
  const { progress } = useProgress();

  console.log("prog: ", progress);
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 28, color: "white" }}>
        Yükleniyor... {Math.round(progress)} %
      </div>
    </Html>
  );
}

const TuikIcBina = (props) => {
  const { nodes, materials } = useGLTF("./models/tuik_ic_loby.glb");

  const group = useRef();

  const setIsDaire1Triggered = useZustandStore(
    (state) => state.setIsDaire1Triggered
  );

  const handleGoToDaire1 = () => {
    setIsDaire1Triggered(true);
  };

  const setIsDaire2Triggered = useZustandStore(
    (state) => state.setIsDaire2Triggered
  );

  const handleGoToDaire2 = () => {
    setIsDaire2Triggered(true);
  };

  const setIsDaire3Triggered = useZustandStore(
    (state) => state.setIsDaire3Triggered
  );

  const handleGoToDaire3 = () => {
    setIsDaire3Triggered(true);
  };

  const setIsDaire4Triggered = useZustandStore(
    (state) => state.setIsDaire4Triggered
  );

  const handleGoToDaire4 = () => {
    setIsDaire4Triggered(true);
  };

  const [hovered, set] = useState();
  useCursor(hovered, "pointer", "auto", document.body);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[25, 12, 25]}
      scale={4}
    >
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[3.39, -1.621, -9.522]}
          rotation={[-Math.PI / 2, 0, 3.123]}
          scale={1.9}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <Html>
                <div
                  className="glassFrame"
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "140px",
                    textAlign: "center",
                    top: -220,
                    left: -50,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                  onClick={handleGoToDaire1}
                >
                  Daire-1
                </div>
              </Html>
              <group
                name="ElevatorCallingButtons003_15"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.DarkerMetal}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              />
              <group
                name="ElevatorCallingButtons007_13"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.Emission}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Metal}
                />
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.Emission}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Metal}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Metal}
                />
              </group>
              <group name="Plane_16" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Metal}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[5.593, -1.614, 3.496]}
          rotation={[-Math.PI / 2, 0, -1.583]}
        >
          <group
            name="63b2fcc006ff4ad286a699d4300f9fe2fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group name="ReceptionDesk" position={[0, 0, 1.411]} scale={0.01}>
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Body_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ReceptionDesk_ReceptionDesk_Body_0.geometry}
                  material={materials.ReceptionDesk_Body}
                />
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Desk_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ReceptionDesk_ReceptionDesk_Desk_0.geometry}
                  material={materials.ReceptionDesk_Desk}
                />
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Front_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ReceptionDesk_ReceptionDesk_Front_0.geometry}
                  material={materials.ReceptionDesk_Front}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="tk_icc"
          position={[-5.449, 8.791, -7.598]}
          rotation={[Math.PI, -1.559, Math.PI]}
          scale={0.01}
        >
          <mesh
            name="camlar"
            castShadow
            receiveShadow
            geometry={nodes.camlar.geometry}
            material={materials.camlar}
            position={[515.684, 9850.367, 33.074]}
            scale={100}
          />
          <mesh
            name="floor"
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={materials.floor}
            position={[515.684, 9850.367, 33.074]}
            scale={100}
          />
          <mesh
            name="metals"
            castShadow
            receiveShadow
            geometry={nodes.metals.geometry}
            material={materials.alm}
            position={[515.684, 9850.367, 33.074]}
            scale={100}
          />
          <mesh
            name="tavan"
            castShadow
            receiveShadow
            geometry={nodes.tavan.geometry}
            material={materials.alm}
            position={[515.684, 9850.367, 33.074]}
            scale={100}
          />
          <mesh
            name="walls"
            castShadow
            receiveShadow
            geometry={nodes.walls.geometry}
            material={materials.wall}
            position={[-3488.641, 9850.366, -7113.952]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[100, 100, 526.281]}
          />
        </group>
        <group
          name="Sketchfab_model002"
          position={[-18.127, -1.614, 3.205]}
          rotation={[-Math.PI / 2, 0, 1.562]}
        >
          <group
            name="63b2fcc006ff4ad286a699d4300f9fe2fbx001"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode001">
              <group
                name="ReceptionDesk001"
                position={[0, 0, 1.411]}
                scale={0.01}
              >
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Body_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.ReceptionDesk_ReceptionDesk_Body_0001.geometry
                  }
                  material={materials["ReceptionDesk_Body.001"]}
                />
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Desk_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.ReceptionDesk_ReceptionDesk_Desk_0001.geometry
                  }
                  material={materials["ReceptionDesk_Desk.001"]}
                />
                <mesh
                  name="ReceptionDesk_ReceptionDesk_Front_0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.ReceptionDesk_ReceptionDesk_Front_0001.geometry
                  }
                  material={materials["ReceptionDesk_Front.001"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[3.39, -1.621, -15.635]}
          rotation={[-Math.PI / 2, 0, 3.123]}
          scale={1.9}
        >
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <Html>
                <div
                  className="glassFrame"
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "140px",
                    textAlign: "center",
                    top: -240,
                    left: -50,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                  onClick={handleGoToDaire2}
                >
                  Daire-2
                </div>
              </Html>
              <group
                name="ElevatorCallingButtons003_15001"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41001.geometry}
                  material={materials["DarkerMetal.001"]}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14001"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="Object_39001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39001.geometry}
                  material={materials["Emission.001"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons007_13001"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37001.geometry}
                  material={materials["Emission.001"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12001"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34001.geometry}
                  material={materials["Metal.001"]}
                />
                <mesh
                  name="Object_35001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35001.geometry}
                  material={materials["Emission.001"]}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3001"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10001.geometry}
                  material={materials["Metal.001"]}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0001"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials["Metal.001"]}
                />
              </group>
              <group name="Plane_16001" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1001"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials["Metal.001"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model004"
          position={[3.39, -1.621, -22.047]}
          rotation={[-Math.PI / 2, 0, 3.123]}
          scale={1.9}
        >
          <group name="root002">
            <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="ElevatorCallingButtons003_15002"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41002.geometry}
                  material={materials["DarkerMetal.002"]}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14002"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              ></group>
              <group
                name="ElevatorCallingButtons007_13002"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37002.geometry}
                  material={materials["Emission.002"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12002"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34002.geometry}
                  material={materials["Metal.002"]}
                />
                <mesh
                  name="Object_35002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35002.geometry}
                  material={materials["Emission.002"]}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3002"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10002.geometry}
                  material={materials["Metal.002"]}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0002"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4002.geometry}
                  material={materials["Metal.002"]}
                />
              </group>
              <group name="Plane_16002" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1002"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6002.geometry}
                  material={materials["Metal.002"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model005"
          position={[-15.932, -1.621, -9.67]}
          rotation={[-Math.PI / 2, 0, -0.017]}
          scale={1.9}
        >
          <group name="root003">
            <group name="GLTF_SceneRootNode003" rotation={[Math.PI / 2, 0, 0]}>
              <Html>
                <div
                  className="glassFrame"
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "140px",
                    textAlign: "center",
                    top: -220,
                    left: -50,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                  onClick={handleGoToDaire3}
                >
                  Daire-3
                </div>
              </Html>
              <group
                name="ElevatorCallingButtons003_15003"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41003.geometry}
                  material={materials["DarkerMetal.003"]}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14003"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="Object_39003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39003.geometry}
                  material={materials["Emission.003"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons007_13003"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37003.geometry}
                  material={materials["Emission.003"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12003"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34003.geometry}
                  material={materials["Metal.003"]}
                />
                <mesh
                  name="Object_35003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35003.geometry}
                  material={materials["Emission.003"]}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3003"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10003.geometry}
                  material={materials["Metal.003"]}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0003"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4003.geometry}
                  material={materials["Metal.003"]}
                />
              </group>
              <group name="Plane_16003" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1003"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6003.geometry}
                  material={materials["Metal.003"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model006"
          position={[-15.817, -1.621, -15.946]}
          rotation={[-Math.PI / 2, 0, -0.017]}
          scale={1.9}
        >
          <group name="root004">
            <group name="GLTF_SceneRootNode004" rotation={[Math.PI / 2, 0, 0]}>
              <Html>
                <div
                  className="glassFrame"
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "140px",
                    textAlign: "center",
                    top: -240,
                    left: -50,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                  onClick={handleGoToDaire4}
                >
                  Daire-4
                </div>
              </Html>
              <group
                name="ElevatorCallingButtons003_15004"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41004.geometry}
                  material={materials["DarkerMetal.004"]}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14004"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="Object_39004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39004.geometry}
                  material={materials["Emission.004"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons007_13004"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37004.geometry}
                  material={materials["Emission.004"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12004"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34004.geometry}
                  material={materials["Metal.004"]}
                />
                <mesh
                  name="Object_35004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35004.geometry}
                  material={materials["Emission.004"]}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3004"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10004.geometry}
                  material={materials["Metal.004"]}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0004"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4004.geometry}
                  material={materials["Metal.004"]}
                />
              </group>
              <group name="Plane_16004" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1004"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6004.geometry}
                  material={materials["Metal.004"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model007"
          position={[-15.774, -1.621, -22.097]}
          rotation={[-Math.PI / 2, 0, -0.017]}
          scale={1.9}
        >
          <group name="root005">
            <group name="GLTF_SceneRootNode005" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="ElevatorCallingButtons003_15005"
                position={[0.188, 3.3, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1.322}
              >
                <mesh
                  name="Object_41005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41005.geometry}
                  material={materials["DarkerMetal.005"]}
                  position={[0, -0.15, 0]}
                />
              </group>
              <group
                name="ElevatorCallingButtons006_14005"
                position={[0.188, 3.283, -0.072]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.01}
              >
                <mesh
                  name="Object_39005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39005.geometry}
                  material={materials["Emission.005"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons007_13005"
                position={[-0.002, 3.322, 0.086]}
              >
                <mesh
                  name="Object_37005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37005.geometry}
                  material={materials["Emission.005"]}
                />
              </group>
              <group
                name="ElevatorCallingButtons_12005"
                position={[-0.017, 1.463, -1.335]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.192}
              >
                <mesh
                  name="Object_34005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34005.geometry}
                  material={materials["Metal.005"]}
                />
                <mesh
                  name="Object_35005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35005.geometry}
                  material={materials["Emission.005"]}
                />
              </group>
              <group
                name="ElevatorOutsideArmature_3005"
                position={[0.114, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Object_10005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10005.geometry}
                  material={materials["Metal.005"]}
                  position={[0, -0.19, 0]}
                />
              </group>
              <group
                name="LeftOutsideDoor_0005"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_4005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4005.geometry}
                  material={materials["Metal.005"]}
                />
              </group>
              <group name="Plane_16005" position={[-0.785, 0, -0.114]} />
              <group
                name="RightOutsideDoor_1005"
                position={[0.026, 1, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 0.438, 1]}
              >
                <mesh
                  name="Object_6005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6005.geometry}
                  material={materials["Metal.005"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const TuikIcLoby = () => {
  const isDaire1Triggered = useZustandStore((state) => state.isDaire1Triggered);
  const isDaire2Triggered = useZustandStore((state) => state.isDaire2Triggered);
  const isDaire3Triggered = useZustandStore((state) => state.isDaire3Triggered);
  const isDaire4Triggered = useZustandStore((state) => state.isDaire4Triggered);

  const setIsDaire1Triggered = useZustandStore(
    (state) => state.setIsDaire1Triggered
  );
  const setIsDaire2Triggered = useZustandStore(
    (state) => state.setIsDaire2Triggered
  );
  const setIsDaire3Triggered = useZustandStore(
    (state) => state.setIsDaire3Triggered
  );
  const setIsDaire4Triggered = useZustandStore(
    (state) => state.setIsDaire4Triggered
  );

  const isTuikGateTriggered = useZustandStore(
    (state) => state.isTuikGateTriggered
  );

  const setIsTuikGateTriggered = useZustandStore(
    (state) => state.setIsTuikGateTriggered
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );

  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleTuikGateTrigger = () => {
    setIsTuikGateTriggered(false);
    setIsGeriClickedInTuik(true);
    setIsGeriClickedInSolarSystem(false);
    setIsBilgiIcTriggered(false);
    setIsBilgiGateTriggered(true);
  };

  const handleDairelerGeri = () => {
    setIsDaire1Triggered(false);
    setIsDaire2Triggered(false);
    setIsDaire3Triggered(false);
    setIsDaire4Triggered(false);
  };

  const handleDaire1Geri = () => {
    setIsDaire1Triggered(false);
  };
  const handleDaire2Geri = () => {
    setIsDaire2Triggered(false);
  };

  const handleDaire3Geri = () => {
    setIsDaire3Triggered(false);
  };

  const handleDaire4Geri = () => {
    setIsDaire4Triggered(false);
  };

  return (
    <>
      <button
        className="button i-button"
        onClick={() => {
          // isDaire1Triggered ? handleDairelerGeri() : handleTuikGateTrigger();
          if (isDaire1Triggered) {
            handleDaire1Geri();
          } else if (isDaire2Triggered) {
            handleDaire2Geri();
          } else if (isDaire3Triggered) {
            handleDaire3Geri();
          } else if (isDaire4Triggered) {
            handleDaire4Geri();
          } else {
            handleTuikGateTrigger();
          }
        }}
        style={{
          position: "absolute",
          zIndex: 2,
          transform: "scale(0.6)",
          lineHeight: 1.4,
          fontSize: 34,
        }}
      >
        Geri
      </button>

      <div
        style={{
          position: "absolute",
          marginTop: "75vh",
          marginLeft: "5vh",
          fontSize: "20px",
          color: "lightblue",
          zIndex: 1,
          textAlign: "left",
          userSelect: "none",
        }}
      ></div>

      <Canvas>
        <Suspense fallback={<LoaderBase />}>
          <Environment
            background={false}
            blur={0.5}
            files="/env/paul_lobe_haus_1k.hdr"
          />

          <ambientLight intensity={0.01} />
          <pointLight intensity={0.5} position={[0, 0, 0]} />
          {/* {isDaire1Triggered ? <TuikIcDaire1 /> : <TuikIcBina />} */}
          {isDaire1Triggered ? (
            <TuikIcDaire1 />
          ) : isDaire2Triggered ? (
            <TuikIcDaire2 />
          ) : isDaire3Triggered ? (
            <TuikIcDaire3 />
          ) : isDaire4Triggered ? (
            <TuikIcDaire4 />
          ) : (
            <TuikIcBina />
          )}

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            makeDefault
            rotateSpeed={0.6}
            maxPolarAngle={1.5}
            minPolarAngle={1.1}
            minAzimuthAngle={-0.9}
            maxAzimuthAngle={0.9}
            minDistance={25}
            maxDistance={60}
            target={[0, 14, 0]}
          />

          <PerspectiveCamera makeDefault position={[0, 12, 60]} fov={65} />

          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur intensity={0.38} luminanceThreshold={0.8} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default TuikIcLoby;
