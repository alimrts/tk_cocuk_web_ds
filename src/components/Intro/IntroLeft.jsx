import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import ModelChar from "./ModelChar";
import ModelCharEge from "./ModelCharEge";
import { Suspense } from "react";
import "./Intro.css";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: "12pt",
          color: "black",
        }}
      >
        {Math.round(progress)} % yükleniyor
      </div>
    </Html>
  );
}

const IntroLeft = (props) => {
  const isMale = props.cinsiyet === "1";

  // -- set -/+ ortanca
  let boyMessage = "";
  let unsignedBoy =
    typeof props?.boyOrtancaDeger === "number"
      ? Math.abs(Number(props?.boyOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.boyOrtancaDeger === "number") {
    if (props?.boyOrtancaDeger < 0) {
      boyMessage = "altında.";
    } else {
      boyMessage = "üstünde.";
    }
  }

  let kiloMessage = "";
  let unsignedKilo =
    typeof props?.kiloOrtancaDeger === "number"
      ? Math.abs(Number(props?.kiloOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.kiloOrtancaDeger === "number") {
    if (props?.kiloOrtancaDeger < 0) {
      kiloMessage = "altında.";
    } else {
      kiloMessage = "üstünde.";
    }
  }

  return (
    <>
      <div
        className="i-left-canvas"
        style={{
          zIndex: "1",
          marginLeft: "20rem",
          width: "160px",
          height: "355px",
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 10.15], fov: 15 }}
          style={{
            cursor: "pointer",
            // boxShadow:
            //   "0 4px 8px 0 rgba(200, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <ambientLight intensity={1.25} />

          <directionalLight intensity={0.4} />
          <Suspense fallback={<Loader />}>
            {isMale ? (
              <ModelCharEge position={[-0.1, -0.9, 1]} rotation={[0, -60, 0]} />
            ) : (
              <ModelChar position={[-0.1, -0.9, 1]} rotation={[0, -60, 0]} />
            )}
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={1.45}
            minPolarAngle={1.44}
            maxAzimuthAngle={0.05}
            minAzimuthAngle={-0.05}
          />
        </Canvas>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <div
          style={{
            width: "%80",
            fontSize: "1rem",
            lineHeight: "1",
            marginTop: "4rem",
            paddingLeft: "2rem",
            paddingRight: "20rem",
            minWidth: "65%",
          }}
        >
          {" "}
          <span className="introleft-text">
            Bugün itibarıyla {props.yilYas} yıl {props.ayYas} ay {props.gunYas}{" "}
            günlüksün. <br />
            <br />
            Senin isminde {props.il} ilinde {props.ayniIsimdeIlSayi},
            <br />
            Türkiye’de {props.ayniIsimdeTurkiyeSayi} kişi var.
            <br /> <br />
            {props.il} ilinde seninle aynı tarihte doğan{" "}
            {props.ayniTarihDoganIlSayi}, Türkiye’de{" "}
            {props.ayniTarihDoganTurkiyeSayi} kişi var. <br />
            <br />
            Senin yaş ve cinsiyetine göre boyun, ortanca değerin {
              unsignedBoy
            }{" "}
            cm {boyMessage} <br />
            <br />
            Senin yaş ve cinsiyetine göre kilon, ortanca değerin {
              unsignedKilo
            }{" "}
            kg {kiloMessage}
          </span>
        </div>
        <div style={{ width: "%50" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: "0",
          paddingTop: "2.8rem",
        }}
      >
        <div
          style={{
            paddingRight: "0.5rem",
            paddingBottom: "7.9rem",
            marginBottom: "-3rem",
          }}
        >
          <span>
            {" "}
            <span
              style={{
                fontSize: "12pt",
              }}
            >
              {" "}
              -{props.boy} cm
            </span>
          </span>
        </div>
        <div style={{ paddingTop: "8.5rem" }}>
          <span
            style={{
              marginLeft: "-15rem",

              color: "green",
            }}
          >
            {" "}
            <span
              style={{
                fontSize: "12pt",
              }}
            >
              {" "}
              {props.kilo} kg
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default IntroLeft;
