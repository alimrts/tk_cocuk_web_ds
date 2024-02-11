import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTrimesh } from "@react-three/cannon";

export function CityScene1(props) {
  const { nodes, materials } = useGLTF("./models/city_c7.glb");

  // const [ref] = useTrimesh(
  //   () => ({
  //     args: [
  //       nodes.SCHOOL001.geometry.attributes.position.array,
  //       nodes.SCHOOL001.geometry.index.array,
  //     ],
  //     mass: 1,
  //     ...props,
  //   }),
  //   useRef()
  // );

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="toplar001"
          position={[-0.161, -1.168, 73.252]}
          rotation={[Math.PI, -Math.PI / 6, 0]}
          scale={0.438}
        />
        <mesh
          name="Road174"
          castShadow
          receiveShadow
          geometry={nodes.Road174.geometry}
          material={materials["COLOR.005"]}
          position={[48.492, -0.018, -34.86]}
          scale={0.01}
        />
        <mesh
          name="Walking_Road014"
          castShadow
          receiveShadow
          geometry={nodes.Walking_Road014.geometry}
          material={materials["COLOR.005"]}
          position={[36.438, -0.018, -46.914]}
          scale={0.01}
        />
        <mesh
          name="Straight_Road071"
          castShadow
          receiveShadow
          geometry={nodes.Straight_Road071.geometry}
          material={materials["COLOR.005"]}
          position={[96.707, -0.018, -167.452]}
          scale={0.01}
        />
        <mesh
          name="Not_Walking_Road3005"
          castShadow
          receiveShadow
          geometry={nodes.Not_Walking_Road3005.geometry}
          material={materials["COLOR.005"]}
          position={[-132.317, -0.018, 170.056]}
          scale={0.01}
        />
        <mesh
          name="tuik_zemin001"
          castShadow
          receiveShadow
          geometry={nodes.tuik_zemin001.geometry}
          material={materials["COLOR.005"]}
          position={[-47.939, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          name="Ground411"
          castShadow
          receiveShadow
          geometry={nodes.Ground411.geometry}
          material={materials["COLOR.005"]}
          position={[72.599, -0.018, -10.752]}
          scale={0.01}
        />
        <mesh
          name="Ground418"
          castShadow
          receiveShadow
          geometry={nodes.Ground418.geometry}
          material={materials["COLOR.005"]}
          position={[60.546, -0.018, -83.075]}
          scale={0.01}
        />
        <mesh
          name="Ground419"
          castShadow
          receiveShadow
          geometry={nodes.Ground419.geometry}
          material={materials["COLOR.005"]}
          position={[0.276, -0.018, -71.021]}
          scale={0.01}
        />
        <mesh
          name="Ground420"
          castShadow
          receiveShadow
          geometry={nodes.Ground420.geometry}
          material={materials["COLOR.005"]}
          position={[-59.993, -0.018, -95.129]}
          scale={0.01}
        />
        <mesh
          name="Ground421"
          castShadow
          receiveShadow
          geometry={nodes.Ground421.geometry}
          material={materials["COLOR.005"]}
          position={[-23.832, -0.018, -143.345]}
          scale={0.01}
        />
        <mesh
          name="Ground422"
          castShadow
          receiveShadow
          geometry={nodes.Ground422.geometry}
          material={materials["COLOR.005"]}
          position={[-120.263, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          name="Ground423"
          castShadow
          receiveShadow
          geometry={nodes.Ground423.geometry}
          material={materials["COLOR.005"]}
          position={[-11.778, -0.018, 145.949]}
          scale={0.01}
        />
        <mesh
          name="Ground424"
          castShadow
          receiveShadow
          geometry={nodes.Ground424.geometry}
          material={materials["COLOR.005"]}
          position={[72.599, -0.018, 73.625]}
          scale={0.01}
        />
        <mesh
          name="SCHOOL002"
          castShadow
          receiveShadow
          geometry={nodes.SCHOOL002.geometry}
          material={materials["COLOR.005"]}
          position={[95.034, -0.015, 67.71]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="RESTAURANT002"
          castShadow
          receiveShadow
          geometry={nodes.RESTAURANT002.geometry}
          material={materials["COLOR.005"]}
          position={[-82.127, -0.017, 149.774]}
          rotation={[0, 1.571, 0]}
          scale={0.008}
        />
        <mesh
          name="TENNIS_STADIUM2002"
          castShadow
          receiveShadow
          geometry={nodes.TENNIS_STADIUM2002.geometry}
          material={materials["COLOR.005"]}
          position={[46.189, -0.044, 140.852]}
          scale={0.01}
        />
        <mesh
          name="FOOTBALL_STADIUM002"
          castShadow
          receiveShadow
          geometry={nodes.FOOTBALL_STADIUM002.geometry}
          material={materials["COLOR.005"]}
          position={[9.163, -0.014, 139.897]}
          scale={0.01}
        />
        <mesh
          name="HOSPITAL002"
          castShadow
          receiveShadow
          geometry={nodes.HOSPITAL002.geometry}
          material={materials["COLOR.005"]}
          position={[55.73, -0.017, -81.93]}
          scale={0.01}
        />
        <mesh
          name="COFFEE002"
          castShadow
          receiveShadow
          geometry={nodes.COFFEE002.geometry}
          material={materials["COLOR.005"]}
          position={[-41.728, -0.233, 151.208]}
          rotation={[0, 1.571, 0]}
          scale={0.008}
        />
        <mesh
          name="GasStationGround002"
          castShadow
          receiveShadow
          geometry={nodes.GasStationGround002.geometry}
          material={materials["COLOR.005"]}
          position={[7.319, -0.017, 67.598]}
          rotation={[0, -1.571, 0]}
          scale={[0.008, 0.01, 0.01]}
        />
        <mesh
          name="LIBRARY002"
          castShadow
          receiveShadow
          geometry={nodes.LIBRARY002.geometry}
          material={materials["COLOR.005"]}
          position={[-16.893, 0.397, 149.186]}
          scale={0.01}
        />
        <mesh
          name="Parking_Ground002"
          castShadow
          receiveShadow
          geometry={nodes.Parking_Ground002.geometry}
          material={materials["COLOR.005"]}
          position={[0.091, -0.018, 1.038]}
          scale={0.01}
        />
        <mesh
          name="FRUIT_SHOP006"
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP006.geometry}
          material={materials["COLOR.005"]}
          position={[95.817, -0.017, -153.312]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING003"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING003.geometry}
          material={materials["COLOR.005"]}
          position={[49.214, -0.017, -134.889]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING002"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING002.geometry}
          material={materials["COLOR.005"]}
          position={[80.608, -0.017, -152.47]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3014"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3014.geometry}
          material={materials["COLOR.005"]}
          position={[63.958, -0.012, -155.284]}
          scale={0.01}
        />
        <mesh
          name="ORANGE_BUILDING3005"
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3005.geometry}
          material={materials["COLOR.005"]}
          position={[52.595, -0.017, 18.333]}
          scale={0.01}
        />
        <mesh
          name="ORANGE_BUILDING3007"
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3007.geometry}
          material={materials["COLOR.005"]}
          position={[52.595, -0.017, -18.285]}
          scale={0.01}
        />
        <mesh
          name="ORANGE_SMALL_TOWER004"
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_SMALL_TOWER004.geometry}
          material={materials["COLOR.005"]}
          position={[35.105, 0.287, -155.692]}
          scale={0.01}
        />
        <mesh
          name="WHITE_SMALL_TOWER004"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_SMALL_TOWER004.geometry}
          material={materials["COLOR.005"]}
          position={[35.29, -0.017, -135.427]}
          scale={0.01}
        />
        <mesh
          name="HOTEL002"
          castShadow
          receiveShadow
          geometry={nodes.HOTEL002.geometry}
          material={materials["COLOR.005"]}
          position={[21.722, 0.287, -142.958]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3017"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3017.geometry}
          material={materials["COLOR.005"]}
          position={[4.033, -0.012, -155.87]}
          scale={0.01}
        />
        <mesh
          name="BROWN_BUILDING3002"
          castShadow
          receiveShadow
          geometry={nodes.BROWN_BUILDING3002.geometry}
          material={materials["COLOR.005"]}
          position={[4.704, -0.017, -131.207]}
          scale={0.01}
        />
        <mesh
          name="COURT002"
          castShadow
          receiveShadow
          geometry={nodes.COURT002.geometry}
          material={materials["COLOR.005"]}
          position={[53.147, -0.017, 67.569]}
          scale={0.01}
        />
        <mesh
          name="COFFEE_SHOP002"
          castShadow
          receiveShadow
          geometry={nodes.COFFEE_SHOP002.geometry}
          material={materials["COLOR.005"]}
          position={[-23.347, -0.017, -22.086]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="CLOTHES_SHOP001"
          castShadow
          receiveShadow
          geometry={nodes.CLOTHES_SHOP001.geometry}
          material={materials["COLOR.005"]}
          position={[-64.576, -0.223, 150.782]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="PHARMACY004"
          castShadow
          receiveShadow
          geometry={nodes.PHARMACY004.geometry}
          material={materials["COLOR.005"]}
          position={[97.308, -0.017, -61.17]}
          rotation={[0, 0.182, 0]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING2007"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2007.geometry}
          material={materials["COLOR.005"]}
          position={[73.039, -0.017, -15.891]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING2009"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2009.geometry}
          material={materials["COLOR.005"]}
          position={[73.039, -0.017, 20.172]}
          scale={0.01}
        />
        <mesh
          name="TOOLS_SHOP003"
          castShadow
          receiveShadow
          geometry={nodes.TOOLS_SHOP003.geometry}
          material={materials["COLOR.005"]}
          position={[-12.039, -0.017, -132.781]}
          scale={0.01}
        />
        <mesh
          name="FAST_FOOD002"
          castShadow
          receiveShadow
          geometry={nodes.FAST_FOOD002.geometry}
          material={materials["COLOR.005"]}
          position={[-14.877, -0.017, -151.74]}
          scale={0.01}
        />
        <mesh
          name="CENTER_BUILDING002"
          castShadow
          receiveShadow
          geometry={nodes.CENTER_BUILDING002.geometry}
          material={materials["COLOR.005"]}
          position={[67.581, -0.017, -133.308]}
          scale={0.01}
        />
        <mesh
          name="Ground425"
          castShadow
          receiveShadow
          geometry={nodes.Ground425.geometry}
          material={materials["COLOR.005"]}
          position={[132.869, -0.018, -83.075]}
          scale={0.01}
        />
        <mesh
          name="Ground426"
          castShadow
          receiveShadow
          geometry={nodes.Ground426.geometry}
          material={materials["COLOR.005"]}
          position={[132.869, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          name="Ground427"
          castShadow
          receiveShadow
          geometry={nodes.Ground427.geometry}
          material={materials["COLOR.005"]}
          position={[132.869, -0.018, 85.679]}
          scale={0.01}
        />
        <mesh
          name="Ground428"
          castShadow
          receiveShadow
          geometry={nodes.Ground428.geometry}
          material={materials["COLOR.005"]}
          position={[132.869, -0.018, 145.949]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3018"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3018.geometry}
          material={materials["COLOR.005"]}
          position={[94.448, -0.012, -17.691]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3023"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3023.geometry}
          material={materials["COLOR.005"]}
          position={[94.448, -0.012, 19.352]}
          scale={0.01}
        />
        <mesh
          name="POLICE_STATION002"
          castShadow
          receiveShadow
          geometry={nodes.POLICE_STATION002.geometry}
          material={materials["COLOR.005"]}
          position={[126.904, -0.017, 67.662]}
          scale={0.01}
        />
        <mesh
          name="ORANGE_BUILDING3008"
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3008.geometry}
          material={materials["COLOR.005"]}
          position={[121.444, -0.017, 154.463]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3024"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3024.geometry}
          material={materials["COLOR.005"]}
          position={[157.563, -0.012, 154.61]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING005"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING005.geometry}
          material={materials["COLOR.005"]}
          position={[155.098, -0.017, 128.481]}
          scale={0.01}
        />
        <mesh
          name="OPEN_ROAD009"
          castShadow
          receiveShadow
          geometry={nodes.OPEN_ROAD009.geometry}
          material={materials["COLOR.005"]}
          position={[36.438, -0.02, 1.302]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE021"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE021.geometry}
          material={materials["COLOR.005"]}
          position={[-105.853, -0.017, -156.681]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE024"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE024.geometry}
          material={materials["COLOR.005"]}
          position={[-105.853, -0.017, -120.064]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE025"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE025.geometry}
          material={materials["COLOR.005"]}
          position={[-124.406, -0.017, -100.236]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE026"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE026.geometry}
          material={materials["COLOR.005"]}
          position={[-124.406, -0.017, -63.618]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE027"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE027.geometry}
          material={materials["COLOR.005"]}
          position={[-124.406, -0.017, -5.975]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE028"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE028.geometry}
          material={materials["COLOR.005"]}
          position={[-124.406, -0.017, 30.643]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE029"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE029.geometry}
          material={materials["COLOR.005"]}
          position={[-104.42, -0.017, 88.893]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE030"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE030.geometry}
          material={materials["COLOR.005"]}
          position={[-104.42, -0.017, 125.51]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1021"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1021.geometry}
          material={materials["COLOR.005"]}
          position={[-103.214, -0.017, 42.031]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1022"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1022.geometry}
          material={materials["COLOR.005"]}
          position={[-103.214, -0.017, -6.313]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1023"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1023.geometry}
          material={materials["COLOR.005"]}
          position={[-125.187, -0.017, -40.92]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1024"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1024.geometry}
          material={materials["COLOR.005"]}
          position={[-114.952, -0.017, -79.209]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1025"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1025.geometry}
          material={materials["COLOR.005"]}
          position={[-114.952, -0.017, -125.295]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1026"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1026.geometry}
          material={materials["COLOR.005"]}
          position={[-124.649, -0.017, -148.786]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE027"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE027.geometry}
          material={materials["COLOR.005"]}
          position={[-114.143, -0.017, -40.836]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE028"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE028.geometry}
          material={materials["COLOR.005"]}
          position={[-123.714, -0.286, 103.483]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE029"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE029.geometry}
          material={materials["COLOR.005"]}
          position={[-123.714, -0.017, 152.521]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE030"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE030.geometry}
          material={materials["COLOR.005"]}
          position={[-114.179, -0.017, 69.967]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE031"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE031.geometry}
          material={materials["COLOR.005"]}
          position={[-105.29, -0.017, -141.146]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE032"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE032.geometry}
          material={materials["COLOR.005"]}
          position={[-108.419, -0.017, 13.181]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE033"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE033.geometry}
          material={materials["COLOR.005"]}
          position={[-120.343, -0.017, 51.276]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE031"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE031.geometry}
          material={materials["COLOR.005"]}
          position={[-103.414, -0.017, -86.078]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE003"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE003.geometry}
          material={materials["COLOR.005"]}
          position={[-114.261, -0.017, 129.807]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE005"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE005.geometry}
          material={materials["COLOR.005"]}
          position={[-110.852, -0.017, 62.143]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE006"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE006.geometry}
          material={materials["COLOR.005"]}
          position={[-115.144, -0.017, -19.722]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE007"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE007.geometry}
          material={materials["COLOR.005"]}
          position={[-114.014, -0.017, -155.757]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE032"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE032.geometry}
          material={materials["COLOR.005"]}
          position={[-103.414, -0.017, -61.491]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE050"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE050.geometry}
          material={materials["COLOR.005"]}
          position={[-8.341, -0.017, -102.888]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE052"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE052.geometry}
          material={materials["COLOR.005"]}
          position={[9.116, -0.017, -67.303]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE063"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE063.geometry}
          material={materials["COLOR.005"]}
          position={[-19.426, -0.017, -82.957]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE064"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE064.geometry}
          material={materials["COLOR.005"]}
          position={[21.228, -0.017, -82.957]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE043"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE043.geometry}
          material={materials["COLOR.005"]}
          position={[-15.44, -0.017, -72.569]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE044"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE044.geometry}
          material={materials["COLOR.005"]}
          position={[7.302, -0.017, -105.57]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1030"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1030.geometry}
          material={materials["COLOR.005"]}
          position={[-18.878, -0.017, -58.867]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1031"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1031.geometry}
          material={materials["COLOR.005"]}
          position={[20.926, -0.017, -58.867]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1036"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1036.geometry}
          material={materials["COLOR.005"]}
          position={[20.926, -0.017, -109.782]}
          scale={0.01}
        />
        <mesh
          name="TREE026"
          castShadow
          receiveShadow
          geometry={nodes.TREE026.geometry}
          material={materials["COLOR.005"]}
          position={[2.42, -0.017, -87.914]}
          scale={0.01}
        />
        <mesh
          name="TREE027"
          castShadow
          receiveShadow
          geometry={nodes.TREE027.geometry}
          material={materials["COLOR.005"]}
          position={[-24.421, -0.017, -62.532]}
          scale={0.01}
        />
        <mesh
          name="TREE028"
          castShadow
          receiveShadow
          geometry={nodes.TREE028.geometry}
          material={materials["COLOR.005"]}
          position={[-24.421, -0.017, -105.72]}
          scale={0.01}
        />
        <mesh
          name="TREE029"
          castShadow
          receiveShadow
          geometry={nodes.TREE029.geometry}
          material={materials["COLOR.005"]}
          position={[24.905, -0.017, -105.72]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE025"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE025.geometry}
          material={materials["COLOR.005"]}
          position={[66.585, 0.159, -111.725]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE027"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE027.geometry}
          material={materials["COLOR.005"]}
          position={[78.333, 0.159, -111.725]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE028"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE028.geometry}
          material={materials["COLOR.005"]}
          position={[90.642, 0.159, -111.725]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE029"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE029.geometry}
          material={materials["COLOR.005"]}
          position={[66.585, 0.159, -54.621]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE030"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE030.geometry}
          material={materials["COLOR.005"]}
          position={[78.333, 0.159, -54.621]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE031"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE031.geometry}
          material={materials["COLOR.005"]}
          position={[90.642, 0.159, -54.621]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1037"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1037.geometry}
          material={materials["COLOR.005"]}
          position={[-75.506, -0.017, 120.303]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1048"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1048.geometry}
          material={materials["COLOR.005"]}
          position={[-84.038, -0.017, 120.303]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE032"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE032.geometry}
          material={materials["COLOR.005"]}
          position={[64.271, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE033"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE033.geometry}
          material={materials["COLOR.005"]}
          position={[64.271, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE034"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE034.geometry}
          material={materials["COLOR.005"]}
          position={[28.11, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE035"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE035.geometry}
          material={materials["COLOR.005"]}
          position={[28.11, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE036"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE036.geometry}
          material={materials["COLOR.005"]}
          position={[99.867, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          name="SQUARE_TREE037"
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE037.geometry}
          material={materials["COLOR.005"]}
          position={[99.867, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1049"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1049.geometry}
          material={materials["COLOR.005"]}
          position={[133.548, -0.017, -56.478]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1050"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1050.geometry}
          material={materials["COLOR.005"]}
          position={[144.166, -0.017, -56.478]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1051"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1051.geometry}
          material={materials["COLOR.005"]}
          position={[133.548, -0.017, -157.522]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1052"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1052.geometry}
          material={materials["COLOR.005"]}
          position={[144.166, -0.017, -157.522]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE065"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE065.geometry}
          material={materials["COLOR.005"]}
          position={[121.958, -0.017, -137.984]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE066"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE066.geometry}
          material={materials["COLOR.005"]}
          position={[138.752, -0.017, -123.199]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE067"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE067.geometry}
          material={materials["COLOR.005"]}
          position={[138.752, -0.017, -103.098]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE068"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE068.geometry}
          material={materials["COLOR.005"]}
          position={[160.358, -0.017, -123.199]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE069"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE069.geometry}
          material={materials["COLOR.005"]}
          position={[160.358, -0.017, -159.82]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE070"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE070.geometry}
          material={materials["COLOR.005"]}
          position={[160.358, -0.017, -55.219]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR017"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR017.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, -149.162]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR018"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR018.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, -137.402]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR019"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR019.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, -101.496]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR020"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR020.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, -4.275]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR021"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR021.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, 7.484]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR042"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR042.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, 80.034]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR043"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR043.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, 91.794]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR044"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR044.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, 140.229]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR045"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR045.geometry}
          material={materials["COLOR.005"]}
          position={[-114.216, -0.017, 151.988]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR2003"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR2003.geometry}
          material={materials["COLOR.005"]}
          position={[-113.838, -0.017, -58.712]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR2004"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR2004.geometry}
          material={materials["COLOR.005"]}
          position={[-113.838, -0.017, 31.681]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR2005"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR2005.geometry}
          material={materials["COLOR.005"]}
          position={[-113.838, -0.017, 115.396]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR067"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR067.geometry}
          material={materials["COLOR.005"]}
          position={[84.859, -0.017, -110.781]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR078"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR078.geometry}
          material={materials["COLOR.005"]}
          position={[72.134, -0.017, -110.781]}
          scale={0.01}
        />
        <mesh
          name="PHARMACY005"
          castShadow
          receiveShadow
          geometry={nodes.PHARMACY005.geometry}
          material={materials["COLOR.005"]}
          position={[-26.731, -0.017, -133.37]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3025"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3025.geometry}
          material={materials["COLOR.005"]}
          position={[52.55, -0.017, 0.055]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3026"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3026.geometry}
          material={materials["COLOR.005"]}
          position={[94.752, -0.017, 0.055]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING2010"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2010.geometry}
          material={materials["COLOR.005"]}
          position={[73.179, -0.017, 1.584]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3027"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3027.geometry}
          material={materials["COLOR.005"]}
          position={[146.19, -0.017, 154.557]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3028"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3028.geometry}
          material={materials["COLOR.005"]}
          position={[134.149, -0.012, 154.61]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT028"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT028.geometry}
          material={materials["COLOR.005"]}
          position={[113.418, -0.444, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT029"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT029.geometry}
          material={materials["COLOR.005"]}
          position={[104.143, -0.444, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT031"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT031.geometry}
          material={materials["COLOR.005"]}
          position={[41.119, -0.035, 32.785]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT033"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT033.geometry}
          material={materials["COLOR.005"]}
          position={[31.79, -0.002, 42.085]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT067"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT067.geometry}
          material={materials["COLOR.005"]}
          position={[-31.232, -0.035, 32.785]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT068"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT068.geometry}
          material={materials["COLOR.005"]}
          position={[-30.952, -0.002, 42.085]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT069"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT069.geometry}
          material={materials["COLOR.005"]}
          position={[113.455, -0.342, 32.785]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT070"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT070.geometry}
          material={materials["COLOR.005"]}
          position={[104.127, -0.308, 42.085]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT081"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT081.geometry}
          material={materials["COLOR.005"]}
          position={[-91.467, -0.47, -41.927]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT082"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT082.geometry}
          material={materials["COLOR.005"]}
          position={[-91.467, -0.47, -39.778]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT083"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT083.geometry}
          material={materials["COLOR.005"]}
          position={[-91.479, -0.368, 32.989]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT084"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT084.geometry}
          material={materials["COLOR.005"]}
          position={[-101.17, -0.312, 42.354]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT085"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT085.geometry}
          material={materials["COLOR.005"]}
          position={[-40.42, 0.287, -114.751]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT086"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT086.geometry}
          material={materials["COLOR.005"]}
          position={[-30.417, 0.287, -123.715]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT087"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT087.geometry}
          material={materials["COLOR.005"]}
          position={[31.86, 0.287, -114.751]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT088"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT088.geometry}
          material={materials["COLOR.005"]}
          position={[41.863, 0.287, -123.715]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT089"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT089.geometry}
          material={materials["COLOR.005"]}
          position={[103.986, -0.019, -114.751]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT090"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT090.geometry}
          material={materials["COLOR.005"]}
          position={[113.286, -0.019, -123.715]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT091"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT091.geometry}
          material={materials["COLOR.005"]}
          position={[164.427, -0.354, 42.048]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT092"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT092.geometry}
          material={materials["COLOR.005"]}
          position={[173.727, -0.387, 33.083]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT093"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT093.geometry}
          material={materials["COLOR.005"]}
          position={[41.006, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT094"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT094.geometry}
          material={materials["COLOR.005"]}
          position={[31.731, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT095"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT095.geometry}
          material={materials["COLOR.005"]}
          position={[-31.244, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT096"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT096.geometry}
          material={materials["COLOR.005"]}
          position={[-40.519, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT097"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT097.geometry}
          material={materials["COLOR.005"]}
          position={[41.006, 0.018, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT098"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT098.geometry}
          material={materials["COLOR.005"]}
          position={[31.731, 0.018, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT099"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT099.geometry}
          material={materials["COLOR.005"]}
          position={[-31.216, 0.018, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT100"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT100.geometry}
          material={materials["COLOR.005"]}
          position={[-40.491, 0.018, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT101"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT101.geometry}
          material={materials["COLOR.005"]}
          position={[113.378, -0.289, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT102"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT102.geometry}
          material={materials["COLOR.005"]}
          position={[104.103, -0.289, 103.811]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT103"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT103.geometry}
          material={materials["COLOR.005"]}
          position={[-91.467, -0.315, 102.731]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT104"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT104.geometry}
          material={materials["COLOR.005"]}
          position={[-91.467, -0.315, 104.88]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT105"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT105.geometry}
          material={materials["COLOR.005"]}
          position={[164.292, -0.334, 102.731]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT106"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT106.geometry}
          material={materials["COLOR.005"]}
          position={[164.336, -0.334, 104.927]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT107"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT107.geometry}
          material={materials["COLOR.005"]}
          position={[164.292, -0.49, -41.984]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_LIGHT108"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT108.geometry}
          material={materials["COLOR.005"]}
          position={[164.336, -0.49, -39.788]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET054"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET054.geometry}
          material={materials["COLOR.005"]}
          position={[113.51, -0.323, -26.043]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET055"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET055.geometry}
          material={materials["COLOR.005"]}
          position={[104.158, -0.019, 24.338]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET056"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET056.geometry}
          material={materials["COLOR.005"]}
          position={[173.81, -0.065, -26.043]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET063"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET063.geometry}
          material={materials["COLOR.005"]}
          position={[164.458, -0.065, 24.338]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET065"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET065.geometry}
          material={materials["COLOR.005"]}
          position={[173.81, -0.065, -123.035]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET083"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET083.geometry}
          material={materials["COLOR.005"]}
          position={[164.458, -0.065, -72.654]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET084"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET084.geometry}
          material={materials["COLOR.005"]}
          position={[173.81, -0.065, 82.608]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET090"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET090.geometry}
          material={materials["COLOR.005"]}
          position={[164.458, -0.065, 132.989]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET091"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET091.geometry}
          material={materials["COLOR.005"]}
          position={[158.116, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET093"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET093.geometry}
          material={materials["COLOR.005"]}
          position={[118.009, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET103"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET103.geometry}
          material={materials["COLOR.005"]}
          position={[91.22, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET104"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET104.geometry}
          material={materials["COLOR.005"]}
          position={[51.113, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET105"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET105.geometry}
          material={materials["COLOR.005"]}
          position={[20.653, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET106"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET106.geometry}
          material={materials["COLOR.005"]}
          position={[-19.454, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET107"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET107.geometry}
          material={materials["COLOR.005"]}
          position={[-46.04, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET108"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET108.geometry}
          material={materials["COLOR.005"]}
          position={[-86.146, 0.018, 103.782]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET109"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET109.geometry}
          material={materials["COLOR.005"]}
          position={[-46.04, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET110"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET110.geometry}
          material={materials["COLOR.005"]}
          position={[-86.146, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET111"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET111.geometry}
          material={materials["COLOR.005"]}
          position={[20.463, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET112"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET112.geometry}
          material={materials["COLOR.005"]}
          position={[-19.644, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET113"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET113.geometry}
          material={materials["COLOR.005"]}
          position={[93.441, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET114"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET114.geometry}
          material={materials["COLOR.005"]}
          position={[53.334, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET115"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET115.geometry}
          material={materials["COLOR.005"]}
          position={[158.96, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET116"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET116.geometry}
          material={materials["COLOR.005"]}
          position={[118.853, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET117"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET117.geometry}
          material={materials["COLOR.005"]}
          position={[138.904, -0.002, 42.174]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET118"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET118.geometry}
          material={materials["COLOR.005"]}
          position={[63.481, -0.002, 42.039]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET119"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET119.geometry}
          material={materials["COLOR.005"]}
          position={[6.895, -0.035, 32.869]}
          scale={0.007}
        />
        <mesh
          name="LIGHT_STREET120"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET120.geometry}
          material={materials["COLOR.005"]}
          position={[-31.035, 0.287, -107.901]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET121"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET121.geometry}
          material={materials["COLOR.005"]}
          position={[-1.649, 0.287, -114.693]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET122"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET122.geometry}
          material={materials["COLOR.005"]}
          position={[-68.933, 0.287, -123.858]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET123"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET123.geometry}
          material={materials["COLOR.005"]}
          position={[55.055, 0.287, -123.858]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET124"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET124.geometry}
          material={materials["COLOR.005"]}
          position={[93.453, 0.287, -114.603]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET125"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET125.geometry}
          material={materials["COLOR.005"]}
          position={[31.95, 0.287, -76.132]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET126"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET126.geometry}
          material={materials["COLOR.005"]}
          position={[113.231, -0.019, -56.717]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET127"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET127.geometry}
          material={materials["COLOR.005"]}
          position={[104.187, -0.019, -102.772]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET128"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET128.geometry}
          material={materials["COLOR.005"]}
          position={[-91.556, -0.046, -145.797]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET129"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET129.geometry}
          material={materials["COLOR.005"]}
          position={[-100.751, -0.023, -82.57]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET130"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET130.geometry}
          material={materials["COLOR.005"]}
          position={[-40.463, 0.287, -62.658]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET131"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET131.geometry}
          material={materials["COLOR.005"]}
          position={[-31.18, 0.287, -25.542]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET132"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET132.geometry}
          material={materials["COLOR.005"]}
          position={[40.925, 0.287, -25.542]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET133"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET133.geometry}
          material={materials["COLOR.005"]}
          position={[31.57, 0.287, 26.334]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET134"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET134.geometry}
          material={materials["COLOR.005"]}
          position={[-100.566, -0.023, 0.506]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET135"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET135.geometry}
          material={materials["COLOR.005"]}
          position={[-100.566, -0.023, 67.193]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET136"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET136.geometry}
          material={materials["COLOR.005"]}
          position={[-31.587, 0.287, 87.337]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET137"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET137.geometry}
          material={materials["COLOR.005"]}
          position={[-100.566, -0.023, 122.53]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE009"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE009.geometry}
          material={materials["COLOR.005"]}
          position={[111.619, -0.017, 156.73]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE010"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE010.geometry}
          material={materials["COLOR.005"]}
          position={[108.75, -0.017, 156.73]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE011"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE011.geometry}
          material={materials["COLOR.005"]}
          position={[105.944, -0.017, 156.73]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE012"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE012.geometry}
          material={materials["COLOR.005"]}
          position={[171.891, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE013"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE013.geometry}
          material={materials["COLOR.005"]}
          position={[169.022, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE014"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE014.geometry}
          material={materials["COLOR.005"]}
          position={[166.216, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE024"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE024.geometry}
          material={materials["COLOR.005"]}
          position={[171.891, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE025"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE025.geometry}
          material={materials["COLOR.005"]}
          position={[169.022, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CONE026"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE026.geometry}
          material={materials["COLOR.005"]}
          position={[166.216, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER020"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER020.geometry}
          material={materials["COLOR.005"]}
          position={[163.511, -0.065, 85.677]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER021"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER021.geometry}
          material={materials["COLOR.005"]}
          position={[163.511, -0.065, 77.176]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER022"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER022.geometry}
          material={materials["COLOR.005"]}
          position={[163.511, -0.065, 67.725]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER023"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER023.geometry}
          material={materials["COLOR.005"]}
          position={[163.511, -0.065, 59.019]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER024"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER024.geometry}
          material={materials["COLOR.005"]}
          position={[163.511, -0.065, 49.674]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER025"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER025.geometry}
          material={materials["COLOR.005"]}
          position={[114.212, -0.019, 85.677]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER026"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER026.geometry}
          material={materials["COLOR.005"]}
          position={[114.212, -0.019, 77.176]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER027"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER027.geometry}
          material={materials["COLOR.005"]}
          position={[114.212, -0.019, 67.725]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER028"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER028.geometry}
          material={materials["COLOR.005"]}
          position={[114.212, -0.019, 59.019]}
          scale={0.01}
        />
        <mesh
          name="TRAFFIC_CYLINDER029"
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER029.geometry}
          material={materials["COLOR.005"]}
          position={[114.212, -0.019, 49.674]}
          scale={0.01}
        />
        <mesh
          name="CONCRETE007"
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE007.geometry}
          material={materials["COLOR.005"]}
          position={[126.765, -0.017, 45.418]}
          scale={0.01}
        />
        <mesh
          name="CONCRETE008"
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE008.geometry}
          material={materials["COLOR.005"]}
          position={[150.165, -0.017, 89.941]}
          scale={0.01}
        />
        <mesh
          name="CONCRETE009"
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE009.geometry}
          material={materials["COLOR.005"]}
          position={[126.765, -0.017, 89.941]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2024"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2024.geometry}
          material={materials["COLOR.005"]}
          position={[95.3, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2027"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2027.geometry}
          material={materials["COLOR.005"]}
          position={[12.451, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2029"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2029.geometry}
          material={materials["COLOR.005"]}
          position={[-68.248, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2031"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2031.geometry}
          material={materials["COLOR.005"]}
          position={[-114.202, -0.281, -162.794]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2033"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2033.geometry}
          material={materials["COLOR.005"]}
          position={[-28.212, -0.004, -162.794]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2034"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2034.geometry}
          material={materials["COLOR.005"]}
          position={[64.107, -0.004, -162.794]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2035"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2035.geometry}
          material={materials["COLOR.005"]}
          position={[95.3, 0.287, 165.455]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2036"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2036.geometry}
          material={materials["COLOR.005"]}
          position={[12.451, 0.287, 165.455]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2037"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2037.geometry}
          material={materials["COLOR.005"]}
          position={[-68.248, 0.287, 165.455]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2038"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2038.geometry}
          material={materials["COLOR.005"]}
          position={[-114.202, 0.01, 174.713]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2039"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2039.geometry}
          material={materials["COLOR.005"]}
          position={[-28.212, 0.287, 174.713]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2040"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2040.geometry}
          material={materials["COLOR.005"]}
          position={[64.107, 0.287, 174.713]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2041"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2041.geometry}
          material={materials["COLOR.005"]}
          position={[135.515, 0.287, 174.713]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2055"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2055.geometry}
          material={materials["COLOR.005"]}
          position={[-137.428, -0.021, 150.005]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2056"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2056.geometry}
          material={materials["COLOR.005"]}
          position={[-137.428, -0.021, 84.239]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2057"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2057.geometry}
          material={materials["COLOR.005"]}
          position={[-137.428, -0.021, 10.428]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2058"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2058.geometry}
          material={materials["COLOR.005"]}
          position={[-137.428, -0.021, -69.952]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2059"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2059.geometry}
          material={materials["COLOR.005"]}
          position={[-127.909, -0.021, 116.708]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2060"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2060.geometry}
          material={materials["COLOR.005"]}
          position={[-127.909, -0.021, 45.317]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2061"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2061.geometry}
          material={materials["COLOR.005"]}
          position={[-127.909, -0.415, -30.196]}
          scale={0.01}
        />
        <mesh
          name="LIGHT_STREET2062"
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2062.geometry}
          material={materials["COLOR.005"]}
          position={[-127.909, -0.021, -126.445]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN016"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN016.geometry}
          material={materials["COLOR.005"]}
          position={[148.546, 0.018, 102.517]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN019"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN019.geometry}
          material={materials["COLOR.005"]}
          position={[-40.752, 0.032, 14.698]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN020"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN020.geometry}
          material={materials["COLOR.005"]}
          position={[113.673, -0.019, -129.003]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN025"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN025.geometry}
          material={materials["COLOR.005"]}
          position={[-101.184, -0.023, -117.935]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN035"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN035.geometry}
          material={materials["COLOR.005"]}
          position={[164.07, -0.065, 146.914]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN036"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN036.geometry}
          material={materials["COLOR.005"]}
          position={[103.878, -0.019, -10.351]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN037"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN037.geometry}
          material={materials["COLOR.005"]}
          position={[-31.022, 0.287, -79.86]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN038"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN038.geometry}
          material={materials["COLOR.005"]}
          position={[103.758, -0.019, -94.046]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN039"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN039.geometry}
          material={materials["COLOR.005"]}
          position={[12.399, -0.035, 32.434]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN040"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN040.geometry}
          material={materials["COLOR.005"]}
          position={[-101.202, -0.023, 20.613]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN041"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN041.geometry}
          material={materials["COLOR.005"]}
          position={[83.02, 0.026, 114.74]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN042"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN042.geometry}
          material={materials["COLOR.005"]}
          position={[140.782, -0.035, 32.47]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN043"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN043.geometry}
          material={materials["COLOR.005"]}
          position={[1.55, -0.107, -29.836]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN044"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN044.geometry}
          material={materials["COLOR.005"]}
          position={[1.55, 0.287, -124.06]}
          scale={0.01}
        />
        <mesh
          name="GREEN_RECYCLE_BIN045"
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN045.geometry}
          material={materials["COLOR.005"]}
          position={[133.662, -0.107, -29.904]}
          scale={0.01}
        />
        <mesh
          name="CARS_PARKING002"
          castShadow
          receiveShadow
          geometry={nodes.CARS_PARKING002.geometry}
          material={materials["COLOR.005"]}
          position={[70.943, 0.019, 80.325]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="WHITE_BUILDING3029"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3029.geometry}
          material={materials["COLOR.005"]}
          position={[-42.783, -0.017, -153.3]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR079"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR079.geometry}
          material={materials["COLOR.005"]}
          position={[0.632, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR080"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR080.geometry}
          material={materials["COLOR.005"]}
          position={[0.632, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR081"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR081.geometry}
          material={materials["COLOR.005"]}
          position={[0.632, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR082"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR082.geometry}
          material={materials["COLOR.005"]}
          position={[0.632, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR083"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR083.geometry}
          material={materials["COLOR.005"]}
          position={[27.979, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR084"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR084.geometry}
          material={materials["COLOR.005"]}
          position={[27.979, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR085"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR085.geometry}
          material={materials["COLOR.005"]}
          position={[27.979, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR086"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR086.geometry}
          material={materials["COLOR.005"]}
          position={[27.979, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR087"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR087.geometry}
          material={materials["COLOR.005"]}
          position={[-26.999, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR088"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR088.geometry}
          material={materials["COLOR.005"]}
          position={[-26.999, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR089"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR089.geometry}
          material={materials["COLOR.005"]}
          position={[-26.999, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR090"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR090.geometry}
          material={materials["COLOR.005"]}
          position={[-26.999, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          name="LOG005"
          castShadow
          receiveShadow
          geometry={nodes.LOG005.geometry}
          material={materials["COLOR.005"]}
          position={[-114.313, 0.041, -130.86]}
          scale={0.01}
        />
        <mesh
          name="LOG006"
          castShadow
          receiveShadow
          geometry={nodes.LOG006.geometry}
          material={materials["COLOR.005"]}
          position={[-114.313, 0.041, -48.548]}
          scale={0.01}
        />
        <mesh
          name="LOG007"
          castShadow
          receiveShadow
          geometry={nodes.LOG007.geometry}
          material={materials["COLOR.005"]}
          position={[-114.313, 0.041, -11.81]}
          scale={0.01}
        />
        <mesh
          name="LOG008"
          castShadow
          receiveShadow
          geometry={nodes.LOG008.geometry}
          material={materials["COLOR.005"]}
          position={[-114.313, 0.041, 43.641]}
          scale={0.01}
        />
        <mesh
          name="SWEET_SHOP002"
          castShadow
          receiveShadow
          geometry={nodes.SWEET_SHOP002.geometry}
          material={materials["COLOR.005"]}
          position={[-26.952, -0.017, -153.526]}
          scale={0.01}
        />
        <mesh
          name="TREE030"
          castShadow
          receiveShadow
          geometry={nodes.TREE030.geometry}
          material={materials["COLOR.005"]}
          position={[-78.087, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE031"
          castShadow
          receiveShadow
          geometry={nodes.TREE031.geometry}
          material={materials["COLOR.005"]}
          position={[-53.84, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE050"
          castShadow
          receiveShadow
          geometry={nodes.TREE050.geometry}
          material={materials["COLOR.005"]}
          position={[-8.832, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE051"
          castShadow
          receiveShadow
          geometry={nodes.TREE051.geometry}
          material={materials["COLOR.005"]}
          position={[15.076, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE052"
          castShadow
          receiveShadow
          geometry={nodes.TREE052.geometry}
          material={materials["COLOR.005"]}
          position={[60.849, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE053"
          castShadow
          receiveShadow
          geometry={nodes.TREE053.geometry}
          material={materials["COLOR.005"]}
          position={[85.009, -0.042, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE054"
          castShadow
          receiveShadow
          geometry={nodes.TREE054.geometry}
          material={materials["COLOR.005"]}
          position={[128.078, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE055"
          castShadow
          receiveShadow
          geometry={nodes.TREE055.geometry}
          material={materials["COLOR.005"]}
          position={[150.777, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          name="TREE056"
          castShadow
          receiveShadow
          geometry={nodes.TREE056.geometry}
          material={materials["COLOR.005"]}
          position={[86.865, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TREE057"
          castShadow
          receiveShadow
          geometry={nodes.TREE057.geometry}
          material={materials["COLOR.005"]}
          position={[58.702, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TREE058"
          castShadow
          receiveShadow
          geometry={nodes.TREE058.geometry}
          material={materials["COLOR.005"]}
          position={[12.209, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TREE059"
          castShadow
          receiveShadow
          geometry={nodes.TREE059.geometry}
          material={materials["COLOR.005"]}
          position={[-11.959, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TREE060"
          castShadow
          receiveShadow
          geometry={nodes.TREE060.geometry}
          material={materials["COLOR.005"]}
          position={[-53.936, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TREE061"
          castShadow
          receiveShadow
          geometry={nodes.TREE061.geometry}
          material={materials["COLOR.005"]}
          position={[-78.01, 0.192, 103.758]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR091"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR091.geometry}
          material={materials["COLOR.005"]}
          position={[28.65, -0.017, 147.373]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR092"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR092.geometry}
          material={materials["COLOR.005"]}
          position={[28.65, -0.017, 138.784]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR093"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR093.geometry}
          material={materials["COLOR.005"]}
          position={[64.202, -0.017, 147.373]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR094"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR094.geometry}
          material={materials["COLOR.005"]}
          position={[64.202, -0.017, 138.784]}
          scale={0.01}
        />
        <mesh
          name="FRUIT_SHOP007"
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP007.geometry}
          material={materials["COLOR.005"]}
          position={[-43.005, -0.017, -133.282]}
          scale={0.01}
        />
        <mesh
          name="ORANGE_SMALL_TOWER005"
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_SMALL_TOWER005.geometry}
          material={materials["COLOR.005"]}
          position={[-57.047, 0.287, -154.033]}
          scale={0.01}
        />
        <mesh
          name="WHITE_SMALL_TOWER005"
          castShadow
          receiveShadow
          geometry={nodes.WHITE_SMALL_TOWER005.geometry}
          material={materials["COLOR.005"]}
          position={[-56.862, -0.017, -133.768]}
          scale={0.01}
        />
        <mesh
          name="SPORT_CENTER002"
          castShadow
          receiveShadow
          geometry={nodes.SPORT_CENTER002.geometry}
          material={materials["COLOR.005"]}
          position={[-77.078, -0.017, -151.93]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE071"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE071.geometry}
          material={materials["COLOR.005"]}
          position={[160.358, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE072"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE072.geometry}
          material={materials["COLOR.005"]}
          position={[160.707, -0.017, 29.521]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE073"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE073.geometry}
          material={materials["COLOR.005"]}
          position={[118.662, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE074"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE074.geometry}
          material={materials["COLOR.005"]}
          position={[128.133, -0.017, 29.521]}
          scale={0.01}
        />
        <mesh
          name="House009"
          castShadow
          receiveShadow
          geometry={nodes.House009.geometry}
          material={materials["COLOR.005"]}
          position={[120.864, -0.017, -149.575]}
          scale={0.01}
        />
        <mesh
          name="House010"
          castShadow
          receiveShadow
          geometry={nodes.House010.geometry}
          material={materials["COLOR.005"]}
          position={[120.864, -0.017, -15.097]}
          scale={0.01}
        />
        <mesh
          name="SMALL_HOUSE005"
          castShadow
          receiveShadow
          geometry={nodes.SMALL_HOUSE005.geometry}
          material={materials["COLOR.005"]}
          position={[121.241, -0.017, -114.366]}
          scale={0.01}
        />
        <mesh
          name="SMALL_HOUSE006"
          castShadow
          receiveShadow
          geometry={nodes.SMALL_HOUSE006.geometry}
          material={materials["COLOR.005"]}
          position={[155.026, -0.017, -112.17]}
          scale={0.01}
        />
        <mesh
          name="House011"
          castShadow
          receiveShadow
          geometry={nodes.House011.geometry}
          material={materials["COLOR.005"]}
          position={[157.026, 0.287, -149.136]}
          scale={0.01}
        />
        <mesh
          name="House012"
          castShadow
          receiveShadow
          geometry={nodes.House012.geometry}
          material={materials["COLOR.005"]}
          position={[157.026, 0.287, -15.2]}
          scale={0.01}
        />
        <mesh
          name="BIG_HOUSE009"
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE009.geometry}
          material={materials["COLOR.005"]}
          position={[121.829, -0.016, -73.19]}
          scale={0.01}
        />
        <mesh
          name="BIG_HOUSE010"
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE010.geometry}
          material={materials["COLOR.005"]}
          position={[155.517, -0.016, -73.19]}
          scale={0.01}
        />
        <mesh
          name="BIG_HOUSE011"
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE011.geometry}
          material={materials["COLOR.005"]}
          position={[121.829, -0.016, 18.881]}
          scale={0.01}
        />
        <mesh
          name="BIG_HOUSE012"
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE012.geometry}
          material={materials["COLOR.005"]}
          position={[155.517, -0.016, 18.881]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE075"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE075.geometry}
          material={materials["COLOR.005"]}
          position={[138.907, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE076"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE076.geometry}
          material={materials["COLOR.005"]}
          position={[138.907, -0.017, 29.313]}
          scale={0.01}
        />
        <mesh
          name="GREY_BUILDING2011"
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2011.geometry}
          material={materials["COLOR.005"]}
          position={[134.85, -0.017, 129.573]}
          scale={0.01}
        />
        <mesh
          name="FRUIT_SHOP008"
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP008.geometry}
          material={materials["COLOR.005"]}
          position={[120.416, -0.017, 128.512]}
          scale={0.01}
        />
        <mesh
          name="FL_WHEEL016"
          castShadow
          receiveShadow
          geometry={nodes.FL_WHEEL016.geometry}
          material={materials["COLOR.005"]}
          position={[27.003, 0.672, 28.984]}
          rotation={[0, 1.571, 0]}
          scale={0.011}
        />
        <mesh
          name="BR_WHEEL011"
          castShadow
          receiveShadow
          geometry={nodes.BR_WHEEL011.geometry}
          material={materials["COLOR.005"]}
          position={[33.064, 0.415, 70.708]}
          scale={0.011}
        />
        <mesh
          name="TREE_POT033"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT033.geometry}
          material={materials["COLOR.005"]}
          position={[4.624, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT069"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT069.geometry}
          material={materials["COLOR.005"]}
          position={[-4.699, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="polis_car001"
          castShadow
          receiveShadow
          geometry={nodes.polis_car001.geometry}
          material={materials["COLOR.005"]}
          position={[142.196, 0.402, 66.521]}
          scale={0.011}
        />
        <mesh
          name="FL_WHEEL017"
          castShadow
          receiveShadow
          geometry={nodes.FL_WHEEL017.geometry}
          material={materials["COLOR.005"]}
          position={[16.238, 0.421, 29.717]}
          rotation={[Math.PI, -1.222, Math.PI]}
          scale={[0.012, 0.011, 0.012]}
        />
        <mesh
          name="TENNIS_STADIUM002"
          castShadow
          receiveShadow
          geometry={nodes.TENNIS_STADIUM002.geometry}
          material={materials["COLOR.005"]}
          position={[83.415, -0.017, 141.067]}
          scale={0.01}
        />
        <mesh
          name="Book_Shop002"
          castShadow
          receiveShadow
          geometry={nodes.Book_Shop002.geometry}
          material={materials["COLOR.005"]}
          position={[-49.83, -0.017, -107.005]}
          scale={0.01}
        />
        <mesh
          name="Market003"
          castShadow
          receiveShadow
          geometry={nodes.Market003.geometry}
          material={materials["COLOR.005"]}
          position={[-81.227, -0.017, -82.631]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR095"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR095.geometry}
          material={materials["COLOR.005"]}
          position={[-45.129, -0.017, -78.149]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR096"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR096.geometry}
          material={materials["COLOR.005"]}
          position={[-45.129, -0.017, -90.623]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR097"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR097.geometry}
          material={materials["COLOR.005"]}
          position={[-71.939, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          name="TALL_CHAIR098"
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR098.geometry}
          material={materials["COLOR.005"]}
          position={[-84.362, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE077"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE077.geometry}
          material={materials["COLOR.005"]}
          position={[-87.971, 0.159, -66.036]}
          scale={0.01}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["COLOR.005"]}
          position={[-55.028, -0.017, -60.893]}
          scale={0.01}
        />
        <mesh
          name="BIG_BUILDING002"
          castShadow
          receiveShadow
          geometry={nodes.BIG_BUILDING002.geometry}
          material={materials["COLOR.005"]}
          position={[155.496, 0.287, 51.161]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE078"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE078.geometry}
          material={materials["COLOR.005"]}
          position={[-72.282, 0.159, -66.036]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE079"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE079.geometry}
          material={materials["COLOR.005"]}
          position={[-87.971, 0.159, -99.3]}
          scale={0.01}
        />
        <mesh
          name="REAL_TREE080"
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE080.geometry}
          material={materials["COLOR.005"]}
          position={[-72.282, 0.159, -99.3]}
          scale={0.01}
        />
        <mesh
          name="Game_Shop002"
          castShadow
          receiveShadow
          geometry={nodes.Game_Shop002.geometry}
          material={materials["COLOR.005"]}
          position={[-80.951, -0.017, -133.392]}
          scale={0.01}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["COLOR.005"]}
          position={[-11.798, -0.035, 32.555]}
          scale={0.008}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["COLOR.005"]}
          position={[31.466, 0.285, 6.429]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT072"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT072.geometry}
          material={materials["COLOR.005"]}
          position={[4.624, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT074"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT074.geometry}
          material={materials["COLOR.005"]}
          position={[-4.699, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT116"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT116.geometry}
          material={materials["COLOR.005"]}
          position={[4.624, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT117"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT117.geometry}
          material={materials["COLOR.005"]}
          position={[-4.699, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT118"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT118.geometry}
          material={materials["COLOR.005"]}
          position={[4.624, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT119"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT119.geometry}
          material={materials["COLOR.005"]}
          position={[-4.699, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT120"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT120.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT121"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT121.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT122"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT122.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT123"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT123.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT124"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT124.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT125"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT125.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT126"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT126.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT127"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT127.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT128"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT128.geometry}
          material={materials["COLOR.005"]}
          position={[29.663, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT129"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT129.geometry}
          material={materials["COLOR.005"]}
          position={[17.305, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT130"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT130.geometry}
          material={materials["COLOR.005"]}
          position={[29.663, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT131"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT131.geometry}
          material={materials["COLOR.005"]}
          position={[17.305, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT132"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT132.geometry}
          material={materials["COLOR.005"]}
          position={[29.663, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT133"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT133.geometry}
          material={materials["COLOR.005"]}
          position={[17.305, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT134"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT134.geometry}
          material={materials["COLOR.005"]}
          position={[29.663, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT135"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT135.geometry}
          material={materials["COLOR.005"]}
          position={[17.305, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT136"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT136.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT137"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT137.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT138"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT138.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT139"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT139.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT140"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT140.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT141"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT141.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT142"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT142.geometry}
          material={materials["COLOR.005"]}
          position={[-16.669, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT143"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT143.geometry}
          material={materials["COLOR.005"]}
          position={[-29.027, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT144"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT144.geometry}
          material={materials["COLOR.005"]}
          position={[29.636, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT145"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT145.geometry}
          material={materials["COLOR.005"]}
          position={[17.279, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT146"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT146.geometry}
          material={materials["COLOR.005"]}
          position={[29.636, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT147"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT147.geometry}
          material={materials["COLOR.005"]}
          position={[17.279, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT148"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT148.geometry}
          material={materials["COLOR.005"]}
          position={[29.636, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT149"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT149.geometry}
          material={materials["COLOR.005"]}
          position={[17.279, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT150"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT150.geometry}
          material={materials["COLOR.005"]}
          position={[29.636, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          name="TREE_POT151"
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT151.geometry}
          material={materials["COLOR.005"]}
          position={[17.279, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE045"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE045.geometry}
          material={materials["COLOR.005"]}
          position={[-45.466, 0.159, 67.393]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE065"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE065.geometry}
          material={materials["COLOR.005"]}
          position={[-29.05, 0.159, 1]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE066"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE066.geometry}
          material={materials["COLOR.005"]}
          position={[29.596, 0.159, 1]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE067"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE067.geometry}
          material={materials["COLOR.005"]}
          position={[-88.749, -0.017, 120.957]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE068"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE068.geometry}
          material={materials["COLOR.005"]}
          position={[-80.181, -0.017, 120.957]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1053"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1053.geometry}
          material={materials["COLOR.005"]}
          position={[-10.447, -0.017, 121.157]}
          scale={0.01}
        />
        <mesh
          name="SPHEREICAL_TREE1054"
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1054.geometry}
          material={materials["COLOR.005"]}
          position={[-18.98, -0.017, 121.157]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE069"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE069.geometry}
          material={materials["COLOR.005"]}
          position={[-23.691, -0.017, 121.812]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE070"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE070.geometry}
          material={materials["COLOR.005"]}
          position={[-15.123, -0.017, 121.812]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE071"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE071.geometry}
          material={materials["COLOR.005"]}
          position={[-45.466, 0.159, 8.089]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE072"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE072.geometry}
          material={materials["COLOR.005"]}
          position={[-63.193, 0.159, -17.856]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE073"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE073.geometry}
          material={materials["COLOR.005"]}
          position={[-63.193, 0.159, -26.992]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE074"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE074.geometry}
          material={materials["COLOR.005"]}
          position={[-70.24, 0.159, 85.448]}
          scale={0.01}
        />
        <mesh
          name="TRIANGLE_TREE075"
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE075.geometry}
          material={materials["COLOR.005"]}
          position={[-70.24, 0.159, 76.494]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/city_c6.glb");
