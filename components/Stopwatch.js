import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useState, useRef, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Constants } from "expo-constants";

import _result from "./_result";
import _control from "./_control";
import { displayTime } from "./_time";
import _header from "./_header";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const timer = useRef(null);

  return (
    <View>
      <Text>Stopwatch</Text>
    </View>
  );
};

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

  setRunning((previousState) => !previousState);
}, [isRunning]);

export default Stopwatch;
