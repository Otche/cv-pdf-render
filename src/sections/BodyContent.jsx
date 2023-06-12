import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { ExperienceSection } from "./ExperienceSection";

import cvData from "../assets/data/cv";
const experiences = cvData.experiences;
// Create styles
const bodyContentStyles = StyleSheet.create({
  height: "100%",
  width: "70%",
});
export const BodyContent = (props) => (
  <View style={bodyContentStyles} {...props}>
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <SectionBadge label={"Expériences"} />
    </View>

    <View
      style={{
        marginTop: "20px",
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
);
