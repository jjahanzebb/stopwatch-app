import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

// for control buttons

const Control = ({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) => {
  return (
    <>
      {/* controlButtonBorder - left */}
      <TouchableOpacity
        style={[
          tailwind`justify-center items-center w-20 h-20 rounded-full`,
          { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
        ]}
        onPress={handleLeftButtonPress}
        activeOpacity={70}
      >
        {/* controlButton */}
        <View
          style={tailwind`justify-center items-center w-19 h-19 rounded-full border border-black`}
        >
          <Text style={{ color: isRunning ? "#ffffff" : "#9d9ca2" }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* controlButtonBorder - right */}
      <TouchableOpacity
        style={[
          tailwind`justify-center items-center w-20 h-20 rounded-full`,
          { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" },
        ]}
        onPress={handleRightButtonPress}
      >
        {/* controlButton */}
        <View
          style={tailwind`justify-center items-center w-19 h-19 rounded-full border border-black`}
        >
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(Control); // only renders changes on the screens - boosts performance
