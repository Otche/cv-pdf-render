import React from "react";
import {  View,  StyleSheet } from "@react-pdf/renderer";
import { SideSection } from "./SideSection";
import { BodyContent } from "./BodyContent";

const bodyStyles = StyleSheet.create({
    height: "83%",
    display: "flex",
    flexDirection: "row",
  });
export const Body = (props) => (
    <View style={bodyStyles}>
        <SideSection/>
        <BodyContent/>
    </View>

);
