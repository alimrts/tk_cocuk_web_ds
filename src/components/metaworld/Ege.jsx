import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { LoopOnce } from "three";

export default function Ege({ mixer, actions }) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("./models/ege.glb");
  const idleAnimation = useGLTF("./models/ece@idle.glb").animations;
  const walkAnimation = useGLTF("./models/ece@walking.glb").animations;
  const jumpAnimation = useGLTF("./models/ece@jump.glb").animations;

  useEffect(() => {
    actions["default"] = mixer.clipAction(animations[0], ref.current);
    actions["walk"] = mixer.clipAction(walkAnimation[0], ref.current);
    actions["jump"] = mixer.clipAction(jumpAnimation[0], ref.current);
    actions["jump"].loop = LoopOnce;
    actions["jump"].clampWhenFinished = true;

    actions["idle"] = mixer.clipAction(idleAnimation[0], ref.current);

    actions["walk"].play();
  });

  return (
    <group ref={ref} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="egeg1_002"
            geometry={nodes.egeg1_002.geometry}
            material={materials.ege_goz}
            skeleton={nodes.egeg1_002.skeleton}
          />
          <skinnedMesh
            name="egeg1_003"
            geometry={nodes.egeg1_003.geometry}
            material={materials.ege_goz}
            skeleton={nodes.egeg1_003.skeleton}
          />
          <skinnedMesh
            name="ege_kafa_d"
            geometry={nodes.ege_kafa_d.geometry}
            material={materials.ege_kafa}
            skeleton={nodes.ege_kafa_d.skeleton}
          />
          <skinnedMesh
            name="ege_govde_done"
            geometry={nodes.ege_govde_done.geometry}
            material={materials.ege_g}
            skeleton={nodes.ege_govde_done.skeleton}
          />
          <skinnedMesh
            name="ege_koll"
            geometry={nodes.ege_koll.geometry}
            material={materials.ege_kol}
            skeleton={nodes.ege_koll.skeleton}
          />
          <skinnedMesh
            name="ege_sac"
            geometry={nodes.ege_sac.geometry}
            material={materials.ege_sac}
            skeleton={nodes.ege_sac.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload([
  "./models/ege.glb",
  "./models/ece@walking.glb",
  "./models/ece@jump.glb",
  "./models/ece@idle.glb",
]);
