import React, { Suspense } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "react-three-fiber";
import { AnimationMixer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./../css/styles.css";
import duck from "./../models/ASD.glb";

extend({ OrbitControls });

function Table() {
  const { nodes, animations, scene } = useLoader(GLTFLoader, duck);
  let mixer;
  if (animations.length) {
    mixer = new AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  console.log(nodes);
  return <primitive object={scene} />;
}

var Loading = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

var Scene = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.9} />
      <Suspense fallback={<Loading />}>
        <Table />
      </Suspense>
      <orbitControls args={[camera, domElement]} />
    </>
  );
};

const Models = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default Models;
