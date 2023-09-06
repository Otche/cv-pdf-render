import React from "react";
import {  View,  StyleSheet, Text } from "@react-pdf/renderer";
import { SideSection } from "./SideSection";
import { BodyContent } from "./BodyContent";


export const Body = ({pagenum}) => {
    const bodyStyles = StyleSheet.create({
        height: pagenum === 1 ? "85%" : "100%",
        display: "flex",
        flexDirection: "row",
      });
    return <View style={bodyStyles}>
        <SideSection pagenum={pagenum}/>
        <BodyContent pagenum={pagenum}/>
    </View>

};
