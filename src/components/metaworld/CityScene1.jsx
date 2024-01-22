import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function CityScene1(props) {
  const { nodes, materials } = useGLTF("./models/city_c3.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Road126.geometry}
        material={materials["COLOR.003"]}
        position={[48.492, -0.018, -34.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walking_Road013.geometry}
        material={materials["COLOR.003"]}
        position={[36.438, -0.018, -46.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Straight_Road070.geometry}
        material={materials["COLOR.003"]}
        position={[96.707, -0.018, -167.452]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Not_Walking_Road3003.geometry}
        material={materials["COLOR.003"]}
        position={[-132.317, -0.018, 170.056]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground405.geometry}
        material={materials["COLOR.003"]}
        position={[-47.939, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground406.geometry}
        material={materials["COLOR.003"]}
        position={[72.599, -0.018, -10.752]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground407.geometry}
        material={materials["COLOR.003"]}
        position={[60.546, -0.018, -83.075]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground408.geometry}
        material={materials["COLOR.003"]}
        position={[0.276, -0.018, -71.021]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground409.geometry}
        material={materials["COLOR.003"]}
        position={[-59.993, -0.018, -95.129]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground410.geometry}
        material={materials["COLOR.003"]}
        position={[-23.832, -0.018, -143.345]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground411.geometry}
        material={materials["COLOR.003"]}
        position={[-120.263, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground412.geometry}
        material={materials["COLOR.003"]}
        position={[-11.778, -0.018, 145.949]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground413.geometry}
        material={materials["COLOR.003"]}
        position={[-59.993, -0.018, 61.571]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground414.geometry}
        material={materials["COLOR.003"]}
        position={[72.599, -0.018, 73.625]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SCHOOL001.geometry}
        material={materials["COLOR.003"]}
        position={[-82.982, -0.015, -0.125]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RESTAURANT001.geometry}
        material={materials["COLOR.003"]}
        position={[-77.404, -0.017, 56.508]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TENNIS_STADIUM2001.geometry}
        material={materials["COLOR.003"]}
        position={[46.189, -0.044, 140.852]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FOOTBALL_STADIUM001.geometry}
        material={materials["COLOR.003"]}
        position={[9.163, -0.014, 139.897]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOSPITAL001.geometry}
        material={materials["COLOR.003"]}
        position={[55.73, -0.017, -81.93]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COFFEE001.geometry}
        material={materials["COLOR.003"]}
        position={[-78.894, 0.413, 139.323]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GasStationGround001.geometry}
        material={materials["COLOR.003"]}
        position={[7.319, -0.017, 67.598]}
        rotation={[0, -1.571, 0]}
        scale={[0.008, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIBRARY001.geometry}
        material={materials["COLOR.003"]}
        position={[-55.28, 0.397, 25.769]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parking_Ground001.geometry}
        material={materials["COLOR.003"]}
        position={[0.091, -0.018, 1.038]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP003.geometry}
        material={materials["COLOR.003"]}
        position={[95.817, -0.017, -153.312]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING002.geometry}
        material={materials["COLOR.003"]}
        position={[49.214, -0.017, -134.889]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING001.geometry}
        material={materials["COLOR.003"]}
        position={[80.608, -0.017, -152.47]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3010.geometry}
        material={materials["COLOR.003"]}
        position={[63.958, -0.012, -155.284]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3003.geometry}
        material={materials["COLOR.003"]}
        position={[52.595, -0.017, 18.333]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3004.geometry}
        material={materials["COLOR.003"]}
        position={[52.595, -0.017, -18.285]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_SMALL_TOWER002.geometry}
        material={materials["COLOR.003"]}
        position={[35.105, 0.287, -155.692]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_SMALL_TOWER002.geometry}
        material={materials["COLOR.003"]}
        position={[35.29, -0.017, -135.427]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOTEL001.geometry}
        material={materials["COLOR.003"]}
        position={[21.722, 0.287, -142.958]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3011.geometry}
        material={materials["COLOR.003"]}
        position={[4.033, -0.012, -155.87]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BROWN_BUILDING3001.geometry}
        material={materials["COLOR.003"]}
        position={[4.704, -0.017, -131.207]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COURT001.geometry}
        material={materials["COLOR.003"]}
        position={[53.147, -0.017, 67.569]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COFFEE_SHOP001.geometry}
        material={materials["COLOR.003"]}
        position={[94.019, -0.017, -131.191]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CLOTHES_SHOP001.geometry}
        material={materials["COLOR.003"]}
        position={[81.2, -0.017, -133.15]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PHARMACY002.geometry}
        material={materials["COLOR.003"]}
        position={[89.424, -0.017, -66.094]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2004.geometry}
        material={materials["COLOR.003"]}
        position={[73.039, -0.017, -15.891]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2005.geometry}
        material={materials["COLOR.003"]}
        position={[73.039, -0.017, 20.172]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TOOLS_SHOP002.geometry}
        material={materials["COLOR.003"]}
        position={[-12.039, -0.017, -132.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FAST_FOOD001.geometry}
        material={materials["COLOR.003"]}
        position={[-14.877, -0.017, -151.74]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CENTER_BUILDING001.geometry}
        material={materials["COLOR.003"]}
        position={[67.581, -0.017, -133.308]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground415.geometry}
        material={materials["COLOR.003"]}
        position={[132.869, -0.018, -83.075]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground416.geometry}
        material={materials["COLOR.003"]}
        position={[132.869, -0.018, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground417.geometry}
        material={materials["COLOR.003"]}
        position={[132.869, -0.018, 85.679]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground418.geometry}
        material={materials["COLOR.003"]}
        position={[132.869, -0.018, 145.949]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3012.geometry}
        material={materials["COLOR.003"]}
        position={[94.448, -0.012, -17.691]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3013.geometry}
        material={materials["COLOR.003"]}
        position={[94.448, -0.012, 19.352]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.POLICE_STATION001.geometry}
        material={materials["COLOR.003"]}
        position={[126.904, -0.017, 67.662]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_BUILDING3005.geometry}
        material={materials["COLOR.003"]}
        position={[121.444, -0.017, 154.463]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3014.geometry}
        material={materials["COLOR.003"]}
        position={[157.563, -0.012, 154.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING003.geometry}
        material={materials["COLOR.003"]}
        position={[155.098, -0.017, 128.481]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OPEN_ROAD008.geometry}
        material={materials["COLOR.003"]}
        position={[36.438, -0.02, 1.302]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE021.geometry}
        material={materials["COLOR.003"]}
        position={[-105.853, -0.017, -156.681]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE024.geometry}
        material={materials["COLOR.003"]}
        position={[-105.853, -0.017, -120.064]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE025.geometry}
        material={materials["COLOR.003"]}
        position={[-124.406, -0.017, -100.236]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE026.geometry}
        material={materials["COLOR.003"]}
        position={[-124.406, -0.017, -63.618]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE027.geometry}
        material={materials["COLOR.003"]}
        position={[-124.406, -0.017, -5.975]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE028.geometry}
        material={materials["COLOR.003"]}
        position={[-124.406, -0.017, 30.643]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE029.geometry}
        material={materials["COLOR.003"]}
        position={[-104.42, -0.017, 88.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE030.geometry}
        material={materials["COLOR.003"]}
        position={[-104.42, -0.017, 125.51]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1021.geometry}
        material={materials["COLOR.003"]}
        position={[-103.214, -0.017, 42.031]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1022.geometry}
        material={materials["COLOR.003"]}
        position={[-103.214, -0.017, -6.313]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1023.geometry}
        material={materials["COLOR.003"]}
        position={[-125.187, -0.017, -40.92]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1024.geometry}
        material={materials["COLOR.003"]}
        position={[-114.952, -0.017, -79.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1025.geometry}
        material={materials["COLOR.003"]}
        position={[-114.952, -0.017, -125.295]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1026.geometry}
        material={materials["COLOR.003"]}
        position={[-124.649, -0.017, -148.786]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE027.geometry}
        material={materials["COLOR.003"]}
        position={[-114.143, -0.017, -40.836]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE028.geometry}
        material={materials["COLOR.003"]}
        position={[-123.714, -0.286, 103.483]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE029.geometry}
        material={materials["COLOR.003"]}
        position={[-123.714, -0.017, 152.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE030.geometry}
        material={materials["COLOR.003"]}
        position={[-114.179, -0.017, 69.967]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE031.geometry}
        material={materials["COLOR.003"]}
        position={[-105.29, -0.017, -141.146]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE032.geometry}
        material={materials["COLOR.003"]}
        position={[-108.419, -0.017, 13.181]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE033.geometry}
        material={materials["COLOR.003"]}
        position={[-120.343, -0.017, 51.276]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE031.geometry}
        material={materials["COLOR.003"]}
        position={[-103.414, -0.017, -86.078]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE003.geometry}
        material={materials["COLOR.003"]}
        position={[-114.261, -0.017, 129.807]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE005.geometry}
        material={materials["COLOR.003"]}
        position={[-110.852, -0.017, 62.143]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE006.geometry}
        material={materials["COLOR.003"]}
        position={[-115.144, -0.017, -19.722]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE007.geometry}
        material={materials["COLOR.003"]}
        position={[-114.014, -0.017, -155.757]}
        scale={0.01}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE034.geometry}
        material={materials["COLOR.003"]}
        position={[-8.341, -0.017, -102.888]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE035.geometry}
        material={materials["COLOR.003"]}
        position={[9.116, -0.017, -67.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE036.geometry}
        material={materials["COLOR.003"]}
        position={[-19.426, -0.017, -82.957]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE037.geometry}
        material={materials["COLOR.003"]}
        position={[21.228, -0.017, -82.957]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE033.geometry}
        material={materials["COLOR.003"]}
        position={[-15.44, -0.017, -72.569]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE034.geometry}
        material={materials["COLOR.003"]}
        position={[7.302, -0.017, -105.57]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1027.geometry}
        material={materials["COLOR.003"]}
        position={[-18.878, -0.017, -58.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1028.geometry}
        material={materials["COLOR.003"]}
        position={[20.926, -0.017, -58.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1029.geometry}
        material={materials["COLOR.003"]}
        position={[20.926, -0.017, -109.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE004.geometry}
        material={materials["COLOR.003"]}
        position={[2.42, -0.017, -87.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE005.geometry}
        material={materials["COLOR.003"]}
        position={[-24.421, -0.017, -62.532]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE006.geometry}
        material={materials["COLOR.003"]}
        position={[-24.421, -0.017, -105.72]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE007.geometry}
        material={materials["COLOR.003"]}
        position={[24.905, -0.017, -105.72]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK006.geometry}
        material={materials["COLOR.003"]}
        position={[9.599, 0.116, -76.246]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK007.geometry}
        material={materials["COLOR.003"]}
        position={[-5.335, 0.116, -93.449]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK008.geometry}
        material={materials["COLOR.003"]}
        position={[-14.195, 0.116, -65.391]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK009.geometry}
        material={materials["COLOR.003"]}
        position={[19.112, 0.116, -65.391]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK010.geometry}
        material={materials["COLOR.003"]}
        position={[-5.796, 0.116, -83.572]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK011.geometry}
        material={materials["COLOR.003"]}
        position={[-16.879, 0.116, -97.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK003.geometry}
        material={materials["COLOR.003"]}
        position={[-5.11, 0.065, -77.073]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK004.geometry}
        material={materials["COLOR.003"]}
        position={[18.055, 0.065, -87.317]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_ROCK005.geometry}
        material={materials["COLOR.003"]}
        position={[28.293, 0.065, -69.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT010.geometry}
        material={materials["COLOR.003"]}
        position={[66.584, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE014.geometry}
        material={materials["COLOR.003"]}
        position={[66.585, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT011.geometry}
        material={materials["COLOR.003"]}
        position={[78.332, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE015.geometry}
        material={materials["COLOR.003"]}
        position={[78.333, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT012.geometry}
        material={materials["COLOR.003"]}
        position={[90.641, -0.017, -111.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE016.geometry}
        material={materials["COLOR.003"]}
        position={[90.642, 0.159, -111.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT013.geometry}
        material={materials["COLOR.003"]}
        position={[66.584, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE017.geometry}
        material={materials["COLOR.003"]}
        position={[66.585, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT014.geometry}
        material={materials["COLOR.003"]}
        position={[78.332, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE018.geometry}
        material={materials["COLOR.003"]}
        position={[78.333, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT015.geometry}
        material={materials["COLOR.003"]}
        position={[90.641, -0.017, -54.634]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE019.geometry}
        material={materials["COLOR.003"]}
        position={[90.642, 0.159, -54.621]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT016.geometry}
        material={materials["COLOR.003"]}
        position={[-61.329, -0.017, 45.724]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE035.geometry}
        material={materials["COLOR.003"]}
        position={[-61.239, 0.159, 45.743]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT017.geometry}
        material={materials["COLOR.003"]}
        position={[-54.153, -0.017, 45.724]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE036.geometry}
        material={materials["COLOR.003"]}
        position={[-54.063, 0.159, 45.743]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT028.geometry}
        material={materials["COLOR.003"]}
        position={[-61.329, -0.017, 89.496]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE037.geometry}
        material={materials["COLOR.003"]}
        position={[-61.239, 0.159, 89.515]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT029.geometry}
        material={materials["COLOR.003"]}
        position={[-54.153, -0.017, 89.496]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE038.geometry}
        material={materials["COLOR.003"]}
        position={[-54.063, 0.159, 89.515]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT030.geometry}
        material={materials["COLOR.003"]}
        position={[-47.299, -0.017, 45.724]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE039.geometry}
        material={materials["COLOR.003"]}
        position={[-47.21, 0.159, 45.743]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT031.geometry}
        material={materials["COLOR.003"]}
        position={[-47.299, -0.017, 89.496]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE040.geometry}
        material={materials["COLOR.003"]}
        position={[-47.21, 0.159, 89.515]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE005.geometry}
        material={materials["COLOR.003"]}
        position={[-54.035, -0.017, 79.618]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR020.geometry}
        material={materials["COLOR.003"]}
        position={[-54.904, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR021.geometry}
        material={materials["COLOR.003"]}
        position={[-53.17, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE006.geometry}
        material={materials["COLOR.003"]}
        position={[-65.989, -0.017, 79.618]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR022.geometry}
        material={materials["COLOR.003"]}
        position={[-66.858, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR023.geometry}
        material={materials["COLOR.003"]}
        position={[-65.124, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE007.geometry}
        material={materials["COLOR.003"]}
        position={[-78.054, -0.017, 79.618]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR024.geometry}
        material={materials["COLOR.003"]}
        position={[-78.924, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR025.geometry}
        material={materials["COLOR.003"]}
        position={[-77.19, -0.017, 79.624]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE008.geometry}
        material={materials["COLOR.003"]}
        position={[-54.035, -0.017, 67.705]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR026.geometry}
        material={materials["COLOR.003"]}
        position={[-54.904, -0.017, 67.711]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR027.geometry}
        material={materials["COLOR.003"]}
        position={[-53.17, -0.017, 67.711]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE009.geometry}
        material={materials["COLOR.003"]}
        position={[-54.035, -0.017, 55.578]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR028.geometry}
        material={materials["COLOR.003"]}
        position={[-54.904, -0.017, 55.585]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR029.geometry}
        material={materials["COLOR.003"]}
        position={[-53.17, -0.017, 55.585]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE005.geometry}
        material={materials["COLOR.003"]}
        position={[-47.584, -0.017, 152.062]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR030.geometry}
        material={materials["COLOR.003"]}
        position={[-46.8, -0.017, 152.015]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR031.geometry}
        material={materials["COLOR.003"]}
        position={[-48.449, -0.017, 152.015]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE006.geometry}
        material={materials["COLOR.003"]}
        position={[-47.584, -0.017, 139.94]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR032.geometry}
        material={materials["COLOR.003"]}
        position={[-46.8, -0.017, 139.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR033.geometry}
        material={materials["COLOR.003"]}
        position={[-48.449, -0.017, 139.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE007.geometry}
        material={materials["COLOR.003"]}
        position={[-47.584, -0.017, 127.911]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR034.geometry}
        material={materials["COLOR.003"]}
        position={[-46.8, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR035.geometry}
        material={materials["COLOR.003"]}
        position={[-48.449, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE008.geometry}
        material={materials["COLOR.003"]}
        position={[-59.851, -0.017, 127.911]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR036.geometry}
        material={materials["COLOR.003"]}
        position={[-59.066, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR037.geometry}
        material={materials["COLOR.003"]}
        position={[-60.716, -0.017, 127.863]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TABLE009.geometry}
        material={materials["COLOR.003"]}
        position={[-59.851, -0.017, 152.016]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR038.geometry}
        material={materials["COLOR.003"]}
        position={[-59.066, -0.017, 151.969]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CHAIR039.geometry}
        material={materials["COLOR.003"]}
        position={[-60.716, -0.017, 151.969]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR017.geometry}
        material={materials["COLOR.003"]}
        position={[-35.495, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR018.geometry}
        material={materials["COLOR.003"]}
        position={[-35.495, -0.017, 151.926]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1030.geometry}
        material={materials["COLOR.003"]}
        position={[-75.506, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1031.geometry}
        material={materials["COLOR.003"]}
        position={[-84.038, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1032.geometry}
        material={materials["COLOR.003"]}
        position={[-75.506, -0.017, 158.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1033.geometry}
        material={materials["COLOR.003"]}
        position={[-84.038, -0.017, 158.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1034.geometry}
        material={materials["COLOR.003"]}
        position={[-31.413, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1035.geometry}
        material={materials["COLOR.003"]}
        position={[-39.945, -0.017, 120.303]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1036.geometry}
        material={materials["COLOR.003"]}
        position={[-31.413, -0.017, 158.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1037.geometry}
        material={materials["COLOR.003"]}
        position={[-39.945, -0.017, 158.737]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE020.geometry}
        material={materials["COLOR.003"]}
        position={[64.271, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE021.geometry}
        material={materials["COLOR.003"]}
        position={[64.271, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE022.geometry}
        material={materials["COLOR.003"]}
        position={[28.11, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE023.geometry}
        material={materials["COLOR.003"]}
        position={[28.11, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE024.geometry}
        material={materials["COLOR.003"]}
        position={[-10.174, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE025.geometry}
        material={materials["COLOR.003"]}
        position={[-10.174, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE026.geometry}
        material={materials["COLOR.003"]}
        position={[99.867, 0.159, 128.119]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SQUARE_TREE027.geometry}
        material={materials["COLOR.003"]}
        position={[99.867, 0.159, 154.866]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1038.geometry}
        material={materials["COLOR.003"]}
        position={[133.548, -0.017, -56.478]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1039.geometry}
        material={materials["COLOR.003"]}
        position={[144.166, -0.017, -56.478]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1040.geometry}
        material={materials["COLOR.003"]}
        position={[133.548, -0.017, -157.522]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPHEREICAL_TREE1041.geometry}
        material={materials["COLOR.003"]}
        position={[144.166, -0.017, -157.522]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE038.geometry}
        material={materials["COLOR.003"]}
        position={[121.958, -0.017, -137.984]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE039.geometry}
        material={materials["COLOR.003"]}
        position={[138.752, -0.017, -123.199]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE040.geometry}
        material={materials["COLOR.003"]}
        position={[138.752, -0.017, -103.098]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE041.geometry}
        material={materials["COLOR.003"]}
        position={[160.358, -0.017, -123.199]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE042.geometry}
        material={materials["COLOR.003"]}
        position={[160.358, -0.017, -159.82]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE043.geometry}
        material={materials["COLOR.003"]}
        position={[160.358, -0.017, -55.219]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT032.geometry}
        material={materials["COLOR.003"]}
        position={[-74.914, -0.017, -17.997]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE008.geometry}
        material={materials["COLOR.003"]}
        position={[-74.901, 0.159, -18.006]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT033.geometry}
        material={materials["COLOR.003"]}
        position={[-74.914, -0.017, -12.44]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE009.geometry}
        material={materials["COLOR.003"]}
        position={[-74.901, 0.159, -12.45]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT034.geometry}
        material={materials["COLOR.003"]}
        position={[-74.914, -0.017, 12.295]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE010.geometry}
        material={materials["COLOR.003"]}
        position={[-74.901, 0.159, 12.285]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT035.geometry}
        material={materials["COLOR.003"]}
        position={[-74.914, -0.017, 17.851]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE011.geometry}
        material={materials["COLOR.003"]}
        position={[-74.901, 0.159, 17.842]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR019.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, -149.162]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR020.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, -137.402]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR021.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, -101.496]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR042.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, -4.275]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR043.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, 7.484]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR044.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, 80.034]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR045.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, 91.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR046.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, 140.229]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR047.geometry}
        material={materials["COLOR.003"]}
        position={[-114.216, -0.017, 151.988]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2003.geometry}
        material={materials["COLOR.003"]}
        position={[-113.838, -0.017, -58.712]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2004.geometry}
        material={materials["COLOR.003"]}
        position={[-113.838, -0.017, 31.681]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR2005.geometry}
        material={materials["COLOR.003"]}
        position={[-113.838, -0.017, 115.396]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR048.geometry}
        material={materials["COLOR.003"]}
        position={[84.859, -0.017, -110.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR049.geometry}
        material={materials["COLOR.003"]}
        position={[72.134, -0.017, -110.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PHARMACY003.geometry}
        material={materials["COLOR.003"]}
        position={[-26.731, -0.017, -133.37]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3015.geometry}
        material={materials["COLOR.003"]}
        position={[52.55, -0.017, 0.055]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3016.geometry}
        material={materials["COLOR.003"]}
        position={[94.752, -0.017, 0.055]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2006.geometry}
        material={materials["COLOR.003"]}
        position={[73.179, -0.017, 1.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3017.geometry}
        material={materials["COLOR.003"]}
        position={[146.19, -0.017, 154.557]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3018.geometry}
        material={materials["COLOR.003"]}
        position={[134.149, -0.012, 154.61]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT020.geometry}
        material={materials["COLOR.003"]}
        position={[113.418, -0.444, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT021.geometry}
        material={materials["COLOR.003"]}
        position={[104.143, -0.444, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT022.geometry}
        material={materials["COLOR.003"]}
        position={[41.119, -0.035, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT023.geometry}
        material={materials["COLOR.003"]}
        position={[31.79, -0.002, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT024.geometry}
        material={materials["COLOR.003"]}
        position={[-31.232, -0.035, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT025.geometry}
        material={materials["COLOR.003"]}
        position={[-40.561, -0.002, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT026.geometry}
        material={materials["COLOR.003"]}
        position={[113.455, -0.342, 32.785]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT027.geometry}
        material={materials["COLOR.003"]}
        position={[104.127, -0.308, 42.085]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT028.geometry}
        material={materials["COLOR.003"]}
        position={[-91.467, -0.47, -41.927]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT029.geometry}
        material={materials["COLOR.003"]}
        position={[-91.467, -0.47, -39.778]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT031.geometry}
        material={materials["COLOR.003"]}
        position={[-91.479, -0.368, 32.989]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT033.geometry}
        material={materials["COLOR.003"]}
        position={[-101.17, -0.312, 42.354]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT044.geometry}
        material={materials["COLOR.003"]}
        position={[-40.42, 0.287, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT045.geometry}
        material={materials["COLOR.003"]}
        position={[-30.417, 0.287, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT046.geometry}
        material={materials["COLOR.003"]}
        position={[31.86, 0.287, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT047.geometry}
        material={materials["COLOR.003"]}
        position={[41.863, 0.287, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT053.geometry}
        material={materials["COLOR.003"]}
        position={[103.986, -0.019, -114.751]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT054.geometry}
        material={materials["COLOR.003"]}
        position={[113.286, -0.019, -123.715]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT055.geometry}
        material={materials["COLOR.003"]}
        position={[164.427, -0.354, 42.048]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT056.geometry}
        material={materials["COLOR.003"]}
        position={[173.727, -0.387, 33.083]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT057.geometry}
        material={materials["COLOR.003"]}
        position={[41.006, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT058.geometry}
        material={materials["COLOR.003"]}
        position={[31.731, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT059.geometry}
        material={materials["COLOR.003"]}
        position={[-31.244, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT060.geometry}
        material={materials["COLOR.003"]}
        position={[-40.519, -0.138, -40.859]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT061.geometry}
        material={materials["COLOR.003"]}
        position={[41.006, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT062.geometry}
        material={materials["COLOR.003"]}
        position={[31.731, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT063.geometry}
        material={materials["COLOR.003"]}
        position={[-31.216, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT064.geometry}
        material={materials["COLOR.003"]}
        position={[-40.491, 0.018, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT065.geometry}
        material={materials["COLOR.003"]}
        position={[113.378, -0.289, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT066.geometry}
        material={materials["COLOR.003"]}
        position={[104.103, -0.289, 103.811]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT067.geometry}
        material={materials["COLOR.003"]}
        position={[-91.467, -0.315, 102.731]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT068.geometry}
        material={materials["COLOR.003"]}
        position={[-91.467, -0.315, 104.88]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT069.geometry}
        material={materials["COLOR.003"]}
        position={[164.292, -0.334, 102.731]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT070.geometry}
        material={materials["COLOR.003"]}
        position={[164.336, -0.334, 104.927]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT071.geometry}
        material={materials["COLOR.003"]}
        position={[164.292, -0.49, -41.984]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_LIGHT072.geometry}
        material={materials["COLOR.003"]}
        position={[164.336, -0.49, -39.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET048.geometry}
        material={materials["COLOR.003"]}
        position={[113.51, -0.323, -26.043]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET049.geometry}
        material={materials["COLOR.003"]}
        position={[104.158, -0.019, 24.338]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET050.geometry}
        material={materials["COLOR.003"]}
        position={[173.81, -0.065, -26.043]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET051.geometry}
        material={materials["COLOR.003"]}
        position={[164.458, -0.065, 24.338]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET052.geometry}
        material={materials["COLOR.003"]}
        position={[173.81, -0.065, -123.035]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET053.geometry}
        material={materials["COLOR.003"]}
        position={[164.458, -0.065, -72.654]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET054.geometry}
        material={materials["COLOR.003"]}
        position={[173.81, -0.065, 82.608]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET055.geometry}
        material={materials["COLOR.003"]}
        position={[164.458, -0.065, 132.989]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET056.geometry}
        material={materials["COLOR.003"]}
        position={[158.116, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET057.geometry}
        material={materials["COLOR.003"]}
        position={[118.009, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET058.geometry}
        material={materials["COLOR.003"]}
        position={[91.22, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET059.geometry}
        material={materials["COLOR.003"]}
        position={[51.113, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET060.geometry}
        material={materials["COLOR.003"]}
        position={[20.653, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET061.geometry}
        material={materials["COLOR.003"]}
        position={[-19.454, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET062.geometry}
        material={materials["COLOR.003"]}
        position={[-46.04, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET063.geometry}
        material={materials["COLOR.003"]}
        position={[-86.146, 0.018, 103.782]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET064.geometry}
        material={materials["COLOR.003"]}
        position={[-46.04, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET065.geometry}
        material={materials["COLOR.003"]}
        position={[-86.146, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET066.geometry}
        material={materials["COLOR.003"]}
        position={[20.463, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET067.geometry}
        material={materials["COLOR.003"]}
        position={[-19.644, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET068.geometry}
        material={materials["COLOR.003"]}
        position={[93.441, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET069.geometry}
        material={materials["COLOR.003"]}
        position={[53.334, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET070.geometry}
        material={materials["COLOR.003"]}
        position={[158.96, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET071.geometry}
        material={materials["COLOR.003"]}
        position={[118.853, -0.138, -41.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET072.geometry}
        material={materials["COLOR.003"]}
        position={[138.904, -0.002, 42.174]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET073.geometry}
        material={materials["COLOR.003"]}
        position={[63.481, -0.002, 42.039]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET074.geometry}
        material={materials["COLOR.003"]}
        position={[6.895, -0.035, 32.869]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET075.geometry}
        material={materials["COLOR.003"]}
        position={[-31.035, 0.287, -107.901]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET076.geometry}
        material={materials["COLOR.003"]}
        position={[-1.649, 0.287, -114.693]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET077.geometry}
        material={materials["COLOR.003"]}
        position={[-68.933, 0.287, -123.858]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET078.geometry}
        material={materials["COLOR.003"]}
        position={[55.055, 0.287, -123.858]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET079.geometry}
        material={materials["COLOR.003"]}
        position={[93.453, 0.287, -114.603]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET080.geometry}
        material={materials["COLOR.003"]}
        position={[31.95, 0.287, -76.132]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET081.geometry}
        material={materials["COLOR.003"]}
        position={[113.231, -0.019, -56.717]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET082.geometry}
        material={materials["COLOR.003"]}
        position={[104.187, -0.019, -102.772]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET083.geometry}
        material={materials["COLOR.003"]}
        position={[-91.556, -0.046, -145.797]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET084.geometry}
        material={materials["COLOR.003"]}
        position={[-100.751, -0.023, -82.57]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET085.geometry}
        material={materials["COLOR.003"]}
        position={[-40.463, 0.287, -62.658]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET086.geometry}
        material={materials["COLOR.003"]}
        position={[-31.18, 0.287, -25.542]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET087.geometry}
        material={materials["COLOR.003"]}
        position={[-40.536, 0.287, 26.334]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET088.geometry}
        material={materials["COLOR.003"]}
        position={[40.925, 0.287, -25.542]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET089.geometry}
        material={materials["COLOR.003"]}
        position={[31.57, 0.287, 26.334]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET090.geometry}
        material={materials["COLOR.003"]}
        position={[-100.566, -0.023, 0.506]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET091.geometry}
        material={materials["COLOR.003"]}
        position={[-100.566, -0.023, 67.193]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET092.geometry}
        material={materials["COLOR.003"]}
        position={[-40.994, 0.287, 49.842]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET093.geometry}
        material={materials["COLOR.003"]}
        position={[-31.587, 0.287, 87.337]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET094.geometry}
        material={materials["COLOR.003"]}
        position={[-100.566, -0.023, 122.53]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET095.geometry}
        material={materials["COLOR.003"]}
        position={[-69.98, -0.002, 42.105]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE009.geometry}
        material={materials["COLOR.003"]}
        position={[111.619, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE010.geometry}
        material={materials["COLOR.003"]}
        position={[108.75, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE011.geometry}
        material={materials["COLOR.003"]}
        position={[105.944, -0.017, 156.73]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE012.geometry}
        material={materials["COLOR.003"]}
        position={[171.891, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE013.geometry}
        material={materials["COLOR.003"]}
        position={[169.022, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE014.geometry}
        material={materials["COLOR.003"]}
        position={[166.216, -0.017, 88.156]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE015.geometry}
        material={materials["COLOR.003"]}
        position={[171.891, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE016.geometry}
        material={materials["COLOR.003"]}
        position={[169.022, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CONE017.geometry}
        material={materials["COLOR.003"]}
        position={[166.216, -0.017, 49.089]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER010.geometry}
        material={materials["COLOR.003"]}
        position={[163.511, -0.065, 85.677]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER011.geometry}
        material={materials["COLOR.003"]}
        position={[163.511, -0.065, 77.176]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER012.geometry}
        material={materials["COLOR.003"]}
        position={[163.511, -0.065, 67.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER013.geometry}
        material={materials["COLOR.003"]}
        position={[163.511, -0.065, 59.019]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER014.geometry}
        material={materials["COLOR.003"]}
        position={[163.511, -0.065, 49.674]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER015.geometry}
        material={materials["COLOR.003"]}
        position={[114.212, -0.019, 85.677]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER016.geometry}
        material={materials["COLOR.003"]}
        position={[114.212, -0.019, 77.176]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER017.geometry}
        material={materials["COLOR.003"]}
        position={[114.212, -0.019, 67.725]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER018.geometry}
        material={materials["COLOR.003"]}
        position={[114.212, -0.019, 59.019]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRAFFIC_CYLINDER019.geometry}
        material={materials["COLOR.003"]}
        position={[114.212, -0.019, 49.674]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STOP_SIGN002.geometry}
        material={materials["COLOR.003"]}
        position={[158.374, -0.017, 79.609]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STOP_SIGN003.geometry}
        material={materials["COLOR.003"]}
        position={[158.374, -0.017, 55.484]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT036.geometry}
        material={materials["COLOR.003"]}
        position={[66.196, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE041.geometry}
        material={materials["COLOR.003"]}
        position={[66.204, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT037.geometry}
        material={materials["COLOR.003"]}
        position={[66.196, -0.017, 81.547]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE042.geometry}
        material={materials["COLOR.003"]}
        position={[66.185, 0.159, 81.566]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT038.geometry}
        material={materials["COLOR.003"]}
        position={[78.481, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE043.geometry}
        material={materials["COLOR.003"]}
        position={[78.489, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT039.geometry}
        material={materials["COLOR.003"]}
        position={[90.351, -0.017, 53.047]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE044.geometry}
        material={materials["COLOR.003"]}
        position={[90.36, 0.159, 53.066]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT043.geometry}
        material={materials["COLOR.003"]}
        position={[90.351, -0.017, 81.547]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRIANGLE_TREE045.geometry}
        material={materials["COLOR.003"]}
        position={[90.341, 0.159, 81.566]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE004.geometry}
        material={materials["COLOR.003"]}
        position={[150.165, -0.017, 45.418]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE005.geometry}
        material={materials["COLOR.003"]}
        position={[126.765, -0.017, 45.418]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE006.geometry}
        material={materials["COLOR.003"]}
        position={[150.165, -0.017, 89.941]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONCRETE007.geometry}
        material={materials["COLOR.003"]}
        position={[126.765, -0.017, 89.941]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2021.geometry}
        material={materials["COLOR.003"]}
        position={[95.3, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2022.geometry}
        material={materials["COLOR.003"]}
        position={[12.451, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2023.geometry}
        material={materials["COLOR.003"]}
        position={[-68.248, -0.004, -172.053]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2024.geometry}
        material={materials["COLOR.003"]}
        position={[-114.202, -0.281, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2025.geometry}
        material={materials["COLOR.003"]}
        position={[-28.212, -0.004, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2026.geometry}
        material={materials["COLOR.003"]}
        position={[64.107, -0.004, -162.794]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2027.geometry}
        material={materials["COLOR.003"]}
        position={[95.3, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2028.geometry}
        material={materials["COLOR.003"]}
        position={[12.451, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2029.geometry}
        material={materials["COLOR.003"]}
        position={[-68.248, 0.287, 165.455]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2030.geometry}
        material={materials["COLOR.003"]}
        position={[-114.202, 0.01, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2031.geometry}
        material={materials["COLOR.003"]}
        position={[-28.212, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2032.geometry}
        material={materials["COLOR.003"]}
        position={[64.107, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2033.geometry}
        material={materials["COLOR.003"]}
        position={[135.515, 0.287, 174.713]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2034.geometry}
        material={materials["COLOR.003"]}
        position={[-137.428, -0.021, 150.005]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2035.geometry}
        material={materials["COLOR.003"]}
        position={[-137.428, -0.021, 84.239]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2036.geometry}
        material={materials["COLOR.003"]}
        position={[-137.428, -0.021, 10.428]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2037.geometry}
        material={materials["COLOR.003"]}
        position={[-137.428, -0.021, -69.952]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2038.geometry}
        material={materials["COLOR.003"]}
        position={[-127.909, -0.021, 116.708]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2039.geometry}
        material={materials["COLOR.003"]}
        position={[-127.909, -0.021, 45.317]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2040.geometry}
        material={materials["COLOR.003"]}
        position={[-127.909, -0.415, -30.196]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LIGHT_STREET2041.geometry}
        material={materials["COLOR.003"]}
        position={[-127.909, -0.021, -126.445]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN016.geometry}
        material={materials["COLOR.003"]}
        position={[148.546, 0.018, 102.517]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN017.geometry}
        material={materials["COLOR.003"]}
        position={[-40.752, 0.287, 14.698]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN018.geometry}
        material={materials["COLOR.003"]}
        position={[113.673, -0.019, -129.003]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN019.geometry}
        material={materials["COLOR.003"]}
        position={[-101.184, -0.023, -117.935]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN020.geometry}
        material={materials["COLOR.003"]}
        position={[-30.831, 0.287, 165.314]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN021.geometry}
        material={materials["COLOR.003"]}
        position={[164.07, -0.065, 146.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN022.geometry}
        material={materials["COLOR.003"]}
        position={[103.878, -0.019, -10.351]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN023.geometry}
        material={materials["COLOR.003"]}
        position={[-31.022, 0.287, -79.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN024.geometry}
        material={materials["COLOR.003"]}
        position={[103.758, -0.019, -94.046]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN025.geometry}
        material={materials["COLOR.003"]}
        position={[12.399, -0.035, 32.434]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN026.geometry}
        material={materials["COLOR.003"]}
        position={[-101.202, -0.023, 20.613]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN027.geometry}
        material={materials["COLOR.003"]}
        position={[83.02, 0.287, 114.74]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN028.geometry}
        material={materials["COLOR.003"]}
        position={[140.782, -0.035, 32.47]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN029.geometry}
        material={materials["COLOR.003"]}
        position={[1.55, -0.107, -29.836]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN030.geometry}
        material={materials["COLOR.003"]}
        position={[1.55, 0.287, -124.06]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREEN_RECYCLE_BIN031.geometry}
        material={materials["COLOR.003"]}
        position={[133.662, -0.107, -29.904]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CARS_PARKING001.geometry}
        material={materials["COLOR.003"]}
        position={[-59.6, 0.019, 1.294]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_BUILDING3019.geometry}
        material={materials["COLOR.003"]}
        position={[-42.783, -0.017, -153.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR050.geometry}
        material={materials["COLOR.003"]}
        position={[0.632, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR051.geometry}
        material={materials["COLOR.003"]}
        position={[0.632, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR052.geometry}
        material={materials["COLOR.003"]}
        position={[0.632, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR053.geometry}
        material={materials["COLOR.003"]}
        position={[0.632, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR054.geometry}
        material={materials["COLOR.003"]}
        position={[27.979, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR055.geometry}
        material={materials["COLOR.003"]}
        position={[27.979, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR056.geometry}
        material={materials["COLOR.003"]}
        position={[27.979, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR057.geometry}
        material={materials["COLOR.003"]}
        position={[27.979, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR058.geometry}
        material={materials["COLOR.003"]}
        position={[-26.999, -0.017, -57.347]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR059.geometry}
        material={materials["COLOR.003"]}
        position={[-26.999, -0.017, -74.788]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR060.geometry}
        material={materials["COLOR.003"]}
        position={[-26.999, -0.017, -91.385]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR061.geometry}
        material={materials["COLOR.003"]}
        position={[-26.999, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG005.geometry}
        material={materials["COLOR.003"]}
        position={[-114.313, 0.041, -130.86]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG006.geometry}
        material={materials["COLOR.003"]}
        position={[-114.313, 0.041, -48.548]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG007.geometry}
        material={materials["COLOR.003"]}
        position={[-114.313, 0.041, -11.81]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOG008.geometry}
        material={materials["COLOR.003"]}
        position={[-114.313, 0.041, 43.641]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR062.geometry}
        material={materials["COLOR.003"]}
        position={[-17.959, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR063.geometry}
        material={materials["COLOR.003"]}
        position={[-17.959, -0.017, 151.926]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR064.geometry}
        material={materials["COLOR.003"]}
        position={[-27.001, -0.017, 127.867]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR065.geometry}
        material={materials["COLOR.003"]}
        position={[-27.001, -0.017, 151.926]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SWEET_SHOP001.geometry}
        material={materials["COLOR.003"]}
        position={[-26.952, -0.017, -153.526]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT060.geometry}
        material={materials["COLOR.003"]}
        position={[-78.1, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE012.geometry}
        material={materials["COLOR.003"]}
        position={[-78.087, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT065.geometry}
        material={materials["COLOR.003"]}
        position={[-53.853, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE013.geometry}
        material={materials["COLOR.003"]}
        position={[-53.84, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT066.geometry}
        material={materials["COLOR.003"]}
        position={[-8.846, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE014.geometry}
        material={materials["COLOR.003"]}
        position={[-8.832, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT067.geometry}
        material={materials["COLOR.003"]}
        position={[15.062, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE015.geometry}
        material={materials["COLOR.003"]}
        position={[15.076, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT068.geometry}
        material={materials["COLOR.003"]}
        position={[60.835, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE020.geometry}
        material={materials["COLOR.003"]}
        position={[60.849, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT069.geometry}
        material={materials["COLOR.003"]}
        position={[84.996, -0.098, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE021.geometry}
        material={materials["COLOR.003"]}
        position={[85.009, -0.042, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT070.geometry}
        material={materials["COLOR.003"]}
        position={[128.064, -0.093, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE022.geometry}
        material={materials["COLOR.003"]}
        position={[128.078, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT071.geometry}
        material={materials["COLOR.003"]}
        position={[150.764, -0.093, -40.914]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE023.geometry}
        material={materials["COLOR.003"]}
        position={[150.777, 0.037, -40.924]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT072.geometry}
        material={materials["COLOR.003"]}
        position={[86.851, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE024.geometry}
        material={materials["COLOR.003"]}
        position={[86.865, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT073.geometry}
        material={materials["COLOR.003"]}
        position={[58.689, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE025.geometry}
        material={materials["COLOR.003"]}
        position={[58.702, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT074.geometry}
        material={materials["COLOR.003"]}
        position={[12.196, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE026.geometry}
        material={materials["COLOR.003"]}
        position={[12.209, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT075.geometry}
        material={materials["COLOR.003"]}
        position={[-11.972, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE027.geometry}
        material={materials["COLOR.003"]}
        position={[-11.959, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT076.geometry}
        material={materials["COLOR.003"]}
        position={[-53.949, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE028.geometry}
        material={materials["COLOR.003"]}
        position={[-53.936, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT077.geometry}
        material={materials["COLOR.003"]}
        position={[-78.024, 0.016, 103.767]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE029.geometry}
        material={materials["COLOR.003"]}
        position={[-78.01, 0.192, 103.758]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR066.geometry}
        material={materials["COLOR.003"]}
        position={[28.65, -0.017, 147.373]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR067.geometry}
        material={materials["COLOR.003"]}
        position={[28.65, -0.017, 138.784]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR068.geometry}
        material={materials["COLOR.003"]}
        position={[64.202, -0.017, 147.373]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR069.geometry}
        material={materials["COLOR.003"]}
        position={[64.202, -0.017, 138.784]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP004.geometry}
        material={materials["COLOR.003"]}
        position={[-43.005, -0.017, -133.282]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ORANGE_SMALL_TOWER003.geometry}
        material={materials["COLOR.003"]}
        position={[-57.047, 0.287, -154.033]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WHITE_SMALL_TOWER003.geometry}
        material={materials["COLOR.003"]}
        position={[-56.862, -0.017, -133.768]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPORT_CENTER001.geometry}
        material={materials["COLOR.003"]}
        position={[-77.078, -0.017, -151.93]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE044.geometry}
        material={materials["COLOR.003"]}
        position={[160.358, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE045.geometry}
        material={materials["COLOR.003"]}
        position={[160.707, -0.017, 29.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE046.geometry}
        material={materials["COLOR.003"]}
        position={[118.662, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE047.geometry}
        material={materials["COLOR.003"]}
        position={[128.133, -0.017, 29.521]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House005.geometry}
        material={materials["COLOR.003"]}
        position={[120.864, -0.017, -149.575]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House006.geometry}
        material={materials["COLOR.003"]}
        position={[120.864, -0.017, -15.097]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_HOUSE003.geometry}
        material={materials["COLOR.003"]}
        position={[121.241, -0.017, -114.366]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SMALL_HOUSE004.geometry}
        material={materials["COLOR.003"]}
        position={[155.026, -0.017, -112.17]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House007.geometry}
        material={materials["COLOR.003"]}
        position={[157.026, 0.287, -149.136]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House008.geometry}
        material={materials["COLOR.003"]}
        position={[157.026, 0.287, -15.2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE005.geometry}
        material={materials["COLOR.003"]}
        position={[121.829, -0.016, -73.19]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE006.geometry}
        material={materials["COLOR.003"]}
        position={[155.517, -0.016, -73.19]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE007.geometry}
        material={materials["COLOR.003"]}
        position={[121.829, -0.016, 18.881]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_HOUSE008.geometry}
        material={materials["COLOR.003"]}
        position={[155.517, -0.016, 18.881]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE048.geometry}
        material={materials["COLOR.003"]}
        position={[138.907, -0.017, -26.627]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE049.geometry}
        material={materials["COLOR.003"]}
        position={[138.907, -0.017, 29.313]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GREY_BUILDING2007.geometry}
        material={materials["COLOR.003"]}
        position={[134.85, -0.017, 129.573]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRUIT_SHOP005.geometry}
        material={materials["COLOR.003"]}
        position={[120.416, -0.017, 128.512]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL003.geometry}
        material={materials["COLOR.003"]}
        position={[105.935, 0.54, -33.997]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BL_WHEEL002.geometry}
        material={materials["COLOR.003"]}
        position={[-14.036, 0.277, -24.938]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL001.geometry}
        material={materials["COLOR.003"]}
        position={[39.568, 0.574, -22.99]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL007.geometry}
        material={materials["COLOR.003"]}
        position={[37.804, 0.42, -57.64]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL006.geometry}
        material={materials["COLOR.003"]}
        position={[50.249, 0.573, 36.487]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL010.geometry}
        material={materials["COLOR.003"]}
        position={[46.774, 0.411, -119.903]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL008.geometry}
        material={materials["COLOR.003"]}
        position={[-33.216, 0.503, -32.589]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL011.geometry}
        material={materials["COLOR.003"]}
        position={[166.889, 0.418, 120.443]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL014.geometry}
        material={materials["COLOR.003"]}
        position={[51.122, 0.418, 107.055]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL015.geometry}
        material={materials["COLOR.003"]}
        position={[106.172, 0.314, -93.72]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY001.geometry}
        material={materials["COLOR.003"]}
        position={[16.463, 0.102, -121.235]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL007.geometry}
        material={materials["COLOR.003"]}
        position={[7.588, 0.52, -117.214]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL016.geometry}
        material={materials["COLOR.003"]}
        position={[-44.214, 0.411, -117.842]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL008.geometry}
        material={materials["COLOR.003"]}
        position={[105.583, 0.476, 54.525]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL010.geometry}
        material={materials["COLOR.003"]}
        position={[120.194, 0.517, -37.59]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL018.geometry}
        material={materials["COLOR.003"]}
        position={[123.09, 0.343, 94.884]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL012.geometry}
        material={materials["COLOR.003"]}
        position={[-93.404, 0.58, 76.592]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL011.geometry}
        material={materials["COLOR.003"]}
        position={[-60.141, 0.672, 5.13]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL013.geometry}
        material={materials["COLOR.003"]}
        position={[-60.141, 0.672, -2.793]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL019.geometry}
        material={materials["COLOR.003"]}
        position={[111.836, 0.642, -19.79]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY004.geometry}
        material={materials["COLOR.003"]}
        position={[106.87, 0.018, 84.115]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL012.geometry}
        material={materials["COLOR.003"]}
        position={[107.515, 0.525, 85.51]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BL_WHEEL003.geometry}
        material={materials["COLOR.003"]}
        position={[107.515, 0.263, 82.659]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL020.geometry}
        material={materials["COLOR.003"]}
        position={[106.235, 0.364, 82.659]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL014.geometry}
        material={materials["COLOR.003"]}
        position={[106.235, 0.525, 85.51]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body001.geometry}
        material={materials["COLOR.003"]}
        position={[48.492, -0.018, -36.999]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL022.geometry}
        material={materials["COLOR.003"]}
        position={[-135.091, 0.41, -37.272]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL013.geometry}
        material={materials["COLOR.003"]}
        position={[50.103, 0.533, 95.32]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL014.geometry}
        material={materials["COLOR.003"]}
        position={[-65.018, 0.533, 94.948]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL023.geometry}
        material={materials["COLOR.003"]}
        position={[16.116, 0.415, 24.187]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL024.geometry}
        material={materials["COLOR.003"]}
        position={[24.352, 0.51, 20.464]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL015.geometry}
        material={materials["COLOR.003"]}
        position={[68.376, 0.672, 110.4]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT078.geometry}
        material={materials["COLOR.003"]}
        position={[4.624, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT079.geometry}
        material={materials["COLOR.003"]}
        position={[-4.699, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL016.geometry}
        material={materials["COLOR.003"]}
        position={[144.564, 0.457, 58.993]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL016.geometry}
        material={materials["COLOR.003"]}
        position={[148.425, 0.457, 58.993]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BR_WHEEL025.geometry}
        material={materials["COLOR.003"]}
        position={[143.658, 0.343, 75.159]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL017.geometry}
        material={materials["COLOR.003"]}
        position={[148.662, 0.504, 77.834]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FR_WHEEL019.geometry}
        material={materials["COLOR.003"]}
        position={[143.875, 0.52, -93.439]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FL_WHEEL017.geometry}
        material={materials["COLOR.003"]}
        position={[139.099, 0.574, -132.326]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY005.geometry}
        material={materials["COLOR.003"]}
        position={[132.615, 0.102, -94.848]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TENNIS_STADIUM001.geometry}
        material={materials["COLOR.003"]}
        position={[83.415, -0.017, 141.067]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_Shop001.geometry}
        material={materials["COLOR.003"]}
        position={[-54.759, -0.017, -22.798]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Market002.geometry}
        material={materials["COLOR.003"]}
        position={[-81.227, -0.017, -82.631]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR070.geometry}
        material={materials["COLOR.003"]}
        position={[-60.104, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR071.geometry}
        material={materials["COLOR.003"]}
        position={[-47.63, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR072.geometry}
        material={materials["COLOR.003"]}
        position={[-71.939, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TALL_CHAIR073.geometry}
        material={materials["COLOR.003"]}
        position={[-84.362, -0.017, -108.826]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE050.geometry}
        material={materials["COLOR.003"]}
        position={[-87.971, 0.159, -66.036]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT080.geometry}
        material={materials["COLOR.003"]}
        position={[-87.943, -0.017, -66.065]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["COLOR.003"]}
        position={[-55.028, -0.017, -60.893]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_BUILDING001.geometry}
        material={materials["COLOR.003"]}
        position={[78.312, 0.287, 83.581]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE051.geometry}
        material={materials["COLOR.003"]}
        position={[-72.282, 0.159, -66.036]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT081.geometry}
        material={materials["COLOR.003"]}
        position={[-72.254, -0.017, -66.065]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE052.geometry}
        material={materials["COLOR.003"]}
        position={[-87.971, 0.159, -99.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT082.geometry}
        material={materials["COLOR.003"]}
        position={[-87.943, -0.017, -99.329]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAL_TREE053.geometry}
        material={materials["COLOR.003"]}
        position={[-72.282, 0.159, -99.3]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT083.geometry}
        material={materials["COLOR.003"]}
        position={[-72.254, -0.017, -99.329]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Game_Shop001.geometry}
        material={materials["COLOR.003"]}
        position={[-80.951, -0.017, -133.392]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["COLOR.003"]}
        position={[-11.798, -0.035, 32.555]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["COLOR.003"]}
        position={[31.466, 0.285, 6.429]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT084.geometry}
        material={materials["COLOR.003"]}
        position={[4.624, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT085.geometry}
        material={materials["COLOR.003"]}
        position={[-4.699, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT086.geometry}
        material={materials["COLOR.003"]}
        position={[4.624, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT087.geometry}
        material={materials["COLOR.003"]}
        position={[-4.699, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT088.geometry}
        material={materials["COLOR.003"]}
        position={[4.624, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT089.geometry}
        material={materials["COLOR.003"]}
        position={[-4.699, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT090.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT091.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT092.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT093.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT094.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT095.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT096.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT097.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT098.geometry}
        material={materials["COLOR.003"]}
        position={[29.663, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT099.geometry}
        material={materials["COLOR.003"]}
        position={[17.305, -0.118, 58.781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT100.geometry}
        material={materials["COLOR.003"]}
        position={[29.663, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT101.geometry}
        material={materials["COLOR.003"]}
        position={[17.305, -0.118, 65.175]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT102.geometry}
        material={materials["COLOR.003"]}
        position={[29.663, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT103.geometry}
        material={materials["COLOR.003"]}
        position={[17.305, -0.118, 52.464]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT104.geometry}
        material={materials["COLOR.003"]}
        position={[29.663, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT105.geometry}
        material={materials["COLOR.003"]}
        position={[17.305, -0.118, 45.853]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT106.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT107.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT108.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT109.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT110.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT111.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT112.geometry}
        material={materials["COLOR.003"]}
        position={[-16.669, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT113.geometry}
        material={materials["COLOR.003"]}
        position={[-29.027, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT114.geometry}
        material={materials["COLOR.003"]}
        position={[29.636, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT115.geometry}
        material={materials["COLOR.003"]}
        position={[17.279, -0.118, 84.584]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT116.geometry}
        material={materials["COLOR.003"]}
        position={[29.636, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT117.geometry}
        material={materials["COLOR.003"]}
        position={[17.279, -0.118, 90.977]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT118.geometry}
        material={materials["COLOR.003"]}
        position={[29.636, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT119.geometry}
        material={materials["COLOR.003"]}
        position={[17.279, -0.118, 78.266]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT120.geometry}
        material={materials["COLOR.003"]}
        position={[29.636, -0.118, 71.656]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TREE_POT121.geometry}
        material={materials["COLOR.003"]}
        position={[17.279, -0.118, 71.656]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./models/city_c3.glb");
