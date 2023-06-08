import React from "react";
import { Text,StyleSheet } from "@react-pdf/renderer";

// Create styles
const SectionBadgeStyles = StyleSheet.create({
    backgroundColor : "#12B4E4",
    color: "white",
    width: "100px",
    fontSize : "14px",
    marginTop : "-1px",
    textAlign : "center",
    padding : "5px",
    borderBottomLeftRadius : "3px",
    borderBottomRightRadius: "3px",
});
export const SectionBadge = (props) => (
       <Text style={SectionBadgeStyles}>{props.label}</Text>
);
