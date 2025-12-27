import React from "react";
import { View } from "@react-pdf/renderer";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { ExperienceBody } from "../components/ExperienceBody";

export const ExperienceSection = ({ label, tag, projects, style = {} }) => {
  const componentStyle = {
    marginTop: !style.marginTop ? "5px" : style.marginTop,
    ...style,
  };
  return (
    <View style={componentStyle}>
      <ExperienceHeader label={label} tag={tag} />
      <View style={{
        marginTop: "-13px"
      }}>
        {projects.map((project, index) => (
          <>
            <ExperienceBody {...project} />
            {index !== projects.length - 1 && (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
              >
                <View
                  style={{
                    width: "300px",
                    height: "1px",
                    backgroundColor: "#12B4E4",
                  }}
                />
              </View>
            )}
          </>
        ))}
      </View>
    </View>
  );
};
