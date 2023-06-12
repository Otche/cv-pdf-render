import React from "react";
import { View } from "@react-pdf/renderer";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { ExperienceBody } from "../components/ExperienceBody";

export const ExperienceSection = ({
    experienceLabel, 
    experiencetag,
    projectName,
    client,
    tecs,
    projectContext,
    projectMissions
}) => {
    
  
    return (
    <View>
      <ExperienceHeader
        label={experienceLabel}
        tag={experiencetag} 
      />

      <ExperienceBody
        projectName={projectName}
        client={client}
        tecs={
          tecs
        }
        projectContext={projectContext}
        projectMissions={projectMissions}
      />
    </View>
  );
};
