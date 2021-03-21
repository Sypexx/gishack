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
import map3 from "./../models/Map3.glb";

extend({ OrbitControls });

const Models = () => {

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
          <Table></Table>
        </Suspense>
        <orbitControls args={[camera, domElement]} />
      </>
    );
  };

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

  function Table() {
    const { nodes, animations, scene } = useLoader(GLTFLoader, map3);
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

  return (
    
    <Canvas camera={{fov: 20, position:[10,10,10]}}>
      <Scene></Scene>
    </Canvas>
    
  );

};

export default Models;
