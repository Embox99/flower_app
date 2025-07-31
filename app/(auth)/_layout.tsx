import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function _layout() {
  return (
    <SafeAreaView>
      <Text className="text-xl">auth layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
