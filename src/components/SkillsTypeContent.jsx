import React from "react";
import { View } from "@react-pdf/renderer";
import { SkillsHeader } from "./SkillsHeader";
import { SkillWithProgress } from "./SkillWithProgress";

export const SkillsTypeContent = ({
  skillTypeLabel,
  skillTypeIcon,
  skills,
}) => {

  return (
    <View style={{ marginTop: "20px", marginLeft: "5%", marginRight: "5%" }}>
      <SkillsHeader icon={skillTypeIcon} label={skillTypeLabel} />
      <View style={{ marginTop: "3px" }}>
        {skills.map((skl) => (
          <SkillWithProgress
            skillLabel={skl.skillLabel}
            skillProgress={skl.skillProgress}
          />
        ))}
      </View>
    </View>
  );
};
