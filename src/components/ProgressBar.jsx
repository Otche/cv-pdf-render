import React from "react";
import { View } from "@react-pdf/renderer";

export const ProgressBar = ({ percentProgress }) => {
  return (
    <View style={{ backgroundColor: "white", height: "3px", width: "100%" }}>
      <View
        style={{
          backgroundColor: "#12B4E4",
          height: "100%",
          width: `${percentProgress}%`,
        }}
      ></View>
    </View>
  );
};
