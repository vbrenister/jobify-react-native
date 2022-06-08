import { FlatList, Box, VStack, Divider, Heading, Text } from "native-base";
import React from "react";
import { JobCard } from "../components/job-card.component";

import { RootTabScreenProps } from "../types";

export default function FindJobScreen({
  navigation,
}: RootTabScreenProps<"FindJob">) {
  return (
    <FlatList
      bgColor={"white"}
      data={jobList}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <JobCard
          item={item}
          onClick={() => navigation.navigate("JobOverview", { item })}
        />
      )}
    />
  );
}

const jobList = [
  {
    id: "123",
    title: "Waitress",
    address: "Middeweg 113-3, Amsterdam",
    description: "To do something",
    hourRate: 12,
    date: new Date(),
  },
  {
    id: "234",
    title: "Security Guard",
    address: "Middeweg 113-3, Amsterdam",
    description: "To do something",
    hourRate: 12,
    date: new Date(),
  },
];
