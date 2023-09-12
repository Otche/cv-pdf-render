import React from "react";
import { View } from "@react-pdf/renderer";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { ExperienceBody } from "../components/ExperienceBody";

export const ExperienceSection = ({
    label, 
    tag,
    projects,
    style = {}
}) => {
    const componentStyle = {  marginTop : (!style.marginTop) ? "5px" : style.marginTop , ...style};
    return <View style={componentStyle}>
      <ExperienceHeader
        label={label}
        tag={tag} 
      />
      {
        projects.map(
          (project) => 
            <ExperienceBody {...project}
          />
        )
      }
    </View> 
};
