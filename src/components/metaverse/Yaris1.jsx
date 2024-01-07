import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Yaris1() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "yaris1/Build/Build.loader.js",
    dataUrl: "yaris1/Build/Build.data",
    frameworkUrl: "yaris1/Build/Build.framework.js",
    codeUrl: "yaris1/Build/Build.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}

export default Yaris1;
