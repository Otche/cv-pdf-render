import React, { useContext } from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";
import { ExperienceSection } from "./ExperienceSection";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { DataContext } from "./Cv";

// Create styles
const bodyContentStyles = StyleSheet.create({
  height: "100%",
  width: "72%",
});
export const BodyContent = (props) => {
  const data = useContext(DataContext);

  const { pagenum } = props;
  const experiences = data.experiences.filter(
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
            return <ExperienceSection {...expr} />;
          })}
        </View>
      </View>
      {pagenum === 3 && (
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              borderTopColor: "#12B4E4",
              borderTopStyle: "solid",
              borderTopWidth: "2px",
              marginTop: "5px",
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
            {data.fomations.map((formation) => {
              const { tag, label, description } = formation;
              return (
                <View
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <ExperienceHeader label={label} tag={tag} />
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "#58585A",
                    }}
                  >
                    {description}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};
