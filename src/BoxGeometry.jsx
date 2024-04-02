import { Box, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function BoxGeometry() {

  const refMesh = useRef();

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <mesh ref={refMesh}>
        <boxGeometry/>
	      <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <axesHelper scale={10} />
    </>
  );
}

export default BoxGeometry;
