import React from "react";
import { Canvas } from "@react-three/fiber";
import styles from './App.module.css';
import TrainStation from "./Trainstation";
import { Physics } from '@react-three/cannon'
import { BorderRightBuilding, BorderStairs, Cube, Plane, Plattform } from "./User";
import Train from "./Train";

function App() {
  return (
    <div className={styles.container}>
      <Canvas 
        shadowMap 
        orthographic 
        camera={{ zoom: 13, position: [200, 200, 200] }}
      >
        <Physics >
          <TrainStation/>
          {/* <Plane /> */}
          <Train />
          <Plattform args={[20, 1, 60]}/>
          <BorderRightBuilding args={[19, 9, 7]}/>
          <BorderStairs args={[4, 3, 17]}/>
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
          <Cube receiveShadow castShaddow />
        </Physics>
        <directionalLight
          intensity={0.8}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[-200, 200, 200]}
        />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  )
};

export default App;