import "../App.css";

import { Canvas, useThree } from "@react-three/fiber";

import { Suspense } from "react";
import { useRef, useState, useEffect } from "react";
import useZustandStore from "../zustandStore";
import { Physics, useBox } from "@react-three/cannon";

import Game from "../components/metaworld/Game";

import textureImage3 from "../img/game_icon_ulkeler.png";
import textureImage2 from "../img/game_icon_uzay_macerasi.png";
import textureImage from "../img/g5.png";
import textureImage4 from "../img/game_icon_super_araba.png";

import * as THREE from "three";

import { Color } from "three";

import {
  Sky,
  Stats,
  useGLTF,
  useAnimations,
  Environment,
  useProgress,
  Html,
  Text,
  OrbitControls,
} from "@react-three/drei";

import Lights from "./metaverse/Lights";

import { DemoScene } from "./metaverse/DemoScene";
import { CityScene1 } from "./metaverse/CityScene1";
import Interacty from "./metaverse/Interacty";
import Player from "./metaverse/Player";

import UzayMacerasi from "./metaverse/UzayMacerasi";
import UlkelerBayrak from "./metaverse/UlkelerBayrak";
import ArabaYarisi from "./metaverse/ArabaYarisi";
import SolarSystem from "./metaworld/SolarSystem";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 30, color: "white" }}>
        {Math.round(progress)} % yükleniyor
      </div>
    </Html>
  );
}

// function ObstacleTriggerGunes({ args, position, ...props }) {
//   const [ref] = useBox(
//     () => ({ args, type: "Static", mass: 10, position: position, ...props }),
//     useRef()
//   );

//   return (
//     <mesh ref={ref} castShadow receiveShadow>
//       {/* on/off collision boxes */}
//       <boxGeometry args={[...args]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

function ObstacleTriggerGunes({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: true,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* on/off collision boxes */}
      <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" />
    </mesh>
  );
}

// function BoxTrigger({ args, onCollide, position }) {
//   const [ref] = useBox(() => ({ args, isTrigger: true, onCollide, position }), useRef());
//   return (
//     <mesh position={position} ref={ref}>
//       <boxGeometry args={args} />
//       <meshStandardMaterial wireframe color="green" />
//     </mesh>
//   );
// }

function Metaverse(props) {
  const [cursorStyle, setCursorStyle] = useState("auto");

  const defaultColor = new Color("#CCffff");
  const hoverColor = new Color("#ffffff");

  console.log("state is:", props.cinsiyet);
  const cinsiyet = props.cinsiyet;
  // console.log("gelen cinsiyet metaverse: ", cinsiyet);
  const [clickedTofirst, setClickedToFirst] = useState(false);
  const [clickedTosecond, setClickedToSecond] = useState(false);
  const [clickedToThird, setClickedToThird] = useState(false);
  const [clickedToFourth, setClickedToFourth] = useState(false);

  const [hoveredFirst, setHoverFirst] = useState(false);
  const [hoveredSecond, setHoverSecond] = useState(false);
  const [hoveredThird, setHoverThird] = useState(false);
  const [hoveredFourth, setHoverFourth] = useState(false);

  const testing = false;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const texture2 = textureLoader.load(textureImage2);
  const texture3 = textureLoader.load(textureImage3);
  const texture4 = textureLoader.load(textureImage4);

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );

  useEffect(() => {
    // ComponentDidMount - Set up any subscriptions or initializations here

    // ComponentWillUnmount - Cleanup and reset isGunesGateTriggered to false
    return () => {
      useZustandStore.setState({ isGunesGateTriggered: false });
      useZustandStore.setState({ isGeriClicked: false });
    };
  }, []);

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    // setIsClicked((prevIsClicked) => !prevIsClicked);
    // // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    // const newPosition = new THREE.Vector3(
    //   planetRef.current.position.x,
    //   planetRef.current.position.y + 10,
    //   40
    // );
    // camera.position.copy(newPosition);
    // camera.lookAt(planetRef.current.position);
  };

  function closeYaris() {
    setClickedToFirst(false);
    setClickedToFourth(false);
  }

  return (
    <>
      {clickedTofirst && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <UzayMacerasi closeTheGame={closeYaris} />
          </>
        </div>
      )}
      {clickedTosecond && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <Interacty />

            <button
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
                zIndex: "1",
                cursor: "pointer",
              }}
              onClick={(event) => setClickedToSecond(false)}
            >
              X
            </button>
            <button
              style={{
                position: "absolute",
                bottom: "2vh",
                marginLeft: "-2vh",
                width: "100%",
                height: "50px",
                cursor: "pointer",
                backgroundColor: "#ffd9b3",
              }}
            >
              Kartları çevirerek aynı olan kartları bul.
            </button>
          </>
        </div>
      )}
      {clickedToThird && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <UlkelerBayrak />

            <button
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
                zIndex: "1",
                cursor: "pointer",
              }}
              onClick={(event) => setClickedToThird(false)}
            >
              X
            </button>
          </>
        </div>
      )}
      {clickedToFourth && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <ArabaYarisi closeTheGame={closeYaris} />
          </>
        </div>
      )}
      <style>{`
        .canvas-container {
          cursor: ${cursorStyle};
        }
      `}</style>

      {isGunesGateTriggered ? (
        // Render content when isGunesGateTriggered is true

        <SolarSystem />
      ) : (
        <div className="canvas-container">
          <div
            style={{
              position: "absolute",
              marginTop: "70vh",
              marginLeft: "10vh",
              fontSize: "24px",
              color: "lightblue",
              zIndex: 1,
              textAlign: "center",
              userSelect: "none",
            }}
          >
            W<br />A - S - D
            <br />
            veya Ok tuşları <br />
            ile hareket ettirebilirsiniz.
            <br />
            ESC ile çıkış yapabilirsiniz.
          </div>
          {
            <Canvas
              // shadows
              camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, 0] }}
            >
              <Suspense fallback={<Loader />}>
                {testing ? <Stats /> : null}
                {testing ? <axesHelper args={[2]} /> : null}
                {testing ? <gridHelper args={[10, 10]} /> : null}
                <Environment background={true} files={"/env/CasualDay2K.hdr"} />

                {/*for large view <OrbitControls
                  enableZoom={true}
                  makeDefault
                  rotateSpeed={0.6}
                  maxPolarAngle={1.4}
                  minPolarAngle={0.2}
                  minDistance={80}
                  maxDistance={250}
                  target={[0, 15, 0]}
                /> */}

                {/* <Lights /> */}
                <ambientLight intensity={0.4} />
                <pointLight
                  color="lightyellow"
                  intensity={0.55}
                  position={[150, 5, 50]}
                />
                <spotLight
                  position={[-2.5, 5, 5]}
                  angle={Math.PI / 3}
                  penumbra={0.5}
                  castShadow
                  shadow-mapSize-height={2048}
                  shadow-mapSize-width={2048}
                />

                <Physics>
                  {/* <Sky
                          distance={450000}
                          sunPosition={[5, 1, 8]}
                          inclination={0}
                          azimuth={0.25}
                          {...props}
                        /> */}
                  <Game cinsiyet={cinsiyet} />
                  {/* <ObstacleTriggerGunes
                          position={[0.5, 0, 65.8]}
                          args={[4.6, 4, 4.6]}
                          rotation={[0, 1.6, 0]}
                          material={"ground"}
                          onCollide={(e) => {
                            console.log("Collision event on BoxTrigger", e);
                            // setbg('#fe4365');
                          }}
                        /> */}
                </Physics>

                <Text
                  scale={[0.25, 0.25, 0.25]}
                  position={[0.5, 3.8, -7]}
                  color="white" // default
                  anchorX="center" // default
                  anchorY="middle" // default
                >
                  Oyunlar
                </Text>

                <DemoScene
                  position={[0.5, 0.15, 3]}
                  rotation={[0, 3.1, 0]}
                  scale={[1.2, 1.2, 1.2]}
                />
                {/* <CityScene1
                        position={[0.5, -0.1, 3]}
                        // rotation={[0, 3.1, 0]}
                        scale={[1.2, 1.2, 1.2]}
                      /> */}

                <mesh
                  position={[-0.6, 3.1, -7]}
                  {...props}
                  visible={true}
                  scale={hoveredFirst ? 1.2 : 1}
                  onClick={(event) => setClickedToFirst(!clickedTofirst)}
                  onPointerOver={(event) => {
                    setHoverFirst(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverFirst(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    // color={hoveredFirst ? "#B4DAD9" : "#CCEBEA"}
                    color={hoveredFirst ? hoverColor : defaultColor}
                    map={texture2} // Replace with the path to your PNG image
                    transparent
                    alphaTest={0.5} // Adjust as needed
                    side={THREE.DoubleSide}
                  />
                </mesh>
                {/* /// */}
                <mesh
                  position={[0.5, 2, -7]}
                  {...props}
                  visible={true}
                  // scale={clickedTosecond ? 1.5 : 1}
                  scale={hoveredSecond ? 1.2 : 1}
                  onClick={(event) => setClickedToSecond(!clickedTosecond)}
                  onPointerOver={(event) => {
                    setHoverSecond(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverSecond(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture}
                    color={hoveredSecond ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5} // Adjust as needed
                    side={THREE.DoubleSide}
                  />
                </mesh>

                <mesh
                  position={[0.5, 3.1, -7]}
                  {...props}
                  visible={true}
                  scale={hoveredThird ? 1.2 : 1}
                  onClick={(event) => setClickedToThird(!clickedToThird)}
                  onPointerOver={(event) => {
                    setHoverThird(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverThird(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture3}
                    color={hoveredThird ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5} // Adjust as needed
                    side={THREE.DoubleSide}
                  />
                </mesh>

                <mesh
                  position={[1.6, 3.1, -7]}
                  {...props}
                  visible={true}
                  scale={hoveredFourth ? 1.2 : 1}
                  onClick={(event) => setClickedToFourth(!clickedToFourth)}
                  onPointerOver={(event) => {
                    setHoverFourth(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverFourth(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture4}
                    color={hoveredFourth ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5} // Adjust as needed
                    side={THREE.DoubleSide}
                  />
                </mesh>

                {/* <Player cinsiyet={cinsiyet} /> */}
              </Suspense>
            </Canvas>
          }
        </div>
      )}
    </>
  );
}

export default Metaverse;
