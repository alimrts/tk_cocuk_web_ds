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
} from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import mySvgImage from "./cursor_360.svg";

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

const Orbit = ({ radius, thickness, rotation, children }) => {
  const orbitRef = useRef();

  return (
    <group ref={orbitRef} rotation={rotation}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringBufferGeometry
          args={[radius - thickness / 2, radius + thickness / 2, 128]}
        />
        <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
      </mesh>
      {children}
    </group>
  );
};

const Orbits = ({ props }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const group = useRef();
  const groupRef = useRef();

  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      40
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    // Calculate the rotation angle based on the clock
    const rotationAngle = clock.elapsedTime;

    // Update the rotation of the group
    groupRef.current.rotation.y = rotationAngle / 8;
  });

  const glowColorForFrontlight = 0x22ff88;
  const redGlowColor = 0xff4400;
  const glowIntensity = 8; // Adjust as needed

  const lightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "yellow",
    emissive: redGlowColor,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.08,
  });

  const orbitMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "green",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 10,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="mercury_BezierCircle001_34" scale={9.695}>
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="venus_BezierCircle001_35"
                rotation={[0, 0.028, 0]}
                scale={12.235}
              >
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="erath_BezierCircle001_36" scale={16.115}>
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={orbitMaterial}
                />
              </group>
              <group name="mars_BezierCircle001_37" scale={20.451}>
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="jupiter_BezierCircle001_38" scale={28.775}>
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="saturn_BezierCircle001_39" scale={36.61}>
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="uranus_BezierCircle001_40" scale={44.26}>
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="neptune_BezierCircle001_41" scale={49.927}>
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="pluto_BezierCircle001_42" scale={54.22}>
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.Material}
                />
              </group>

              <group ref={groupRef} name="sun_53" scale={5.997}>
                <mesh
                  ref={planetRef}
                  geometry={nodes.Object_56.geometry}
                  material={materials.material}
                  onClick={handlePointerClick}
                  onPointerOver={handlePointerOver1}
                  onPointerOut={handlePointerOut1}
                />
                <mesh
                  geometry={nodes.Object_56.geometry}
                  material={lightMaterial}
                />
                {isClicked ? (
                  <Html>
                    <div
                      className="glassFrame"
                      style={{
                        position: "relative",
                        top: -200,
                        left: -125,
                        fontSize: "14pt",
                        cursor: "pointer",
                        color: "lightGreen",
                        padding: "4px",
                      }}
                    >
                      Güneş
                      <div
                        class="glassFrameContent"
                        style={{
                          fontSize: "12pt",
                          width: "240px",
                        }}
                      >
                        Çap: 1.4 milyon kilometre. <br />
                        <br />
                        Güneş sisteminin merkezinde bulunan devasa bir
                        yıldızdır.
                        <br />
                        <br />
                        Büyük çoğunluğu hidrojen ve helyumdan oluşur ve nükleer
                        fusion reaksiyonları yoluyla enerji üretir.
                      </div>
                    </div>
                    <button
                      className="closeButton"
                      onClick={handleCloseButtonClick}
                      style={{ top: "-198px", right: "-138px" }}
                    />
                  </Html>
                ) : (
                  <Html>
                    <div
                      className="glassFrame"
                      style={{
                        position: "relative",
                        top: -100,
                        left: -34,
                        cursor: "pointer",
                        fontSize: "12pt",
                      }}
                      onClick={handlePointerClick}
                    >
                      <div
                        class="glassFrameContent"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Güneş
                      </div>
                    </div>
                  </Html>
                )}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const PlanetMercury = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.002,
  });

  const handlePointerClick = () => {
    // Toggle the click
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_5"
          scale={planetScale * 3}
          geometry={nodes.Object_5.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_5"
          scale={planetScale}
          geometry={nodes.Object_5.geometry}
          material={materials.mercury}
        />

        <mesh
          name="Object_5"
          scale={planetScale * 1.1}
          geometry={nodes.Object_5.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Merkür
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Güneş sisteminin en iç gezegenidir.
                  <br />
                  <br />
                  Yüzeyi kayalarla kaplıdır ve oldukça yüksek sıcaklıklara
                  sahiptir.
                  <br />
                  <br />
                  Güneş etrafındaki dönüşü oldukça yavaştır.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Merkür
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 4.880 kilometre. <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 57.9 milyon kilometre. <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 88 gün.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}{" "}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -34,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Merkür
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetVenus = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_8"
          scale={planetScale * 1.5}
          geometry={nodes.Object_8.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_8"
          scale={planetScale}
          geometry={nodes.Object_8.geometry}
          material={materials.venus}
        />

        <mesh
          name="Object_8"
          scale={planetScale * 1.1}
          geometry={nodes.Object_8.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Venüs
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Merkür'den biraz daha büyük, kayalık bir gezegendir.
                  <br />
                  <br />
                  Güneş sistemindeki en kalın atmosfere sahip gezegenlerden
                  biridir.
                  <br />
                  <br />
                  Yüzey sıcaklıkları çok yüksektir ve yoğun asit bulutlarına
                  sahiptir.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Venüs
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 12.104 kilometre. <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 108.2 milyon kilometre. <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 225 gün.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -75,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Venüs
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetEarth = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.02);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_11"
          scale={planetScale * 1.5}
          geometry={nodes.Object_11.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_11"
          scale={planetScale}
          geometry={nodes.Object_11.geometry}
          material={materials.earth}
        />

        <mesh
          name="Object_11"
          scale={planetScale * 1.1}
          geometry={nodes.Object_11.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Dünya
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Evimiz olan Dünya, sıvı su bulunduran tek gezegen olarak
                  bilinir.
                  <br />
                  <br />
                  Atmosferi, yaşam için gerekli olan oksijen ve diğer gazları
                  içerir.
                  <br />
                  <br />
                  Karasal ve sıvı yüzeyleri, çeşitli iklim ve ekosistemlere ev
                  sahipliği yapar.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Dünya
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 12.742 kilometre. <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 149.6 milyon kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: 365.25 gün.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}{" "}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Dünya
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetMars = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.02);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_14"
          scale={planetScale * 1.5}
          geometry={nodes.Object_14.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_14"
          scale={planetScale}
          geometry={nodes.Object_14.geometry}
          material={materials.mars}
        />

        <mesh
          name="Object_14"
          scale={planetScale * 1.1}
          geometry={nodes.Object_14.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Mars
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Kızıl gezegen olarak da bilinen Mars, ince bir atmosfere ve
                  soğuk bir yüzeye sahiptir.
                  <br />
                  <br />
                  Geçmişte suyun varlığını gösteren izler bulunmuştur.
                  <br />
                  <br />
                  Mars, potansiyel olarak insan kolonileri için bir hedef
                  olabilir.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Mars
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 6.779 kilometre <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 227.9 milyon kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 687 gün.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -65,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Mars
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetJupiter = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_17"
          scale={planetScale * 1.5}
          geometry={nodes.Object_17.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_17"
          scale={planetScale}
          geometry={nodes.Object_17.geometry}
          material={materials.jupiter}
        />

        <mesh
          name="Object_17"
          scale={planetScale * 1.1}
          geometry={nodes.Object_17.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Jüpiter
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Güneş sisteminin en büyük gezegenidir.
                  <br />
                  <br />
                  Yoğun bir atmosfere ve devasa bir manyetik alanına sahiptir.
                  <br />
                  <br />
                  Büyük kısmı hidrojen ve helyumdan oluşur ve çeşitli büyük
                  rüzgarlı sistemlere sahiptir.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Jüpiter
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 139.820 kilometre.
                  <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 778.3 milyon kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 11.9 yıl.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Jüpiter
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetSaturn = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };
  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_20"
          scale={planetScale * 1.5}
          geometry={nodes.Object_20.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object20"
          scale={planetScale}
          geometry={nodes.Object_20.geometry}
          material={materials.saturn}
        />

        <mesh
          name="Object_20"
          scale={planetScale * 1.1}
          geometry={nodes.Object_20.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />
        <mesh
          name="Object_22"
          scale={planetScale * 1.65}
          geometry={nodes.Object_22.geometry}
          material={materials.saturn_ring}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Satürn
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Büyük ve halkalı bir gezegen olan Satürn, Jüpiter'den biraz
                  daha küçüktür.
                  <br />
                  <br />
                  Eşsiz halka sistemleri ile tanınır.
                  <br />
                  <br />
                  Halkalar, buz ve kaya parçacıklarından oluşmuştur.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Satürn
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 116.460 kilometre.
                  <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 1.4 milyar kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 29.5 yıl.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Satürn
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetUranus = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.4
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_25"
          scale={planetScale * 2}
          geometry={nodes.Object_25.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_25"
          scale={planetScale}
          geometry={nodes.Object_25.geometry}
          material={materials.uranus}
        />

        <mesh
          name="Object_25"
          scale={planetScale * 1.1}
          geometry={nodes.Object_25.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Uranüs
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Yatayda eğik bir eksene sahiptir.
                  <br />
                  <br />
                  Atmosferi metan ve hidrojen içerir.
                  <br />
                  <br />
                  Güneş sistemindeki diğer gezegenlerden farklı olarak, Uranüs
                  yan yatar bir eksende döner.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Uranüs
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 50.724 kilometre.
                  <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 2.9 milyar kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 84 yıl.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Uranüs
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetNeptune = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.25
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_28"
          scale={planetScale * 2}
          geometry={nodes.Object_28.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_28"
          scale={planetScale}
          geometry={nodes.Object_28.geometry}
          material={materials.neptune}
        />

        <mesh
          name="Object_28"
          scale={planetScale * 1.1}
          geometry={nodes.Object_28.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Neptün
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Güneş sisteminin en uzak dev gezegenidir.
                  <br />
                  <br />
                  Büyük bir atmosfere ve hızlı rüzgarlara sahiptir.
                  <br />
                  <br />
                  Büyük olasılıkla gaz devi bir iç çekirdek ile çevrili yoğun
                  bir atmosfere sahiptir.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Neptün
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 49.244 kilometre.
                  <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 4.5 milyar kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 165 yıl
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Neptün
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetPluto = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.3
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_31"
          scale={planetScale * 3}
          geometry={nodes.Object_31.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_31"
          scale={planetScale}
          geometry={nodes.Object_31.geometry}
          material={materials.pluto}
        />

        <mesh
          name="Object_31"
          scale={planetScale * 1.1}
          geometry={nodes.Object_31.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Plüto
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  2006 yılına kadar gezegen olarak kabul ediliyordu, ancak
                  Uluslararası Astronomi Birliği tarafından cüce gezegen olarak
                  sınıflandırılmıştır.
                  <br />
                  <br />
                  Kuiper Kuşağı'nda yer alır.
                  <br />
                  <br />
                  Atmosferi, az miktarda azot, metan ve karbon dioksit içerir.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Geri
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Plüto
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Çap: 2.377 kilometre.
                  <br />
                  <br />
                  Güneş'e uzaklık: <br />
                  Yaklaşık 5.9 milyar kilometre.
                  <br />
                  <br />
                  Bir tam yılı tamamlama süresi: Yaklaşık 248 yıl.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Detay
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Plüto
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const SolarSystem = () => {
  const orbitRadiusOfMercury = 9.7;
  const orbitRadiusOfVenus = 12.24;
  const orbitRadiusOfEarth = 16.12;
  const orbitRadiusOfMars = 20.45;
  const orbitRadiusOfJupiter = 28.8;
  const orbitRadiusOfSaturn = 36.62;
  const orbitRadiusOfUranus = 44.28;
  const orbitRadiusOfNeptune = 49.91;
  const orbitRadiusOfPluto = 54.21;

  const [isVisible, setIsVisible] = useState(true);

  const [zIndexC, setZIndexC] = useState(99);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setZIndexC(-1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );
  const setIsGunesGateTriggered = useZustandStore(
    (state) => state.setIsGunesGateTriggered
  );
  const setIsGeriClicked = useZustandStore((state) => state.setIsGeriClicked);

  const handleGunesGateTrigger = () => {
    setIsGunesGateTriggered(false);
    setIsGeriClicked(true);
  };

  return (
    <>
      <div
        className={`fixedImageContainer ${isVisible ? "visible" : ""}`}
        style={{ zIndex: zIndexC, marginBottom: "25rem" }}
      >
        <img className="fixedImage" src={mySvgImage} alt="" />
      </div>

      <button
        className="button i-button"
        onClick={() => {
          handleGunesGateTrigger();
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
      >
        Fare sol tuşu ile döndürebilirsiniz.
        <br />
        <br />
        Fare sağ tuşu ile hareket edebilirsiniz.
        <br />
        <br />
        Fare orta tuşu ile yakınlaşabilirsiniz.
        <br />
        <br />
        ESC ile çıkış yapabilirsiniz.
      </div>

      <Canvas>
        <Suspense fallback={<LoaderBase />}>
          {/* <Environment background={true} files="/solar_system/old_depot_2k.hdr" /> */}
          <Environment
            background={true}
            files={[
              "/solar_system/2K_Resolution/Left_2K_TEX.png",
              "/solar_system/2K_Resolution/Right_2K_TEX.png",
              "/solar_system/2K_Resolution/Up_2K_TEX.png",
              "/solar_system/2K_Resolution/Down_2K_TEX.png",
              "/solar_system/2K_Resolution/Front_2K_TEX.png",
              "/solar_system/2K_Resolution/Back_2K_TEX.png",
            ]}
          />
          <ambientLight intensity={0.1} />
          <pointLight intensity={2} position={[0, 0, 0]} />

          <Orbit
            radius={orbitRadiusOfMercury}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetMercury
              planetScale={0.345}
              orbitRadius={orbitRadiusOfMercury}
              speed={0.6 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfVenus}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetVenus
              planetScale={0.95}
              orbitRadius={orbitRadiusOfVenus}
              speed={0.4 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfEarth}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetEarth
              planetScale={1}
              orbitRadius={orbitRadiusOfEarth}
              speed={0.65 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfMars}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetMars
              planetScale={0.575}
              orbitRadius={orbitRadiusOfMars}
              speed={0.5 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfJupiter}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetJupiter
              planetScale={2.8}
              orbitRadius={orbitRadiusOfJupiter}
              speed={0.3 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfSaturn}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetSaturn
              planetScale={2.15}
              orbitRadius={orbitRadiusOfSaturn}
              speed={0.22 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfUranus}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetUranus
              planetScale={0.8}
              orbitRadius={orbitRadiusOfUranus}
              speed={0.16 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfNeptune}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetNeptune
              planetScale={1.2}
              orbitRadius={orbitRadiusOfNeptune}
              speed={0.11 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfPluto}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetPluto
              planetScale={0.22}
              orbitRadius={orbitRadiusOfPluto}
              speed={0.08 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbits />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            makeDefault
            rotateSpeed={0.6}
            maxPolarAngle={1.4}
            minPolarAngle={0.2}
            minDistance={20}
            maxDistance={100}
            target={[0, 0, 0]}
          />
          <PerspectiveCamera makeDefault position={[0, 80, 130]} fov={60} />

          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur intensity={0.38} luminanceThreshold={0.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default SolarSystem;
