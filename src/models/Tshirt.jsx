/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 tshirt.gltf 
Author: kylelhb (https://sketchfab.com/kylelhb)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-Tshirts/oversized-t-shirt-3b6e78d6a1a74370a6e5af6f312d38f7
Title: Oversized t-shirt
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Tshirt(props) {
  const { nodes, materials } = useGLTF('/tshirt.gltf')
  const ref = React.useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = 0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />


      </group>
    </group>
  )
}

useGLTF.preload('/tshirt.gltf')