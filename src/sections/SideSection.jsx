import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { SkillsTypeContent } from "../components/SkillsTypeContent";
import cvData from "../assets/data/cv";


const skills = cvData.skills;
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

// const skills = [
//   {
//     skillType: "devops",
//     skillTypeIcon: require("../assets/images/profil-image.png"),
//     skillsList: [
//       {
//         skillLabel: "tttttt",
//         skillProgress: 50,
//       },
//     ],
//   },
//];
export const SideSection = (props) => {
  return (
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
