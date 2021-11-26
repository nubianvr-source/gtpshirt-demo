import "./assets/App.scss";
import { Suspense } from 'react';
import {Canvas} from "react-three-fiber";
import Lights from './components/Lights';
import Model from './components/Three/Shirt3';
import Chest from "./components/Three/minecraft";
import Floor from "./components/Three/floor";
import {softShadows, Loader, OrbitControls} from "@react-three/drei";

softShadows();
function App() {
  return (
    <>
    <Canvas colorManagement shadowMap camera={{position:[0, 3, 6], fov: 40}}>
      <Lights/>
    <Suspense fallback={null}>
      <Model />
      <Floor />
      <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} maxZoom={1} minZoom={1} minDistance={6} maxDistance={6}/>
      {/*<Chest />*/}
      </Suspense>
    </Canvas>
    <Loader/>
    </>
  );
}

export default App;
