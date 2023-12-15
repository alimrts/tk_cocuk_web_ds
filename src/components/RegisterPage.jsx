import React, { useState, useRef, useEffect } from "react";
import UserRegister from "./UserRegister";
import video from "../img/bayram_kutlama.mp4";
import leftImage from "../img/leftImage.png";
import rightImage from "../img/rightImage.png";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import NavbarRegister from "../components/Navbar/NavbarRegister";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import ModelChar from "../components/Intro/ModelChar";
import ModelCharEge from "../components/Intro/ModelCharEge";
import { Suspense } from "react";

import tkc_kuslar1_edit from "../img/tkc_kuslar1_edit.png";
import tkc_kuslar2_edit from "../img/tkc_kuslar2_edit.png";
import FooterBg from "../img/tkc_footer_bg.png";
import zIndex from "@material-ui/core/styles/zIndex";

import useZustandStore from "../zustandStore";

import * as THREE from "three";

import { Trail, Float } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        {Math.round(progress)} % yükleniyor
      </div>
    </Html>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1 rem",
    height: "100vh",
    transform: "scale(0.8)",
  },
  left: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "256px", // Update width to original image size
      marginRight: "1rem",
      marginBottom: "0",
    },
    cursor: "pointer",
  },
  right: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "256px", // Update width to original image size
      marginLeft: "1rem",
    },
    cursor: "pointer",
  },
  formWrapper: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12pt",
  },
  formTitle: {
    marginBottom: "1rem",
    fontSize: "14pt",
  },
}));

function Atom(props) {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={4} />
    </group>
  );
}

function Electron({ radius = 0.62, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25 - 1.1,
      -3.2
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={12}
        // color={new THREE.Color(2, 1, 10)}
        color={new THREE.Color(0x00ffe4)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          {/* <sphereGeometry args={[0.15]} /> */}
          <meshBasicMaterial color={[10, 8, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // const [userInfo, setUserInfo] = useState(null);

  const { setUserInfo } = useZustandStore();

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const { language, setLanguage, languageData } = useZustandStore();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const strings = languageData[language];

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);

    //to remember which select value
    setSelectedLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  const transitionOfBulut = {
    duration: 3.2,
    ease: "easeInOut",
    loop: Infinity,
  };

  const handlePlayClick = () => {
    setShowVideo(true);
    const { current: videoElement } = videoRef;
    if (videoElement) {
      videoElement.play();
    }
  };

  // useEffect(() => {
  //   const { current: videoElement } = videoRef;
  //   const onVideoEnd = () => {
  //     setShowVideo(false);
  //   };

  //   if (videoElement) {
  //     videoElement.addEventListener("ended", onVideoEnd);
  //     videoElement.addEventListener("canplaythrough", () => {
  //       setShowVideo(true);
  //       videoElement.play();
  //     });
  //     return () => {
  //       videoElement.removeEventListener("ended", onVideoEnd);
  //       videoElement.removeEventListener("canplaythrough", () => {
  //         setShowVideo(true);
  //         videoElement.play();
  //       });
  //     };
  //   }
  // }, []);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(!!userAgent.match(/(ipad|iphone|ipod)/i));
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );

    const { current: videoElement } = videoRef;
    const onVideoEnd = () => {
      setShowVideo(false);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", onVideoEnd);
      return () => {
        videoElement.removeEventListener("ended", onVideoEnd);
      };
    }
  }, []);
  const getBorderStyle = () => {
    if (gender === "erkek") {
      return "1px solid blue";
    } else if (gender === "kiz") {
      return "1px solid pink";
    } else {
      return "none";
    }
  };

  const [gender, setGender] = useState("");
  const handleGenderChange = (value) => {
    setGender(value);
    console.log(value);
  };

  const handleUserRegister = (formData) => {
    console.log(formData);
    // Do something with the form data, like send it to a server to create a new user account
    setUserInfo(formData);
    history.push({
      pathname: "/main",
      state: { userInfo: formData },
    });
  };

  return (
    <>
      <NavbarRegister />
      {showVideo && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            onLoadedData={() => {
              const { current: videoElement } = videoRef;
              if (videoElement) {
                videoElement.play();
              }
            }}
            onEnded={() => setShowVideo(false)}
            onStalled={() => setShowVideo(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
          {(isIOS && !videoRef.current?.duration) ||
          videoRef.current?.paused ? (
            <button
              className="button i-button"
              onClick={() => {
                const { current: videoElement } = videoRef;
                if (videoElement) {
                  videoElement.play();
                }
              }}
              style={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              Oynat
            </button>
          ) : null}
        </>
      )}

      {!showVideo && (
        <>
          <div className={classes.root}>
            <div
              style={{
                backgroundImage: `url(${tkc_kuslar1_edit})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "32rem",
                height: "32rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "-8rem",
                marginTop: "-4rem",
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 4.25], fov: 15 }}
                style={{
                  width: "30vh",
                  height: "60vh",
                  minWidth: "20vw",
                  minHeight: "30vh",
                  marginLeft: "18rem",
                  cursor: "pointer",
                  border: getBorderStyle(),
                }}
              >
                <ambientLight intensity={1.25} />

                <directionalLight intensity={0.4} />
                <Suspense fallback={<Loader />}>
                  {gender === "1" && (
                    <>
                      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                        <Atom />
                      </Float>
                    </>
                  )}
                  <ModelCharEge
                    position={[0, -1.2, -3]}
                    rotation={[0, -60, 0]}
                  />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.5}
                  maxPolarAngle={1.45}
                  minPolarAngle={1.44}
                  maxAzimuthAngle={0.1}
                  minAzimuthAngle={-0.1}
                />
              </Canvas>
            </div>

            <div className={classes.formWrapper}>
              <h2 className={classes.formTitle}>{strings.registerPageGiris}</h2>
              <h1 className={classes.formTitle}>
                {strings.registerPageBilgileriDoldur}
              </h1>

              <UserRegister
                onGenderChange={handleGenderChange}
                onSubmit={handleUserRegister}
              />
            </div>

            <div
              style={{
                backgroundImage: `url(${tkc_kuslar2_edit})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "32rem",
                height: "32rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "-2rem",
                marginTop: "-4rem",
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 4.25], fov: 15 }}
                style={{
                  width: "30vh",
                  height: "60vh",
                  minWidth: "20vw",
                  minHeight: "30vh",
                  cursor: "pointer",
                }}
              >
                <ambientLight intensity={1.25} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={<Loader />}>
                  <ModelChar position={[0, -1.2, -3]} rotation={[0, -60, 0]} />
                  {gender === "2" && (
                    <>
                      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                        <Atom position={[0, -1.2, -3]} />
                      </Float>
                    </>
                  )}
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.5}
                  maxPolarAngle={1.45}
                  minPolarAngle={1.44}
                  maxAzimuthAngle={0.1}
                  minAzimuthAngle={-0.1}
                />
              </Canvas>
            </div>
          </div>

          <div
            style={{
              position: "fixed",
              bottom: -20,
              left: 0,
              right: 0,
              width: "100%",
              zIndex: -1,
            }}
          >
            <img
              src={FooterBg}
              alt=""
              style={{ width: "100%", marginBottom: "0rem" }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default RegisterPage;
