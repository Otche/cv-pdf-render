import React from "react";
import { View } from "@react-pdf/renderer";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { ExperienceBody } from "../components/ExperienceBody";

export const ExperienceSection = ({
    experienceLabel, 
    experiencetag,
    projects,
    style = {}
}) => {
    const componentStyle = {  marginTop : (!style.marginTop) ? "5px" : style.marginTop , ...style};
    return <View style={componentStyle}>
      <ExperienceHeader
        label={experienceLabel}
        tag={experiencetag} 
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
