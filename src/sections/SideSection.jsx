import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { SkillsHeader } from "../components/SkillsHeader";

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
    <View style={{ marginTop: "10px", marginLeft: "5%",
        marginRight: "5%",}}>
      <SkillsHeader />
      <View style={{marginTop :"5px"}}>
        <Text style={{color :"white"}}>
          test
        </Text>
        <View style={{backgroundColor :"white", height: "3px", width : "100%"}}>
          <View style={{backgroundColor :"#12B4E4", height: "100%", width : "50%"}}>
          </View>
        </View>
      </View>
    </View>
  </View>
);
