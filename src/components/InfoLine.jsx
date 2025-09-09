import React from "react";
import { Image, Link, Text, View } from "@react-pdf/renderer";
import { getFileData } from "../utils/read-file";


export const InfoLine = (props) => {
    const {text, icon, linkType} =  props
    return <View style={{ marginTop: "3px" }} {...props} >
      <Text>
        <Image
          style={{
            height: "15px",
            width: "15px",
          }}
          src={getFileData(icon)}
        />
        {(linkType === "mailto" || linkType === "tel") && (
          <Link style={{ color: "white", marginLeft: '5px' }} src={`${linkType}:${{ text }}`}>
            <Text>{text}</Text>
          </Link>
        )}
        {linkType === "url" && (
          <Link style={{ color: "white", marginLeft: '5px' }} src={text}>
            <Text>{text}</Text>
          </Link>
        )}
        {!linkType && <Text style={{ color: "white", marginLeft: '5px' }}>{text}</Text>}
      </Text>
    </View>
};