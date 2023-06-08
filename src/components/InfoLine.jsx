import React from "react";
import { Image, Link, Text, View } from "@react-pdf/renderer";
import { getFileData } from "../utils/read-file";


export const InfoLine = (props) => {
    const {text, icon, linkType} =  props
    return <View style={{ marginTop: "2px" }} {...props} >
      <Text
        style={{
          fontSize: "10px",
        }}
      >
        <Image
          style={{
            height: "15px",
            width: "15px",
          }}
          src={getFileData(icon)}
        />
        {(linkType === "mailto" || linkType === "tel") && (
          <Link style={{ color: "white" }} src={`${linkType}:${{ text }}`}>
            <Text>{text}</Text>
          </Link>
        )}
        {linkType === "url" && (
          <Link style={{ color: "white" }} src={text}>
            <Text>{text}</Text>
          </Link>
        )}
        {!linkType && <Text>{text}</Text>}
      </Text>
    </View>
};