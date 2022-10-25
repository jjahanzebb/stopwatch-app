import { Text, View } from "react-native";
import tailwind from "twrnc";

import Stopwatch from "./components/Stopwatch";

export default function App() {
  return (
    <View style={tailwind`flex-1`}>
      <Stopwatch />
    </View>
  );
}
