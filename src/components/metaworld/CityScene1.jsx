import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

export function CityScene1(props) {
  const { nodes, materials } = useGLTF('./models/city_c.glb')

  return (
    <group {...props} dispose={null}>
      <group position={[-19.27, 0, -117]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0001_1.geometry} material={materials['texture_mat.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0001_2.geometry} material={materials['Colore.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0001_3.geometry} material={materials['Segnali_e_scritte.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0001_4.geometry} material={materials['Vetro.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0001_5.geometry} material={materials['Vetro_alternate_less_transparent.001']} />
      </group>
      <group position={[64.83, 0, 13.57]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['(base)003_Colore_0_1'].geometry} material={materials['Colore.001']} />
        <mesh castShadow receiveShadow geometry={nodes['(base)003_Colore_0_2'].geometry} material={materials['Vetro.001']} />
        <mesh castShadow receiveShadow geometry={nodes['(base)003_Colore_0_3'].geometry} material={materials.texture_mat} />
        <mesh castShadow receiveShadow geometry={nodes['(base)003_Colore_0_4'].geometry} material={materials.Segnali_e_scritte} />
        <mesh castShadow receiveShadow geometry={nodes['(base)003_Colore_0_5'].geometry} material={materials.Vetro_alternate_less_transparent} />
      </group>
      <group position={[-94.05, 0, -33.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0002_1.geometry} material={materials['texture_mat.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0002_2.geometry} material={materials['Colore.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0002_3.geometry} material={materials['Segnali_e_scritte.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0002_4.geometry} material={materials['Vetro.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Strada_stop005_texture_mat_0002_5.geometry} material={materials['Vetro_alternate_less_transparent.002']} />
      </group>
      <group position={[31.09, 0, 54.79]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_1.geometry} material={materials.Texture_Strada} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_2.geometry} material={materials.Colore} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_3.geometry} material={materials.Vetro} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_4.geometry} material={materials.Texture_Varie} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_5.geometry} material={materials.Tubes__0} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_6.geometry} material={materials.ContornoEdifici} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_7.geometry} material={materials.Marcapiede} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_8.geometry} material={materials['Material.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane047_Texture_Strada_0_9.geometry} material={materials.Color} />
      </group>
      <group position={[13.45, 0, -16.68]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_1.geometry} material={materials.strada2} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_2.geometry} material={materials.TEXTURE_FINALE} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_3.geometry} material={materials.LEGNO} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_4.geometry} material={materials.BIANCO} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_5.geometry} material={materials.NERO} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_6.geometry} material={materials.GIALLO} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_7.geometry} material={materials['CESPUGLI.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_8.geometry} material={materials['VASI.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_9.geometry} material={materials['TERRA.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_10.geometry} material={materials['Cube.002__0']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_11.geometry} material={materials['VETRI_FINALE.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_12.geometry} material={materials['texture.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_13.geometry} material={materials.BASI_EDIFICI} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_14.geometry} material={materials.palette} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_15.geometry} material={materials['Material.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_16.geometry} material={materials['vetri.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_17.geometry} material={materials.foglie} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_18.geometry} material={materials.vasi} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_19.geometry} material={materials.terra} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_20.geometry} material={materials.cocktail} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_21.geometry} material={materials.pavimentop_terrazza} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_22.geometry} material={materials['Material.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_23.geometry} material={materials.poster} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_24.geometry} material={materials.vetri} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_25.geometry} material={materials['TEXTURE_FINALE.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_26.geometry} material={materials.postermuro} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_27.geometry} material={materials.CESPUGLI} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_28.geometry} material={materials.VASI} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_29.geometry} material={materials.TERRA} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_30.geometry} material={materials['foglie.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_31.geometry} material={materials['vasi.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_32.geometry} material={materials['terra.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_33.geometry} material={materials['vetri.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_34.geometry} material={materials['vasi.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_35.geometry} material={materials['tubo.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_36.geometry} material={materials['nero.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_37.geometry} material={materials['terra.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_38.geometry} material={materials['foglie.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_39.geometry} material={materials['texture.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_40.geometry} material={materials.benzinaio} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_41.geometry} material={materials['nero.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_42.geometry} material={materials['nero.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_43.geometry} material={materials.insegna} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_44.geometry} material={materials['vetri.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_45.geometry} material={materials.nero} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_46.geometry} material={materials.tubo} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_47.geometry} material={materials.porta_e_serramenti} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_48.geometry} material={materials['vetri.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_49.geometry} material={materials['CESPUGLI.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_50.geometry} material={materials['VASI.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_51.geometry} material={materials['TERRA.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_52.geometry} material={materials['CESPUGLI.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_53.geometry} material={materials['VASI.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_54.geometry} material={materials['TERRA.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_55.geometry} material={materials.lowpolytex} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_56.geometry} material={materials['Material.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_57.geometry} material={materials.terriccio} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_58.geometry} material={materials.parcheggio_gelati} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_59.geometry} material={materials['texture_FINALE.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_60.geometry} material={materials['VETRI.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_61.geometry} material={materials['texture_FINALE.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_62.geometry} material={materials.TEXTURE} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_63.geometry} material={materials['VETRI.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_64.geometry} material={materials['foglie.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_65.geometry} material={materials['vasi.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_66.geometry} material={materials['terra.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_67.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_68.geometry} material={materials['texture.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_69.geometry} material={materials.camion} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_70.geometry} material={materials.rosa_gelato} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_71.geometry} material={materials.pallina_gelato} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_72.geometry} material={materials.finestrini} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_73.geometry} material={materials['insegna.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_74.geometry} material={materials.viola} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_75.geometry} material={materials['texture.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_76.geometry} material={materials.SEGNALE_PARCHEGGIO} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_77.geometry} material={materials['texture.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_78.geometry} material={materials['grigio_scuro.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_79.geometry} material={materials.color} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002_strada2_0_80.geometry} material={materials['casa.005__0']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/city_c.glb')
