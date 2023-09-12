import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { ProgressBar } from "./ProgressBar";

export const SkillWithProgress = ({ label, progress }) => {
  return (
    <View style={{marginTop :"8px"}}>
      <Text style={{color :"white", fontSize: "10px"}}>
        {label}
      </Text>
      <ProgressBar percentProgress={progress}/>
    </View>
  );
};