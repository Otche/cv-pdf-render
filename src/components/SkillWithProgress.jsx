import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { ProgressBar } from "./ProgressBar";

export const SkillWithProgress = ({ skillLabel, skillProgress }) => {
  return (
    <View style={{marginTop :"5px"}}>
      <Text style={{color :"white", fontSize: "10px"}}>
        {skillLabel}
      </Text>
      <ProgressBar percentProgress={skillProgress}/>
    </View>
  );
};