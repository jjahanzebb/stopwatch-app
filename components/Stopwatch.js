import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useState, useRef, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import Result from "./_result";
import Control from "./_control";
import { displayTime } from "./_time";
import StopwatchHeader from "./_header";
import tailwind from "twrnc";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const timer = useRef(null);

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setIsRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    // container
    <SafeAreaView
      style={[
        tailwind`flex-1 bg-black `,
        { paddingTop: Constants.statusBarHeight },
      ]}
    >
      <StopwatchHeader />
      <StatusBar style="light" />

      {/* display */}
      <View style={[tailwind`justify-center items-center`, { flex: 3 / 5 }]}>
        {/* displayText */}
        <Text style={[tailwind`text-white text-7xl font-extralight`, {}]}>
          {displayTime(time)}
        </Text>
      </View>

      {/* control */}
      <View style={tailwind`h-16 flex-row justify-around`}>
        <Control
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>

      {/* result */}
      <View style={[tailwind``, { flex: 2 / 5 }]}>
        <Result results={results} />
      </View>
    </SafeAreaView>
  );
};

export default Stopwatch;
