import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Yaris1() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./public/yaris1/Build/yaris1.asm.loader.js",
    dataUrl: "./pucblic/yaris1/Build/yaris1.data",
    frameworkUrl: "./pucblic/yaris1/Build/yaris1.asm.framework.js",
    codeUrl: "./pucblic/yaris1/Build/yaris1.asm.js",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default Yaris1;
