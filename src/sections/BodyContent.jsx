import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { ExperienceSection } from "./ExperienceSection";

import cvData from "../assets/data/cv";
import { ExperienceHeader } from "../components/ExperienceHeader";

// Create styles
const bodyContentStyles = StyleSheet.create({
  height: "100%",
  width: "72%",
});
export const BodyContent = (props) => {
  const { pagenum } = props;
  const experiences = cvData.experiences.filter(
    (e) => e.dislayPage === pagenum || (!e.dislayPage && pagenum === 1)
  );
  return (
    <View style={bodyContentStyles} {...props}>
      <View>
        {pagenum === 1 && (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              borderTopColor: "#12B4E4",
              borderTopStyle: "solid",
              borderTopWidth: "2px",
            }}
          >
            <SectionBadge label={"Expériences"} />
          </View>
        )}

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
      {pagenum === 2 && (
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              borderTopColor: "#12B4E4",
              borderTopStyle: "solid",
              borderTopWidth: "2px",
              marginTop: "20px",
            }}
          >
            <SectionBadge label={"Formations"} />
          </View>
          <View
            style={{
              marginLeft: "5px",
              width: "95%",
            }}
          >
            <View  style={{
              marginTop: "20px",
            }}>
              <ExperienceHeader
                label={"Université de Versaille (UVSQ)"}
                tag={"2013 - 2015"}
              />
              <Text
                style={{
                  fontSize: "10px",
                  color: "#58585A",
                  fontFamily: "Times-Bold",
                }}
              >
                Master en Analyse et conception de Systeme d'information Sûrs.
              </Text>
            </View>
            <View  style={{
              marginTop: "20px",
            }}>
            
              <ExperienceHeader
                label={"Université de Bejaia"}
                tag={"2010 - 2013"}
              />
              <Text
                style={{
                  fontSize: "10px",
                  color: "#58585A",
                  fontFamily: "Times-Bold",
                }}
              >
                Licence en informatique.
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
