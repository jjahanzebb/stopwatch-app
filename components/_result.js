import { Text, View, ScrollView } from "react-native";
import React from "react";
import tailwind from "twrnc";

import { displayTime } from "./_time";

// for displaying lap time

const Result = ({ results }) => {
  return (
    <ScrollView>
      {/* resultItem */}
      <View
        style={[
          tailwind`flex-row justify-between items-center border-b h-12 px-4`,
          { borderColor: "#313131" },
        ]}
      />
      {results.map((item, index) => (
        <View
          key={index}
          style={[
            tailwind`flex-row justify-between items-center border-b h-12 px-4`,
            { borderColor: "#313131" },
          ]}
        >
          {/* resultItemText */}
          <Text style={tailwind`text-white`}>Lap {results.length - index}</Text>
          <Text style={tailwind`text-white`}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default React.memo(Result);
