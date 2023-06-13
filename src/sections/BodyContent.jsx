import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { ExperienceSection } from "./ExperienceSection";

import cvData from "../assets/data/cv";

// Create styles
const bodyContentStyles = StyleSheet.create({
  height: "100%",
  width: "70%",
});
export const BodyContent = (props) => {
  const {pagenum} = props;
  const experiences = cvData.experiences.filter(e => e.dislayPage === pagenum || (!e.dislayPage && pagenum === 1 ) );
  return <View style={bodyContentStyles} {...props}>
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
     {pagenum === 1 && <SectionBadge label={"Expériences"} /> } 
    </View>

    <View
      style={{
        marginLeft: "5px",
        width: "95%",
      }}
    >
      {experiences.map((expr) => {
        const {
          experienceLabel,
          experiencetag,
          projectName,
          client,
          tecs,
          projectContext,
          projectMissions,
        } = expr;
        return (
          <ExperienceSection
            experienceLabel={experienceLabel}
            experiencetag={experiencetag}
            projectName={projectName}
            client={client}
            tecs={tecs}
            projectContext={projectContext}
            projectMissions={projectMissions}
          />
        );
      })}
    </View>
  </View>
};
