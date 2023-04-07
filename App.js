import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position-y={0.75} rotation-x={-Math.PI / 6}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <Text position-y={-0.75} rotation-x={-Math.PI / 6}>
          Hello World
        </Text>
      </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}
