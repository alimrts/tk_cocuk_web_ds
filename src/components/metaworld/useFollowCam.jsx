import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { Object3D } from "three";
import useZustandStore from "../../zustandStore";

export default function useFollowCam() {
  const { scene, camera } = useThree();

  const isAnyGameOpened = useZustandStore((state) => state.isAnyGameOpened);

  const pivot = useMemo(() => new Object3D(), []);
  const followCam = useMemo(() => {
    const o = new Object3D();
    o.position.set(0, 1, 1.5);
    return o;
  }, []);

  const MAX_VERTICAL_ANGLE = 0.4; // Maximum vertical angle in radians
  const MIN_VERTICAL_ANGLE = -0.6; // Minimum vertical angle in radians

  // const onDocumentMouseMove = (e) => {
  //   if (e.buttons === 1 && !document.pointerLockElement) {
  //     pivot.rotation.y -= e.movementX * 0.0025;
  //     const v = followCam.rotation.x - e.movementY * 0.0015;
  //     if (v >= -1.0 && v <= 0.8) {
  //       followCam.rotation.x = v;
  //       followCam.position.y = -v * followCam.position.z + 1;
  //     }
  //   }
  //   return false;
  // };

  const onDocumentMouseMove = (e) => {
    if (e.buttons === 1 && !document.pointerLockElement) {
      pivot.rotation.y -= e.movementX * 0.0025;
      let newVerticalRotation = followCam.rotation.x - e.movementY * 0.0015;
      newVerticalRotation = Math.min(
        MAX_VERTICAL_ANGLE,
        Math.max(MIN_VERTICAL_ANGLE, newVerticalRotation)
      ); // Clamp the vertical rotation
      followCam.rotation.x = newVerticalRotation;
      followCam.position.y = -newVerticalRotation * followCam.position.z + 1;
    }
    return false;
  };

  const onDocumentMouseWheel = (e) => {
    if (!document.pointerLockElement) {
      const v = followCam.position.z + e.deltaY * 0.0015;
      if (v >= 0.5 && v <= 4) {
        followCam.position.z = v;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!isAnyGameOpened) {
      camera.position.set(0, 0.5, 0.6);
      followCam.add(camera);
      pivot.add(followCam);
      scene.add(pivot);
      //console.log('attach followCam listeners')
      document.addEventListener("mousemove", onDocumentMouseMove);
      document.addEventListener("mousewheel", onDocumentMouseWheel);
    }
    return () => {
      //console.log('remove followCam listeners')
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mousewheel", onDocumentMouseWheel);
    };
  });

  return { pivot };
}
