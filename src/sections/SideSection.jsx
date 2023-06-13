import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { SkillsTypeContent } from "../components/SkillsTypeContent";
import cvData from "../assets/data/cv";



// Create styles
const sideSectionStyles = StyleSheet.create({
  height: "100%",
  width: "30%",
  display: "flex",
  backgroundColor: "#58585A",
  color: "white",
  borderRightColor: "#12B4E4",
  borderRightStyle: "solid",
  borderRightWidth: "2px",
});
export const SideSection = (props) => {
  const {pagenum} = props;
  const skills = cvData.skills.filter(e => e.dislayPage === pagenum || (!e.dislayPage && pagenum === 1 ) );
  return (
    <View style={sideSectionStyles} {...props}>
      {pagenum === 1  && <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          borderTopColor: "#12B4E4",
          borderTopStyle: "solid",
          borderTopWidth: "2px",
     
        }}
      >
       <SectionBadge label={"Compétences"} />
      </View>} 
      {skills.map((skl) => (
        <SkillsTypeContent
          skillTypeLabel={skl.skillType}
          skillTypeIcon={skl.skillTypeIcon}
          skills={skl.skillsList}
        />
      ))}
    </View>
  );
};
