import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { getFileData } from "../utils/read-file";
import profileImage from "../assets/profil-image.png";
// Create styles
const skillsHeaderStyles = StyleSheet.create(
    {
        backgroundColor: "white",
        height: "15px",
        borderColor: "#12B4E4",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
      });
export const SkillsHeader= (props) => (
    <View
    style={skillsHeaderStyles}
  >
    <View
      style={{
        backgroundColor: "white",
        height: "30px",
        width: "30px",
        marginTop: "-8px",
        marginBottom: "-10px",
        marginLeft: "5%",
        borderRadius: "100%",
        borderTopColor: "#12B4E4",
        borderTopStyle: "solid",
        borderTopWidth: "2px",
        borderBottomColor: "#12B4E4",
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
      }}
    >
      <Image
        style={{ height: "100%", width: "100%", borderRadius: "100%" }}
        src={getFileData(profileImage)}
      />
    </View>
    <View>
      <Text
        style={{ color: "#12B4E4", fontSize: "10px", marginLeft: "5px" }}
      >
        Développment
      </Text>
    </View>
  </View>
);
