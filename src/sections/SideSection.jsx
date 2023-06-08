import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { CompetanceHeader } from "../components/CompetanceHeader";
// Create styles
const sideSectionStyles = StyleSheet.create({
  height: "100%",
  width: "30%",
  display: "flex",
  backgroundColor: "#58585A",
  color: "white",
});
export const SideSection = (props) => (
  <View style={sideSectionStyles} {...props}>
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <SectionBadge label={"Compétences"} />
    </View>
    <View style={{ marginTop: "10px" }}>
      <CompetanceHeader />
    </View>
  </View>
);
