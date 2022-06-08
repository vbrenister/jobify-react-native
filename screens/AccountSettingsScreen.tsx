import { StatusBar } from "expo-status-bar";
import { View, Text } from "native-base";
import React from "react";
import { Platform } from "react-native";

export default function AccountSettingsScreen() {
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={20} fontWeight={"bold"}>
        Account Settings
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
