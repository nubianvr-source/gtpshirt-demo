/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../Shirt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.shirt.geometry}
        material={materials.FABRIC_1_FRONT_1858}
        position={[0, 1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
    </group>
  )
}

useGLTF.preload('../../../Shirt.glb')
