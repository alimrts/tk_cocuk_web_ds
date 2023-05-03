import React, { useState, useRef, useEffect } from "react";
import UserRegister from "./UserRegister";
import video from "../img/bayram_kutlama.mp4";
import leftImage from "../img/leftImage.png";
import rightImage from "../img/rightImage.png";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import NavbarRegister from "../components/Navbar/NavbarRegister";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import ModelChar from "../components/Intro/ModelChar";
import ModelCharEge from "../components/Intro/ModelCharEge";
import { Suspense } from "react";

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
    marginTop: "-5rem",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "1rem",
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
    fontSize: "12pt",
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(null);

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

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
    console.log("erkek");
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
              className="blur"
              style={{
                background: "#ffe6ff",
                top: "5rem",
                width: "31rem",
                height: "41rem",
              }}
            ></div>

            <div>
              <Canvas
                camera={{ position: [0, 0, 4.25], fov: 15 }}
                style={{
                  width: "30vh",
                  height: "60vh",
                  minWidth: "20vw",
                  minHeight: "30vh",

                  cursor: "pointer",
                  border: getBorderStyle(),
                }}
              >
                <ambientLight intensity={1.25} />

                <directionalLight intensity={0.4} />
                <Suspense fallback={<Loader />}>
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
              <h2 className={classes.formTitle}>TÜİK Çocuk Platformu Giriş</h2>
              <h1 className={classes.formTitle}>
                Bilgileri Doldur ve Karakterini Seç
              </h1>

              <UserRegister
                onGenderChange={handleGenderChange}
                onSubmit={handleUserRegister}
              />
            </div>

            <div>
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
            className="blur"
            style={{
              background: "#e6ffff",
              top: "5rem",
              width: "31rem",
              height: "41rem",
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default RegisterPage;
