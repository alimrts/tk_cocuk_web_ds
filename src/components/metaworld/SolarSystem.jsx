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
                        Güneş, güneş sisteminin merkezindeki yıldızdır. <br />
                        <br />
                        Güneş'in yerçekimi güneş sistemini bir arada tutar.
                        <br />
                        <br />
                        Güneş sisteminde; Merkür, Venüs, Dünya, Mars, Jüpiter,
                        Satürn, Uranüs ve Neptün gezegenleri; yüzlerce uyduyla
                        birlikte cüce gezegenler Plüton, Ceres, Makemake, Haumea
                        ve Eris; ve milyonlarca asteroit, kuyruklu yıldız ve
                        meteoroid vardır.
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
                  Merkür'de bir gün, yaklaşık 59 Dünya günü sürer.
                  <br />
                  <br />
                  Merkür'de bir yıl, 88 Dünya günü sürer.
                  <br />
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
                  Güneş sistemimizdeki en küçük ve Güneş’e en yakın gezegendir.{" "}
                  <br />
                  <br />
                  Yüzeyi kayalık ve kraterlerle kaplıdır. <br />
                  <br />
                  Merkür'ün atmosferi ve uydusu yoktur.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
      planetRef.current.rotation.y -= rotationSpeed;
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
                  Dünya'nın ve diğer gezegenlerin çoğunun tersi yönde
                  dönmektedir. Ters yönde dönmesinden dolayı Güneş batıdan doğar
                  ve doğudan batar.
                  <br />
                  <br />
                  Venüs’te bir gün, yaklaşık 243 Dünya günü sürer.
                  <br />
                  <br />
                  Venüs’te bir yıl, 225 Dünya günü sürer. Bu, Venüs'te hala aynı
                  gün olmasına rağmen, Güneş'in Venüs'te her yıl iki kez doğduğu
                  anlamına gelir.
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
                  Güneş’e en yakın gezegen Merkür olmasına rağmen, Venüs en
                  sıcak gezegendir. Bunun nedeni yoğun sera gazları içeren kalın
                  bir atmosferinin olmasıdır. Bu gazlar, Güneş’ten gelen
                  sıcaklığı hapseder ve Venüs'ü sıcak yapar. <br />
                  <br />
                  Venüs’ün yüzeyinde dağlar ve volkanlar bulunur. <br />
                  <br />
                  Venüs'ün uydusu yoktur.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  Dünya'nın uydusu Ay'dır.
                  <br />
                  <br />
                  Dünya’da bir gün, 24 saatten biraz daha kısa (23,9 saat)
                  sürer.
                  <br />
                  <br />
                  Dünya’da bir yıl, 365,25 gün sürer. Bu fazladan 0,25, her dört
                  yılda bir takvimimize bir gün olarak eklenir. Buna artık gün
                  (artık yılda) denir.
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
                  İçinde yaşadığımız gezegendir. <br />
                  <br />
                  Karasal ve kayalık bir gezegendir. Katı bir kabuk, dağlar,
                  vadiler, kanyonlar, ovalar, volkanlar ve birçok yer şeklini
                  içeren bir yüzeye sahiptir. %70'ini okyanuslar ve denizler
                  oluşturur.
                  <br />
                  <br />
                  Atmosfer çoğunlukla nitrojenden oluşur ve nefes alabilmemiz
                  için bol miktarda oksijen içerir.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  Mars, geçmişte veya gelecekte yaşam olup olmayacağını öğrenmek
                  için etrafında dolaşılıp, fotoğraf çekmek ve ölçümler yapmak
                  için keşif aracı gönderilen tek gezegendir.
                  <br />
                  <br />
                  Mars’ta bir gün, yaklaşık 1 Dünya günü (24,6 saat) sürer.
                  <br />
                  <br />
                  Mars’ta bir yıl, 687 Dünya günü sürer.
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
                  Toprağında bulunan demirden dolayı kırmızı gözükür ve bu
                  nedenle “Kırmızı Gezegen” de denir. <br />
                  <br />
                  Soğuk bir çöl gezegenidir. Dünya gibi Mars’ın da mevsimleri,
                  kutup buzulları, volkanları, kanyonları ve hava olayları
                  vardır.
                  <br />
                  <br />
                  Atmosferi çok incedir.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  “Büyük Kırmızı Nokta” olarak adlandırılan yerde yüzlerce
                  yıldır devam eden fırtınalar vardır.
                  <br />
                  <br />
                  Jüpiter’in halkaları vardır, fakat gözle görülemeyecek kadar
                  solgundur.
                  <br />
                  <br />
                  Jüpiter'de bir gün, 10 saat sürer. Jüpiter'de bir yıl yaklaşık
                  11,8 Dünya yılı sürer.
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
                  Güneş Sistemimizdeki en büyük gezegendir.
                  <br />
                  <br />
                  Jüpiter bir gaz devidir, bu yüzden katı bir yüzeye sahip
                  değildir.
                  <br />
                  <br />
                  Çok kalın bir atmosferi vardır. Atmosferi dönen bulut
                  çizgileri ile kaplıdır.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  Satürn bir gaz devidir. Kalın bir atmosferi vardır.
                  <br />
                  <br />
                  Satürn'de bir gün, 10,7 saat sürer.
                  <br />
                  <br />
                  Satürn'de bir yıl, 29 Dünya yılı sürer.
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
                  Güneş Sistemimizdeki en güzel halkalara sahip gezegendir.
                  <br />
                  <br />
                  Satürn aralarında boşluklar olan 7 ana halkaya sahiptir.
                  <br />
                  <br />
                  Bu halkalar buz ve kaya parçalarından meydana gelir.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  Uranüs’ün atmosferi büyük miktarda metan içerdiği için
                  mavi-yeşil renktedir.
                  <br />
                  <br />
                  Uranüs 13 halkadan oluşan bir setle çevrilidir. İç halkaları
                  dar ve karanlıktır. Dış halkaları ise parlak renklidir ve
                  görülmesi daha kolaydır.
                  <br />
                  <br />
                  Uranüs'te bir gün, 17 saatten biraz fazla sürer. Uranüs'te bir
                  yıl, 84 Dünya yılı sürer.
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
                  Uranüs yörünge düzleminden neredeyse 90 derecelik bir açıyla
                  döner. Diğer gezegenlere oranla eksen eğikliği daha fazladır.
                  <br />
                  <br />
                  Uranüs, Venüs gibi, çoğu gezegenin tersine, doğudan batıya
                  doğru döner.
                  <br />
                  <br />
                  Uranüs bir buz devidir, çok soğuk ve rüzgarlıdır.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                  Neptün’ün 6 halkası vardır, fakat bunları görmesi çok zordur.
                  <br />
                  <br />
                  Neptün'de bir gün, 16 saat sürer.
                  <br />
                  <br />
                  Neptün'de bir yıl, 165 Dünya yılı sürer.
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
                  Güneş sistemimizdeki gezegenlerin sonuncusudur. Güneş'e
                  Dünya'nın 30 katından daha uzaktır.
                  <br />
                  <br />
                  Karanlık, soğuk ve çok rüzgarlı bir gezegendir.
                  <br />
                  <br />
                  Neptün bir buz devidir ve yapısal olarak gaz devine benzer.
                  Kalın ve rüzgarlı bir atmosferi vardır. Neptün’e mavi rengini
                  veren metandır.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                Plüton
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Plüton esas olarak nitrojen buzu ve kayadan oluşur.
                  <br />
                  <br />
                  Yüzeyi dağlar, vadiler ve kraterlerle kaplıdır. Yüzeyi hem
                  parlaklık hem de renk bakımından farklılık gösterir.
                  <br />
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
                Plüton
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Plüton 2006 yılına kadar gezegen olarak sınıflandırılmaktaydı.
                  <br />
                  <br />
                  Plüton artık bir gezegen olarak değil, cüce gezegenler
                  arasında en büyüğü olmasına rağmen, boyutundan dolayı cüce
                  gezegen olarak kabul edilmektedir.
                  <br />
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  İleri
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
                Plüton
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

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );
  }, []);

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
  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleGunesGateTrigger = () => {
    setIsGunesGateTriggered(false);
    setIsGeriClickedInSolarSystem(true);
    setIsGeriClickedInTuik(false);

    setIsBilgiIcTriggered(false);
    setIsBilgiGateTriggered(true);
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

      {isMobile ? (
        <div></div>
      ) : (
        <div
          style={{
            position: "absolute",
            marginTop: "78vh",
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
          Fare orta tuşu ile yakınlaşabilirsiniz.
          <br />
          <br />
          ESC ile çıkış yapabilirsiniz.
        </div>
      )}

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
