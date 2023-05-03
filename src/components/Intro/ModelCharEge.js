import React, { useRef, useEffect,useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export default function ModelCharEge({ ...props }) {
  const group = useRef()
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  const { nodes, materials, animations } = useGLTF('/ege.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['idle'].play()
  })
  return (
    <group ref={group} {...props} dispose={null} >
      
      <group name="Scene" onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}>
        
        <group name="Armature" rotation={[-Math.PI, 0, -Math.PI]}>
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
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
  )
}

useGLTF.preload('/ege.glb')
