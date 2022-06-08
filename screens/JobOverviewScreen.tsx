import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "native-base";
import React from "react";
import { Platform } from "react-native";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "JobOverview">;

export const JobOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={20} fontWeight={"bold"}>
        {item.description}
      </Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Button onPress={() => navigation.goBack()}>Register</Button>
    </View>
  );
};
