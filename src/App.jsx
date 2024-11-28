import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Tshirt from "./models/Tshirt";
import { Scene } from "three";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Tshirt />
      <Environment preset="city" />
      <OrbitControls />

    </Canvas>
  );
}

export default App;
