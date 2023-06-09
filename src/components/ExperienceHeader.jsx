import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

// Create styles

export const ExperienceHeader = (props) => (
    <View>
        <View
        style={{
          borderBottomColor: "#12B4E4",
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
          marginLeft: "5px",
          width: "95%",
        }}
      >
        <Text
          style={{
            fontSize: "14px",
            color: "#58585A",
          }}
        >
          Edifixio
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "95%",
          flexDirection: "row-reverse",
        }}
      >
          <Text
          style={{
            backgroundColor: "#12B4E4",
            color: "white",
            marginTop : "-1",
            fontSize : "10px",
            padding : "3px",
            borderBottomLeftRadius : "3px",
            borderBottomRightRadius: "3px",
            marginRight : "-5px",
          }}
        >
          sept 201533 - dec 2018
        </Text>
      </View>
    </View>   
);
