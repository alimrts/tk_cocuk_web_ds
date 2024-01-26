import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function CityScene1(props) {
  const { nodes, materials } = useGLTF("./models/city_c4.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Road174.geometry}
        material={materials["COLOR.004"]}
        position={[48.492, -0.018, -34.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walking_Road014.geometry}
        material={materials["COLOR.004"]}
        position={[36.438, -0.018, -46.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Straight_Road071.geometry}
        material={materials["COLOR.004"]}
        position={[96.707, -0.018, -167.452]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Not_Walking_Road3005.geometry}
        material={materials["COLOR.004"]}
        position={[-132.317, -0.018, 170.056]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground419.geometry}
        material={materials["COLOR.004"]}
        position={[-47.939, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground420.geometry}
        material={materials["COLOR.004"]}
        position={[72.599, -0.018, -10.752]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground421.geometry}
        material={materials["COLOR.004"]}
        position={[60.546, -0.018, -83.075]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground422.geometry}
        material={materials["COLOR.004"]}
        position={[0.276, -0.018, -71.021]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground423.geometry}
        material={materials["COLOR.004"]}
        position={[-59.993, -0.018, -95.129]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground424.geometry}
        material={materials["COLOR.004"]}
        position={[-23.832, -0.018, -143.345]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground425.geometry}
        material={materials["COLOR.004"]}
        position={[-120.263, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground426.geometry}
        material={materials["COLOR.004"]}
        position={[-11.778, -0.018, 145.949]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground427.geometry}
        material={materials["COLOR.004"]}
        position={[-59.993, -0.018, 61.571]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground428.geometry}
        material={materials["COLOR.004"]}
        position={[72.599, -0.018, 73.625]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SCHOOL002.geometry}
        material={materials["COLOR.004"]}
        position={[-82.982, -0.015, -0.125]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RESTAURANT002.geometry}
        material={materials["COLOR.004"]}
        position={[-81.845, -0.017, 155.935]}
        rotation={[0, 1.571, 0]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TENNIS_STADIUM2002.geometry}
        material={materials["COLOR.004"]}
        position={[46.189, -0.044, 140.852]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FOOTBALL_STADIUM002.geometry}
        material={materials["COLOR.004"]}
        position={[9.163, -0.014, 139.897]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOSPITAL002.geometry}
        material={materials["COLOR.004"]}
        position={[55.73, -0.017, -81.93]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COFFEE002.geometry}
        material={materials["COLOR.004"]}
        position={[-22.253, -0.233, 157.85]}
        rotation={[0, 1.571, 0]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GasStationGround002.geometry}
        material={materials["COLOR.004"]}
        position={[7.319, -0.017, 67.598]}
        rotation={[0, -1.571, 0]}
        scale={[0.008, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIBRARY002.geometry}
        material={materials["COLOR.004"]}
        position={[-55.28, 0.397, 25.769]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parking_Ground002.geometry}
        material={materials["COLOR.004"]}
        position={[0.091, -0.018, 1.038]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP006.geometry}
        material={materials["COLOR.004"]}
        position={[95.817, -0.017, -153.312]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING004.geometry}
        material={materials["COLOR.004"]}
        position={[49.214, -0.017, -134.889]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING002.geometry}
        material={materials["COLOR.004"]}
        position={[80.608, -0.017, -152.47]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3020.geometry}
        material={materials["COLOR.004"]}
        position={[63.958, -0.012, -155.284]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3006.geometry}
        material={materials["COLOR.004"]}
        position={[52.595, -0.017, 18.333]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3007.geometry}
        material={materials["COLOR.004"]}
        position={[52.595, -0.017, -18.285]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_SMALL_TOWER004.geometry}
        material={materials["COLOR.004"]}
        position={[35.105, 0.287, -155.692]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_SMALL_TOWER004.geometry}
        material={materials["COLOR.004"]}
        position={[35.29, -0.017, -135.427]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOTEL002.geometry}
        material={materials["COLOR.004"]}
        position={[21.722, 0.287, -142.958]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3021.geometry}
        material={materials["COLOR.004"]}
        position={[4.033, -0.012, -155.87]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BROWN_BUILDING3002.geometry}
        material={materials["COLOR.004"]}
        position={[4.704, -0.017, -131.207]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COURT002.geometry}
        material={materials["COLOR.004"]}
        position={[53.147, -0.017, 67.569]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COFFEE_SHOP002.geometry}
        material={materials["COLOR.004"]}
        position={[-61.658, -0.017, 157.174]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CLOTHES_SHOP002.geometry}
        material={materials["COLOR.004"]}
        position={[-48.839, -0.223, 159.133]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PHARMACY004.geometry}
        material={materials["COLOR.004"]}
        position={[89.424, -0.017, -66.094]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2008.geometry}
        material={materials["COLOR.004"]}
        position={[73.039, -0.017, -15.891]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2009.geometry}
        material={materials["COLOR.004"]}
        position={[73.039, -0.017, 20.172]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TOOLS_SHOP003.geometry}
        material={materials["COLOR.004"]}
        position={[-12.039, -0.017, -132.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FAST_FOOD002.geometry}
        material={materials["COLOR.004"]}
        position={[-14.877, -0.017, -151.74]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CENTER_BUILDING002.geometry}
        material={materials["COLOR.004"]}
        position={[67.581, -0.017, -133.308]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground429.geometry}
        material={materials["COLOR.004"]}
        position={[132.869, -0.018, -83.075]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground430.geometry}
        material={materials["COLOR.004"]}
        position={[132.869, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground431.geometry}
        material={materials["COLOR.004"]}
        position={[132.869, -0.018, 85.679]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground432.geometry}
        material={materials["COLOR.004"]}
        position={[132.869, -0.018, 145.949]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3022.geometry}
        material={materials["COLOR.004"]}
        position={[94.448, -0.012, -17.691]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3023.geometry}
        material={materials["COLOR.004"]}
        position={[94.448, -0.012, 19.352]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.POLICE_STATION002.geometry}
        material={materials["COLOR.004"]}
        position={[126.904, -0.017, 67.662]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3008.geometry}
        material={materials["COLOR.004"]}
        position={[121.444, -0.017, 154.463]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3024.geometry}
        material={materials["COLOR.004"]}
        position={[157.563, -0.012, 154.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING005.geometry}
        material={materials["COLOR.004"]}
        position={[155.098, -0.017, 128.481]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OPEN_ROAD009.geometry}
        material={materials["COLOR.004"]}
        position={[36.438, -0.02, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE046.geometry}
        material={materials["COLOR.004"]}
        position={[-105.853, -0.017, -156.681]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE047.geometry}
        material={materials["COLOR.004"]}
        position={[-105.853, -0.017, -120.064]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE048.geometry}
        material={materials["COLOR.004"]}
        position={[-124.406, -0.017, -100.236]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE049.geometry}
        material={materials["COLOR.004"]}
        position={[-124.406, -0.017, -63.618]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE050.geometry}
        material={materials["COLOR.004"]}
        position={[-124.406, -0.017, -5.975]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE051.geometry}
        material={materials["COLOR.004"]}
        position={[-124.406, -0.017, 30.643]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE052.geometry}
        material={materials["COLOR.004"]}
        position={[-104.42, -0.017, 88.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE053.geometry}
        material={materials["COLOR.004"]}
        position={[-104.42, -0.017, 125.51]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1042.geometry}
        material={materials["COLOR.004"]}
        position={[-103.214, -0.017, 42.031]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1043.geometry}
        material={materials["COLOR.004"]}
        position={[-103.214, -0.017, -6.313]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1044.geometry}
        material={materials["COLOR.004"]}
        position={[-125.187, -0.017, -40.92]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1045.geometry}
        material={materials["COLOR.004"]}
        position={[-114.952, -0.017, -79.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1046.geometry}
        material={materials["COLOR.004"]}
        position={[-114.952, -0.017, -125.295]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1047.geometry}
        material={materials["COLOR.004"]}
        position={[-124.649, -0.017, -148.786]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE054.geometry}
        material={materials["COLOR.004"]}
        position={[-114.143, -0.017, -40.836]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE055.geometry}
        material={materials["COLOR.004"]}
        position={[-123.714, -0.286, 103.483]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE056.geometry}
        material={materials["COLOR.004"]}
        position={[-123.714, -0.017, 152.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE057.geometry}
        material={materials["COLOR.004"]}
        position={[-114.179, -0.017, 69.967]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE058.geometry}
        material={materials["COLOR.004"]}
        position={[-105.29, -0.017, -141.146]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE059.geometry}
        material={materials["COLOR.004"]}
        position={[-108.419, -0.017, 13.181]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE060.geometry}
        material={materials["COLOR.004"]}
        position={[-120.343, -0.017, 51.276]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE054.geometry}
        material={materials["COLOR.004"]}
        position={[-103.414, -0.017, -86.078]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE008.geometry}
        material={materials["COLOR.004"]}
        position={[-114.261, -0.017, 129.807]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE009.geometry}
        material={materials["COLOR.004"]}
        position={[-110.852, -0.017, 62.143]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE010.geometry}
        material={materials["COLOR.004"]}
        position={[-115.144, -0.017, -19.722]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE011.geometry}
        material={materials["COLOR.004"]}
        position={[-114.014, -0.017, -155.757]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE055.geometry}
        material={materials["COLOR.004"]}
        position={[-103.414, -0.017, -61.491]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE061.geometry}
        material={materials["COLOR.004"]}
        position={[-8.341, -0.017, -102.888]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE062.geometry}
        material={materials["COLOR.004"]}
        position={[9.116, -0.017, -67.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE063.geometry}
        material={materials["COLOR.004"]}
        position={[-19.426, -0.017, -82.957]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE064.geometry}
        material={materials["COLOR.004"]}
        position={[21.228, -0.017, -82.957]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE056.geometry}
        material={materials["COLOR.004"]}
        position={[-15.44, -0.017, -72.569]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE057.geometry}
        material={materials["COLOR.004"]}
        position={[7.302, -0.017, -105.57]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1048.geometry}
        material={materials["COLOR.004"]}
        position={[-18.878, -0.017, -58.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1049.geometry}
        material={materials["COLOR.004"]}
        position={[20.926, -0.017, -58.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1050.geometry}
        material={materials["COLOR.004"]}
        position={[20.926, -0.017, -109.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE030.geometry}
        material={materials["COLOR.004"]}
        position={[2.42, -0.017, -87.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE031.geometry}
        material={materials["COLOR.004"]}
        position={[-24.421, -0.017, -62.532]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE050.geometry}
        material={materials["COLOR.004"]}
        position={[-24.421, -0.017, -105.72]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE051.geometry}
        material={materials["COLOR.004"]}
        position={[24.905, -0.017, -105.72]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK012.geometry}
        material={materials["COLOR.004"]}
        position={[9.599, 0.116, -76.246]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK013.geometry}
        material={materials["COLOR.004"]}
        position={[-5.335, 0.116, -93.449]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK014.geometry}
        material={materials["COLOR.004"]}
        position={[-14.195, 0.116, -65.391]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK015.geometry}
        material={materials["COLOR.004"]}
        position={[19.112, 0.116, -65.391]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK016.geometry}
        material={materials["COLOR.004"]}
        position={[-5.796, 0.116, -83.572]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK017.geometry}
        material={materials["COLOR.004"]}
        position={[-16.879, 0.116, -97.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK006.geometry}
        material={materials["COLOR.004"]}
        position={[-5.11, 0.065, -77.073]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK007.geometry}
        material={materials["COLOR.004"]}
        position={[18.055, 0.065, -87.317]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK008.geometry}
        material={materials["COLOR.004"]}
        position={[28.293, 0.065, -69.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT122.geometry}
        material={materials["COLOR.004"]}
        position={[66.584, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE028.geometry}
        material={materials["COLOR.004"]}
        position={[66.585, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT123.geometry}
        material={materials["COLOR.004"]}
        position={[78.332, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE029.geometry}
        material={materials["COLOR.004"]}
        position={[78.333, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT124.geometry}
        material={materials["COLOR.004"]}
        position={[90.641, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE030.geometry}
        material={materials["COLOR.004"]}
        position={[90.642, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT125.geometry}
        material={materials["COLOR.004"]}
        position={[66.584, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE031.geometry}
        material={materials["COLOR.004"]}
        position={[66.585, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT126.geometry}
        material={materials["COLOR.004"]}
        position={[78.332, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE032.geometry}
        material={materials["COLOR.004"]}
        position={[78.333, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT127.geometry}
        material={materials["COLOR.004"]}
        position={[90.641, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE033.geometry}
        material={materials["COLOR.004"]}
        position={[90.642, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE010.geometry}
        material={materials["COLOR.004"]}
        position={[-47.584, -0.017, 152.062]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR040.geometry}
        material={materials["COLOR.004"]}
        position={[-46.8, -0.017, 152.015]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR041.geometry}
        material={materials["COLOR.004"]}
        position={[-48.449, -0.017, 152.015]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE011.geometry}
        material={materials["COLOR.004"]}
        position={[-47.584, -0.017, 139.94]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR042.geometry}
        material={materials["COLOR.004"]}
        position={[-46.8, -0.017, 139.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR043.geometry}
        material={materials["COLOR.004"]}
        position={[-48.449, -0.017, 139.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE012.geometry}
        material={materials["COLOR.004"]}
        position={[-47.584, -0.017, 127.911]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR044.geometry}
        material={materials["COLOR.004"]}
        position={[-46.8, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR045.geometry}
        material={materials["COLOR.004"]}
        position={[-48.449, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE013.geometry}
        material={materials["COLOR.004"]}
        position={[-59.851, -0.017, 127.911]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR046.geometry}
        material={materials["COLOR.004"]}
        position={[-59.066, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR047.geometry}
        material={materials["COLOR.004"]}
        position={[-60.716, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE014.geometry}
        material={materials["COLOR.004"]}
        position={[-59.851, -0.017, 152.016]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR048.geometry}
        material={materials["COLOR.004"]}
        position={[-59.066, -0.017, 151.969]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR049.geometry}
        material={materials["COLOR.004"]}
        position={[-60.716, -0.017, 151.969]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR074.geometry}
        material={materials["COLOR.004"]}
        position={[-35.495, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR075.geometry}
        material={materials["COLOR.004"]}
        position={[-35.495, -0.017, 151.926]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1051.geometry}
        material={materials["COLOR.004"]}
        position={[-75.506, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1052.geometry}
        material={materials["COLOR.004"]}
        position={[-84.038, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1053.geometry}
        material={materials["COLOR.004"]}
        position={[-31.413, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1054.geometry}
        material={materials["COLOR.004"]}
        position={[-39.945, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1055.geometry}
        material={materials["COLOR.004"]}
        position={[-39.945, -0.017, 158.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE034.geometry}
        material={materials["COLOR.004"]}
        position={[64.271, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE035.geometry}
        material={materials["COLOR.004"]}
        position={[64.271, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE036.geometry}
        material={materials["COLOR.004"]}
        position={[28.11, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE037.geometry}
        material={materials["COLOR.004"]}
        position={[28.11, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE038.geometry}
        material={materials["COLOR.004"]}
        position={[-10.174, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE039.geometry}
        material={materials["COLOR.004"]}
        position={[99.867, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE040.geometry}
        material={materials["COLOR.004"]}
        position={[99.867, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1056.geometry}
        material={materials["COLOR.004"]}
        position={[133.548, -0.017, -56.478]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1057.geometry}
        material={materials["COLOR.004"]}
        position={[144.166, -0.017, -56.478]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1058.geometry}
        material={materials["COLOR.004"]}
        position={[133.548, -0.017, -157.522]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1059.geometry}
        material={materials["COLOR.004"]}
        position={[144.166, -0.017, -157.522]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE065.geometry}
        material={materials["COLOR.004"]}
        position={[121.958, -0.017, -137.984]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE066.geometry}
        material={materials["COLOR.004"]}
        position={[138.752, -0.017, -123.199]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE067.geometry}
        material={materials["COLOR.004"]}
        position={[138.752, -0.017, -103.098]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE068.geometry}
        material={materials["COLOR.004"]}
        position={[160.358, -0.017, -123.199]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE069.geometry}
        material={materials["COLOR.004"]}
        position={[160.358, -0.017, -159.82]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE070.geometry}
        material={materials["COLOR.004"]}
        position={[160.358, -0.017, -55.219]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT128.geometry}
        material={materials["COLOR.004"]}
        position={[-74.914, -0.017, -17.997]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE052.geometry}
        material={materials["COLOR.004"]}
        position={[-74.901, 0.159, -18.006]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT129.geometry}
        material={materials["COLOR.004"]}
        position={[-74.914, -0.017, -12.44]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE053.geometry}
        material={materials["COLOR.004"]}
        position={[-74.901, 0.159, -12.45]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE054.geometry}
        material={materials["COLOR.004"]}
        position={[-74.901, 0.159, 12.285]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE055.geometry}
        material={materials["COLOR.004"]}
        position={[-74.901, 0.159, 17.842]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR076.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, -149.162]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR077.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, -137.402]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR078.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, -101.496]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR079.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, -4.275]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR080.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, 7.484]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR081.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, 80.034]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR082.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, 91.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR083.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, 140.229]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR084.geometry}
        material={materials["COLOR.004"]}
        position={[-114.216, -0.017, 151.988]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2006.geometry}
        material={materials["COLOR.004"]}
        position={[-113.838, -0.017, -58.712]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2007.geometry}
        material={materials["COLOR.004"]}
        position={[-113.838, -0.017, 31.681]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2008.geometry}
        material={materials["COLOR.004"]}
        position={[-113.838, -0.017, 115.396]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR085.geometry}
        material={materials["COLOR.004"]}
        position={[84.859, -0.017, -110.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR086.geometry}
        material={materials["COLOR.004"]}
        position={[72.134, -0.017, -110.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PHARMACY005.geometry}
        material={materials["COLOR.004"]}
        position={[-26.731, -0.017, -133.37]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3025.geometry}
        material={materials["COLOR.004"]}
        position={[52.55, -0.017, 0.055]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3026.geometry}
        material={materials["COLOR.004"]}
        position={[94.752, -0.017, 0.055]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2010.geometry}
        material={materials["COLOR.004"]}
        position={[73.179, -0.017, 1.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3027.geometry}
        material={materials["COLOR.004"]}
        position={[146.19, -0.017, 154.557]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3028.geometry}
        material={materials["COLOR.004"]}
        position={[134.149, -0.012, 154.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT073.geometry}
        material={materials["COLOR.004"]}
        position={[113.418, -0.444, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT074.geometry}
        material={materials["COLOR.004"]}
        position={[104.143, -0.444, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT075.geometry}
        material={materials["COLOR.004"]}
        position={[41.119, -0.035, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT076.geometry}
        material={materials["COLOR.004"]}
        position={[31.79, -0.002, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT077.geometry}
        material={materials["COLOR.004"]}
        position={[-31.232, -0.035, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT078.geometry}
        material={materials["COLOR.004"]}
        position={[-40.561, -0.002, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT079.geometry}
        material={materials["COLOR.004"]}
        position={[113.455, -0.342, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT080.geometry}
        material={materials["COLOR.004"]}
        position={[104.127, -0.308, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT081.geometry}
        material={materials["COLOR.004"]}
        position={[-91.467, -0.47, -41.927]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT082.geometry}
        material={materials["COLOR.004"]}
        position={[-91.467, -0.47, -39.778]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT083.geometry}
        material={materials["COLOR.004"]}
        position={[-91.479, -0.368, 32.989]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT084.geometry}
        material={materials["COLOR.004"]}
        position={[-101.17, -0.312, 42.354]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT085.geometry}
        material={materials["COLOR.004"]}
        position={[-40.42, 0.287, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT086.geometry}
        material={materials["COLOR.004"]}
        position={[-30.417, 0.287, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT087.geometry}
        material={materials["COLOR.004"]}
        position={[31.86, 0.287, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT088.geometry}
        material={materials["COLOR.004"]}
        position={[41.863, 0.287, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT089.geometry}
        material={materials["COLOR.004"]}
        position={[103.986, -0.019, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT090.geometry}
        material={materials["COLOR.004"]}
        position={[113.286, -0.019, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT091.geometry}
        material={materials["COLOR.004"]}
        position={[164.427, -0.354, 42.048]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT092.geometry}
        material={materials["COLOR.004"]}
        position={[173.727, -0.387, 33.083]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT093.geometry}
        material={materials["COLOR.004"]}
        position={[41.006, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT094.geometry}
        material={materials["COLOR.004"]}
        position={[31.731, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT095.geometry}
        material={materials["COLOR.004"]}
        position={[-31.244, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT096.geometry}
        material={materials["COLOR.004"]}
        position={[-40.519, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT097.geometry}
        material={materials["COLOR.004"]}
        position={[41.006, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT098.geometry}
        material={materials["COLOR.004"]}
        position={[31.731, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT099.geometry}
        material={materials["COLOR.004"]}
        position={[-31.216, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT100.geometry}
        material={materials["COLOR.004"]}
        position={[-40.491, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT101.geometry}
        material={materials["COLOR.004"]}
        position={[113.378, -0.289, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT102.geometry}
        material={materials["COLOR.004"]}
        position={[104.103, -0.289, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT103.geometry}
        material={materials["COLOR.004"]}
        position={[-91.467, -0.315, 102.731]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT104.geometry}
        material={materials["COLOR.004"]}
        position={[-91.467, -0.315, 104.88]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT105.geometry}
        material={materials["COLOR.004"]}
        position={[164.292, -0.334, 102.731]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT106.geometry}
        material={materials["COLOR.004"]}
        position={[164.336, -0.334, 104.927]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT107.geometry}
        material={materials["COLOR.004"]}
        position={[164.292, -0.49, -41.984]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT108.geometry}
        material={materials["COLOR.004"]}
        position={[164.336, -0.49, -39.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET096.geometry}
        material={materials["COLOR.004"]}
        position={[113.51, -0.323, -26.043]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET097.geometry}
        material={materials["COLOR.004"]}
        position={[104.158, -0.019, 24.338]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET098.geometry}
        material={materials["COLOR.004"]}
        position={[173.81, -0.065, -26.043]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET099.geometry}
        material={materials["COLOR.004"]}
        position={[164.458, -0.065, 24.338]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET100.geometry}
        material={materials["COLOR.004"]}
        position={[173.81, -0.065, -123.035]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET101.geometry}
        material={materials["COLOR.004"]}
        position={[164.458, -0.065, -72.654]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET102.geometry}
        material={materials["COLOR.004"]}
        position={[173.81, -0.065, 82.608]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET103.geometry}
        material={materials["COLOR.004"]}
        position={[164.458, -0.065, 132.989]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET104.geometry}
        material={materials["COLOR.004"]}
        position={[158.116, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET105.geometry}
        material={materials["COLOR.004"]}
        position={[118.009, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET106.geometry}
        material={materials["COLOR.004"]}
        position={[91.22, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET107.geometry}
        material={materials["COLOR.004"]}
        position={[51.113, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET108.geometry}
        material={materials["COLOR.004"]}
        position={[20.653, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET109.geometry}
        material={materials["COLOR.004"]}
        position={[-19.454, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET110.geometry}
        material={materials["COLOR.004"]}
        position={[-46.04, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET111.geometry}
        material={materials["COLOR.004"]}
        position={[-86.146, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET112.geometry}
        material={materials["COLOR.004"]}
        position={[-46.04, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET113.geometry}
        material={materials["COLOR.004"]}
        position={[-86.146, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET114.geometry}
        material={materials["COLOR.004"]}
        position={[20.463, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET115.geometry}
        material={materials["COLOR.004"]}
        position={[-19.644, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET116.geometry}
        material={materials["COLOR.004"]}
        position={[93.441, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET117.geometry}
        material={materials["COLOR.004"]}
        position={[53.334, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET118.geometry}
        material={materials["COLOR.004"]}
        position={[158.96, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET119.geometry}
        material={materials["COLOR.004"]}
        position={[118.853, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET120.geometry}
        material={materials["COLOR.004"]}
        position={[138.904, -0.002, 42.174]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET121.geometry}
        material={materials["COLOR.004"]}
        position={[63.481, -0.002, 42.039]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET122.geometry}
        material={materials["COLOR.004"]}
        position={[6.895, -0.035, 32.869]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET123.geometry}
        material={materials["COLOR.004"]}
        position={[-31.035, 0.287, -107.901]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET124.geometry}
        material={materials["COLOR.004"]}
        position={[-1.649, 0.287, -114.693]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET125.geometry}
        material={materials["COLOR.004"]}
        position={[-68.933, 0.287, -123.858]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET126.geometry}
        material={materials["COLOR.004"]}
        position={[55.055, 0.287, -123.858]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET127.geometry}
        material={materials["COLOR.004"]}
        position={[93.453, 0.287, -114.603]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET128.geometry}
        material={materials["COLOR.004"]}
        position={[31.95, 0.287, -76.132]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET129.geometry}
        material={materials["COLOR.004"]}
        position={[113.231, -0.019, -56.717]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET130.geometry}
        material={materials["COLOR.004"]}
        position={[104.187, -0.019, -102.772]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET131.geometry}
        material={materials["COLOR.004"]}
        position={[-91.556, -0.046, -145.797]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET132.geometry}
        material={materials["COLOR.004"]}
        position={[-100.751, -0.023, -82.57]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET133.geometry}
        material={materials["COLOR.004"]}
        position={[-40.463, 0.287, -62.658]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET134.geometry}
        material={materials["COLOR.004"]}
        position={[-31.18, 0.287, -25.542]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET135.geometry}
        material={materials["COLOR.004"]}
        position={[-40.536, 0.287, 26.334]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET136.geometry}
        material={materials["COLOR.004"]}
        position={[40.925, 0.287, -25.542]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET137.geometry}
        material={materials["COLOR.004"]}
        position={[31.57, 0.287, 26.334]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET138.geometry}
        material={materials["COLOR.004"]}
        position={[-100.566, -0.023, 0.506]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET139.geometry}
        material={materials["COLOR.004"]}
        position={[-100.566, -0.023, 67.193]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET140.geometry}
        material={materials["COLOR.004"]}
        position={[-40.994, -0.013, 88.248]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET141.geometry}
        material={materials["COLOR.004"]}
        position={[-31.587, 0.287, 87.337]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET142.geometry}
        material={materials["COLOR.004"]}
        position={[-100.566, -0.023, 122.53]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET143.geometry}
        material={materials["COLOR.004"]}
        position={[-69.98, -0.002, 42.105]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE018.geometry}
        material={materials["COLOR.004"]}
        position={[111.619, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE019.geometry}
        material={materials["COLOR.004"]}
        position={[108.75, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE020.geometry}
        material={materials["COLOR.004"]}
        position={[105.944, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE021.geometry}
        material={materials["COLOR.004"]}
        position={[171.891, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE022.geometry}
        material={materials["COLOR.004"]}
        position={[169.022, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE023.geometry}
        material={materials["COLOR.004"]}
        position={[166.216, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE024.geometry}
        material={materials["COLOR.004"]}
        position={[171.891, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE025.geometry}
        material={materials["COLOR.004"]}
        position={[169.022, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE026.geometry}
        material={materials["COLOR.004"]}
        position={[166.216, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER020.geometry}
        material={materials["COLOR.004"]}
        position={[163.511, -0.065, 85.677]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER021.geometry}
        material={materials["COLOR.004"]}
        position={[163.511, -0.065, 77.176]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER022.geometry}
        material={materials["COLOR.004"]}
        position={[163.511, -0.065, 67.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER023.geometry}
        material={materials["COLOR.004"]}
        position={[163.511, -0.065, 59.019]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER024.geometry}
        material={materials["COLOR.004"]}
        position={[163.511, -0.065, 49.674]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER025.geometry}
        material={materials["COLOR.004"]}
        position={[114.212, -0.019, 85.677]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER026.geometry}
        material={materials["COLOR.004"]}
        position={[114.212, -0.019, 77.176]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER027.geometry}
        material={materials["COLOR.004"]}
        position={[114.212, -0.019, 67.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER028.geometry}
        material={materials["COLOR.004"]}
        position={[114.212, -0.019, 59.019]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER029.geometry}
        material={materials["COLOR.004"]}
        position={[114.212, -0.019, 49.674]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STOP_SIGN004.geometry}
        material={materials["COLOR.004"]}
        position={[158.374, -0.017, 79.609]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STOP_SIGN005.geometry}
        material={materials["COLOR.004"]}
        position={[158.374, -0.017, 55.484]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT130.geometry}
        material={materials["COLOR.004"]}
        position={[66.196, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE058.geometry}
        material={materials["COLOR.004"]}
        position={[66.204, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT131.geometry}
        material={materials["COLOR.004"]}
        position={[66.196, -0.017, 81.547]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE059.geometry}
        material={materials["COLOR.004"]}
        position={[66.185, 0.159, 81.566]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT132.geometry}
        material={materials["COLOR.004"]}
        position={[78.481, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE060.geometry}
        material={materials["COLOR.004"]}
        position={[78.489, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT133.geometry}
        material={materials["COLOR.004"]}
        position={[90.351, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE061.geometry}
        material={materials["COLOR.004"]}
        position={[90.36, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT134.geometry}
        material={materials["COLOR.004"]}
        position={[90.351, -0.017, 81.547]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE062.geometry}
        material={materials["COLOR.004"]}
        position={[90.341, 0.159, 81.566]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE008.geometry}
        material={materials["COLOR.004"]}
        position={[150.165, -0.017, 45.418]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE009.geometry}
        material={materials["COLOR.004"]}
        position={[126.765, -0.017, 45.418]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE010.geometry}
        material={materials["COLOR.004"]}
        position={[150.165, -0.017, 89.941]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE011.geometry}
        material={materials["COLOR.004"]}
        position={[126.765, -0.017, 89.941]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2042.geometry}
        material={materials["COLOR.004"]}
        position={[95.3, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2043.geometry}
        material={materials["COLOR.004"]}
        position={[12.451, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2044.geometry}
        material={materials["COLOR.004"]}
        position={[-68.248, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2045.geometry}
        material={materials["COLOR.004"]}
        position={[-114.202, -0.281, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2046.geometry}
        material={materials["COLOR.004"]}
        position={[-28.212, -0.004, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2047.geometry}
        material={materials["COLOR.004"]}
        position={[64.107, -0.004, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2048.geometry}
        material={materials["COLOR.004"]}
        position={[95.3, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2049.geometry}
        material={materials["COLOR.004"]}
        position={[12.451, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2050.geometry}
        material={materials["COLOR.004"]}
        position={[-68.248, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2051.geometry}
        material={materials["COLOR.004"]}
        position={[-114.202, 0.01, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2052.geometry}
        material={materials["COLOR.004"]}
        position={[-28.212, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2053.geometry}
        material={materials["COLOR.004"]}
        position={[64.107, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2054.geometry}
        material={materials["COLOR.004"]}
        position={[135.515, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2055.geometry}
        material={materials["COLOR.004"]}
        position={[-137.428, -0.021, 150.005]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2056.geometry}
        material={materials["COLOR.004"]}
        position={[-137.428, -0.021, 84.239]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2057.geometry}
        material={materials["COLOR.004"]}
        position={[-137.428, -0.021, 10.428]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2058.geometry}
        material={materials["COLOR.004"]}
        position={[-137.428, -0.021, -69.952]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2059.geometry}
        material={materials["COLOR.004"]}
        position={[-127.909, -0.021, 116.708]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2060.geometry}
        material={materials["COLOR.004"]}
        position={[-127.909, -0.021, 45.317]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2061.geometry}
        material={materials["COLOR.004"]}
        position={[-127.909, -0.415, -30.196]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2062.geometry}
        material={materials["COLOR.004"]}
        position={[-127.909, -0.021, -126.445]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN032.geometry}
        material={materials["COLOR.004"]}
        position={[148.546, 0.018, 102.517]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN033.geometry}
        material={materials["COLOR.004"]}
        position={[-40.752, 0.287, 14.698]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN034.geometry}
        material={materials["COLOR.004"]}
        position={[113.673, -0.019, -129.003]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN035.geometry}
        material={materials["COLOR.004"]}
        position={[-101.184, -0.023, -117.935]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN036.geometry}
        material={materials["COLOR.004"]}
        position={[-30.831, 0.287, 165.314]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN037.geometry}
        material={materials["COLOR.004"]}
        position={[164.07, -0.065, 146.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN038.geometry}
        material={materials["COLOR.004"]}
        position={[103.878, -0.019, -10.351]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN039.geometry}
        material={materials["COLOR.004"]}
        position={[-31.022, 0.287, -79.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN040.geometry}
        material={materials["COLOR.004"]}
        position={[103.758, -0.019, -94.046]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN041.geometry}
        material={materials["COLOR.004"]}
        position={[12.399, -0.035, 32.434]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN042.geometry}
        material={materials["COLOR.004"]}
        position={[-101.202, -0.023, 20.613]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN043.geometry}
        material={materials["COLOR.004"]}
        position={[83.02, 0.287, 114.74]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN044.geometry}
        material={materials["COLOR.004"]}
        position={[140.782, -0.035, 32.47]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN045.geometry}
        material={materials["COLOR.004"]}
        position={[1.55, -0.107, -29.836]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN046.geometry}
        material={materials["COLOR.004"]}
        position={[1.55, 0.287, -124.06]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN047.geometry}
        material={materials["COLOR.004"]}
        position={[133.662, -0.107, -29.904]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CARS_PARKING002.geometry}
        material={materials["COLOR.004"]}
        position={[-59.6, 0.019, 1.294]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3029.geometry}
        material={materials["COLOR.004"]}
        position={[-42.783, -0.017, -153.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR087.geometry}
        material={materials["COLOR.004"]}
        position={[0.632, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR088.geometry}
        material={materials["COLOR.004"]}
        position={[0.632, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR089.geometry}
        material={materials["COLOR.004"]}
        position={[0.632, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR090.geometry}
        material={materials["COLOR.004"]}
        position={[0.632, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR091.geometry}
        material={materials["COLOR.004"]}
        position={[27.979, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR092.geometry}
        material={materials["COLOR.004"]}
        position={[27.979, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR093.geometry}
        material={materials["COLOR.004"]}
        position={[27.979, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR094.geometry}
        material={materials["COLOR.004"]}
        position={[27.979, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR095.geometry}
        material={materials["COLOR.004"]}
        position={[-26.999, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR096.geometry}
        material={materials["COLOR.004"]}
        position={[-26.999, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR097.geometry}
        material={materials["COLOR.004"]}
        position={[-26.999, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR098.geometry}
        material={materials["COLOR.004"]}
        position={[-26.999, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG009.geometry}
        material={materials["COLOR.004"]}
        position={[-114.313, 0.041, -130.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG010.geometry}
        material={materials["COLOR.004"]}
        position={[-114.313, 0.041, -48.548]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG011.geometry}
        material={materials["COLOR.004"]}
        position={[-114.313, 0.041, -11.81]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG012.geometry}
        material={materials["COLOR.004"]}
        position={[-114.313, 0.041, 43.641]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR099.geometry}
        material={materials["COLOR.004"]}
        position={[-17.959, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR100.geometry}
        material={materials["COLOR.004"]}
        position={[-27.001, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SWEET_SHOP002.geometry}
        material={materials["COLOR.004"]}
        position={[-26.952, -0.017, -153.526]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT135.geometry}
        material={materials["COLOR.004"]}
        position={[-78.1, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE056.geometry}
        material={materials["COLOR.004"]}
        position={[-78.087, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT136.geometry}
        material={materials["COLOR.004"]}
        position={[-53.853, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE057.geometry}
        material={materials["COLOR.004"]}
        position={[-53.84, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT137.geometry}
        material={materials["COLOR.004"]}
        position={[-8.846, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE058.geometry}
        material={materials["COLOR.004"]}
        position={[-8.832, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT138.geometry}
        material={materials["COLOR.004"]}
        position={[15.062, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE059.geometry}
        material={materials["COLOR.004"]}
        position={[15.076, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT139.geometry}
        material={materials["COLOR.004"]}
        position={[60.835, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE060.geometry}
        material={materials["COLOR.004"]}
        position={[60.849, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT140.geometry}
        material={materials["COLOR.004"]}
        position={[84.996, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE061.geometry}
        material={materials["COLOR.004"]}
        position={[85.009, -0.042, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT141.geometry}
        material={materials["COLOR.004"]}
        position={[128.064, -0.093, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE062.geometry}
        material={materials["COLOR.004"]}
        position={[128.078, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT142.geometry}
        material={materials["COLOR.004"]}
        position={[150.764, -0.093, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE063.geometry}
        material={materials["COLOR.004"]}
        position={[150.777, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT143.geometry}
        material={materials["COLOR.004"]}
        position={[86.851, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE064.geometry}
        material={materials["COLOR.004"]}
        position={[86.865, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT144.geometry}
        material={materials["COLOR.004"]}
        position={[58.689, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE065.geometry}
        material={materials["COLOR.004"]}
        position={[58.702, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT145.geometry}
        material={materials["COLOR.004"]}
        position={[12.196, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE066.geometry}
        material={materials["COLOR.004"]}
        position={[12.209, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT146.geometry}
        material={materials["COLOR.004"]}
        position={[-11.972, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE067.geometry}
        material={materials["COLOR.004"]}
        position={[-11.959, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT147.geometry}
        material={materials["COLOR.004"]}
        position={[-53.949, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE068.geometry}
        material={materials["COLOR.004"]}
        position={[-53.936, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT148.geometry}
        material={materials["COLOR.004"]}
        position={[-78.024, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE069.geometry}
        material={materials["COLOR.004"]}
        position={[-78.01, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR101.geometry}
        material={materials["COLOR.004"]}
        position={[28.65, -0.017, 147.373]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR102.geometry}
        material={materials["COLOR.004"]}
        position={[28.65, -0.017, 138.784]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR103.geometry}
        material={materials["COLOR.004"]}
        position={[64.202, -0.017, 147.373]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR104.geometry}
        material={materials["COLOR.004"]}
        position={[64.202, -0.017, 138.784]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP007.geometry}
        material={materials["COLOR.004"]}
        position={[-43.005, -0.017, -133.282]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_SMALL_TOWER005.geometry}
        material={materials["COLOR.004"]}
        position={[-57.047, 0.287, -154.033]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_SMALL_TOWER005.geometry}
        material={materials["COLOR.004"]}
        position={[-56.862, -0.017, -133.768]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPORT_CENTER002.geometry}
        material={materials["COLOR.004"]}
        position={[-77.078, -0.017, -151.93]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE071.geometry}
        material={materials["COLOR.004"]}
        position={[160.358, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE072.geometry}
        material={materials["COLOR.004"]}
        position={[160.707, -0.017, 29.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE073.geometry}
        material={materials["COLOR.004"]}
        position={[118.662, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE074.geometry}
        material={materials["COLOR.004"]}
        position={[128.133, -0.017, 29.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House009.geometry}
        material={materials["COLOR.004"]}
        position={[120.864, -0.017, -149.575]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House010.geometry}
        material={materials["COLOR.004"]}
        position={[120.864, -0.017, -15.097]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_HOUSE005.geometry}
        material={materials["COLOR.004"]}
        position={[121.241, -0.017, -114.366]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_HOUSE006.geometry}
        material={materials["COLOR.004"]}
        position={[155.026, -0.017, -112.17]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House011.geometry}
        material={materials["COLOR.004"]}
        position={[157.026, 0.287, -149.136]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House012.geometry}
        material={materials["COLOR.004"]}
        position={[157.026, 0.287, -15.2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE009.geometry}
        material={materials["COLOR.004"]}
        position={[121.829, -0.016, -73.19]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE010.geometry}
        material={materials["COLOR.004"]}
        position={[155.517, -0.016, -73.19]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE011.geometry}
        material={materials["COLOR.004"]}
        position={[121.829, -0.016, 18.881]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE012.geometry}
        material={materials["COLOR.004"]}
        position={[155.517, -0.016, 18.881]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE075.geometry}
        material={materials["COLOR.004"]}
        position={[138.907, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE076.geometry}
        material={materials["COLOR.004"]}
        position={[138.907, -0.017, 29.313]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2011.geometry}
        material={materials["COLOR.004"]}
        position={[134.85, -0.017, 129.573]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP008.geometry}
        material={materials["COLOR.004"]}
        position={[120.416, -0.017, 128.512]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL021.geometry}
        material={materials["COLOR.004"]}
        position={[105.935, 0.54, -33.997]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BL_WHEEL005.geometry}
        material={materials["COLOR.004"]}
        position={[-14.036, 0.277, -24.938]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL018.geometry}
        material={materials["COLOR.004"]}
        position={[35.547, 0.574, -20.487]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL026.geometry}
        material={materials["COLOR.004"]}
        position={[37.804, 0.42, -57.64]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL023.geometry}
        material={materials["COLOR.004"]}
        position={[22.734, 0.573, 40.849]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL027.geometry}
        material={materials["COLOR.004"]}
        position={[46.774, 0.411, -119.903]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL019.geometry}
        material={materials["COLOR.004"]}
        position={[-33.216, 0.503, -32.589]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL028.geometry}
        material={materials["COLOR.004"]}
        position={[166.889, 0.418, 120.443]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL029.geometry}
        material={materials["COLOR.004"]}
        position={[51.122, 0.418, 107.055]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL030.geometry}
        material={materials["COLOR.004"]}
        position={[106.172, 0.314, -93.72]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY006.geometry}
        material={materials["COLOR.004"]}
        position={[12.179, -0.002, -117.403]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL024.geometry}
        material={materials["COLOR.004"]}
        position={[-13.6, 0.442, -122.532]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL031.geometry}
        material={materials["COLOR.004"]}
        position={[-44.214, 0.411, -121.962]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL025.geometry}
        material={materials["COLOR.004"]}
        position={[105.583, 0.476, 54.525]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL026.geometry}
        material={materials["COLOR.004"]}
        position={[120.194, 0.517, -98.253]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL032.geometry}
        material={materials["COLOR.004"]}
        position={[123.09, 0.343, 94.884]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL027.geometry}
        material={materials["COLOR.004"]}
        position={[-47.384, 0.58, 34.48]}
        rotation={[0, 1.571, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL020.geometry}
        material={materials["COLOR.004"]}
        position={[27.003, 0.672, 28.984]}
        rotation={[0, 1.571, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL028.geometry}
        material={materials["COLOR.004"]}
        position={[-60.141, 0.672, -2.793]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL033.geometry}
        material={materials["COLOR.004"]}
        position={[111.836, 0.642, -19.79]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body002.geometry}
        material={materials["COLOR.004"]}
        position={[50.886, -0.018, -48.672]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL034.geometry}
        material={materials["COLOR.004"]}
        position={[-135.091, 0.41, -37.272]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL021.geometry}
        material={materials["COLOR.004"]}
        position={[28.181, 0.533, 98.524]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL022.geometry}
        material={materials["COLOR.004"]}
        position={[-65.018, 0.533, 94.948]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL035.geometry}
        material={materials["COLOR.004"]}
        position={[33.064, 0.415, 70.708]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL036.geometry}
        material={materials["COLOR.004"]}
        position={[-51.302, 0.51, 1.814]}
        rotation={[0, -1.571, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL023.geometry}
        material={materials["COLOR.004"]}
        position={[-49.284, 0.672, 110.4]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT149.geometry}
        material={materials["COLOR.004"]}
        position={[4.624, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT150.geometry}
        material={materials["COLOR.004"]}
        position={[-4.699, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polis_car.geometry}
        material={materials["COLOR.004"]}
        position={[142.196, 0.343, 66.521]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL029.geometry}
        material={materials["COLOR.004"]}
        position={[136.231, 0.52, -93.439]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL024.geometry}
        material={materials["COLOR.004"]}
        position={[16.238, 0.354, 29.717]}
        rotation={[Math.PI, -1.222, Math.PI]}
        scale={[0.012, 0.011, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY007.geometry}
        material={materials["COLOR.004"]}
        position={[144.845, 0.165, -94.848]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TENNIS_STADIUM002.geometry}
        material={materials["COLOR.004"]}
        position={[83.415, -0.017, 141.067]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_Shop002.geometry}
        material={materials["COLOR.004"]}
        position={[-54.759, -0.017, -22.798]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Market003.geometry}
        material={materials["COLOR.004"]}
        position={[-81.227, -0.017, -82.631]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR105.geometry}
        material={materials["COLOR.004"]}
        position={[-60.104, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR106.geometry}
        material={materials["COLOR.004"]}
        position={[-47.63, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR107.geometry}
        material={materials["COLOR.004"]}
        position={[-71.939, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR108.geometry}
        material={materials["COLOR.004"]}
        position={[-84.362, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE077.geometry}
        material={materials["COLOR.004"]}
        position={[-87.971, 0.159, -66.036]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT151.geometry}
        material={materials["COLOR.004"]}
        position={[-87.943, -0.017, -66.065]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["COLOR.004"]}
        position={[-55.028, -0.017, -60.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_BUILDING002.geometry}
        material={materials["COLOR.004"]}
        position={[78.312, 0.287, 83.581]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE078.geometry}
        material={materials["COLOR.004"]}
        position={[-72.282, 0.159, -66.036]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT152.geometry}
        material={materials["COLOR.004"]}
        position={[-72.254, -0.017, -66.065]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE079.geometry}
        material={materials["COLOR.004"]}
        position={[-87.971, 0.159, -99.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT153.geometry}
        material={materials["COLOR.004"]}
        position={[-87.943, -0.017, -99.329]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE080.geometry}
        material={materials["COLOR.004"]}
        position={[-72.282, 0.159, -99.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT154.geometry}
        material={materials["COLOR.004"]}
        position={[-72.254, -0.017, -99.329]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Game_Shop002.geometry}
        material={materials["COLOR.004"]}
        position={[-80.951, -0.017, -133.392]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["COLOR.004"]}
        position={[-11.798, -0.035, 32.555]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["COLOR.004"]}
        position={[31.466, 0.285, 6.429]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT155.geometry}
        material={materials["COLOR.004"]}
        position={[4.624, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT156.geometry}
        material={materials["COLOR.004"]}
        position={[-4.699, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT157.geometry}
        material={materials["COLOR.004"]}
        position={[4.624, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT158.geometry}
        material={materials["COLOR.004"]}
        position={[-4.699, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT159.geometry}
        material={materials["COLOR.004"]}
        position={[4.624, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT160.geometry}
        material={materials["COLOR.004"]}
        position={[-4.699, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT161.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT162.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT163.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT164.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT165.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT166.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT167.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT168.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT169.geometry}
        material={materials["COLOR.004"]}
        position={[29.663, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT170.geometry}
        material={materials["COLOR.004"]}
        position={[17.305, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT171.geometry}
        material={materials["COLOR.004"]}
        position={[29.663, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT172.geometry}
        material={materials["COLOR.004"]}
        position={[17.305, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT173.geometry}
        material={materials["COLOR.004"]}
        position={[29.663, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT174.geometry}
        material={materials["COLOR.004"]}
        position={[17.305, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT175.geometry}
        material={materials["COLOR.004"]}
        position={[29.663, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT176.geometry}
        material={materials["COLOR.004"]}
        position={[17.305, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT177.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT178.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT179.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT180.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT181.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT182.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT183.geometry}
        material={materials["COLOR.004"]}
        position={[-16.669, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT184.geometry}
        material={materials["COLOR.004"]}
        position={[-29.027, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT185.geometry}
        material={materials["COLOR.004"]}
        position={[29.636, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT186.geometry}
        material={materials["COLOR.004"]}
        position={[17.279, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT187.geometry}
        material={materials["COLOR.004"]}
        position={[29.636, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT188.geometry}
        material={materials["COLOR.004"]}
        position={[17.279, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT189.geometry}
        material={materials["COLOR.004"]}
        position={[29.636, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT190.geometry}
        material={materials["COLOR.004"]}
        position={[17.279, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT191.geometry}
        material={materials["COLOR.004"]}
        position={[29.636, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT192.geometry}
        material={materials["COLOR.004"]}
        position={[17.279, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE063.geometry}
        material={materials["COLOR.004"]}
        position={[-66.383, 0.159, 45.743]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE064.geometry}
        material={materials["COLOR.004"]}
        position={[-29.05, 0.159, 1]}
        rotation={[0, -1.571, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE065.geometry}
        material={materials["COLOR.004"]}
        position={[29.596, 0.159, 1]}
        rotation={[0, -1.571, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./models/city_c4.glb");
