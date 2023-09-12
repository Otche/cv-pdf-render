import React from "react";
import { View } from "@react-pdf/renderer";
import { SkillsHeader } from "./SkillsHeader";
import { SkillWithProgress } from "./SkillWithProgress";

export const SkillsTypeContent = ({
  label,
  icon,
  skills,
}) => {

  return (
    <View style={{ marginTop: "20px", marginLeft: "5%", marginRight: "5%" }}>
      <SkillsHeader icon={icon} label={label} />
      <View style={{ marginTop: "3px" }}>
        {skills.map((skl) => (
          <SkillWithProgress
            label={skl.label}
            progress={skl.progress}
          />
        ))}
      </View>
    </View>
  );
};
