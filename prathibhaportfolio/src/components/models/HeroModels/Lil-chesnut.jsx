
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chesnut(props) {
  const { nodes, materials } = useGLTF('/lil-chesnut.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Fire_emissuuive_transparent} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/lil-chesnut.glb')
