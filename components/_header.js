import { Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import tailwind from "twrnc";

// application's heading
const StopwatchHeader = () => {
  return (
    <Appbar.Header style={tailwind`bg-black `}>
      <Appbar.Content title="My Stopwatch" style={tailwind`items-center`} />
    </Appbar.Header>
  );
};

export default StopwatchHeader;
