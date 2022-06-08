import { Box, VStack, Divider, Heading, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

export type JobCardParams = {
  item: JobItem;
  onClick: () => void;
};

export type JobItem = {
  id: string;
  title: string;
  address: string;
  description: string;
  hourRate: number;
  date: Date;
};

export const JobCard: React.FC<JobCardParams> = ({ item, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Box m={"2"} borderWidth={"1"} borderRadius="lg">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            <Heading>{item.title}</Heading>
          </Box>
          <Box px="4">
            <Text>{item.description}</Text>
          </Box>
          <Box px="4" pb="4">
            {item.date.toISOString()}
          </Box>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};
