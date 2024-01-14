import React from "react";
import { useRef, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UzayMacerasi({ closeTheGame }) {
  const { unityProvider, unload } = useUnityContext({
    loaderUrl: "UzayMacerasi/UzayMacerasi.loader.js",
    dataUrl: "UzayMacerasi/UzayMacerasi.data",
    frameworkUrl: "UzayMacerasi/UzayMacerasi.framework.js",
    codeUrl: "UzayMacerasi/UzayMacerasi.wasm",
  });

  const closeGame = async () => {
    await unload();
    closeTheGame(); // Notify the parent component about the closure
  };

  return (
    <>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 420, height: 747 }}
      />
      {/* <button onClick={handleClickBack}>Back</button> */}
      <button
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "red",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={closeGame}
      >
        X
      </button>
    </>
  );
}

export default UzayMacerasi;
