import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { SkillsHeader } from "../components/SkillsHeader";
import { SkillWithProgress } from "../components/SkillWithProgress";

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
    <View style={{ marginTop: "40px", marginLeft: "5%",
        marginRight: "5%",}}>
      <SkillsHeader />
      <SkillWithProgress skillLabel={"test"} skillProgress={20}/>

    </View>
  </View>
);
