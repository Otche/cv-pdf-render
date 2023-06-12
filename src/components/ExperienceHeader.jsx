import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

// Create styles

export const ExperienceHeader = ({label, tag}) => (
    <View>
        <View
        style={{
          borderBottomColor: "#12B4E4",
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
       
        }}
      >
        <Text
          style={{
            fontSize: "14px",
            color: "#58585A",
          }}
        >
        {label}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
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
          }}
        >
           {tag}
        </Text>
      </View>
    </View>   
);
