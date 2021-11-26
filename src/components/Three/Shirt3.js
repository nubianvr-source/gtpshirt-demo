/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../Shirt3.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shirt.geometry} material={materials.FABRIC_1_FRONT_1858} castShadow />
    </group>
  )
}

useGLTF.preload('../../../Shirt3.glb')
