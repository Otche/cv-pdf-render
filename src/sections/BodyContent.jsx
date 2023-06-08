import React from "react";
import { View,  StyleSheet } from "@react-pdf/renderer";
import { SectionBadge } from "../components/SectionBadge";

// Create styles
const bodyContentStyles = StyleSheet.create({
    height: "100%",
    width :"70%",
  });
export const BodyContent = (props) => (
  <View style={bodyContentStyles} {... props}>
    <View style={{ 
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    }}>
       <SectionBadge label={"Expériences"}/>
       
    </View>
  </View
  >
);
