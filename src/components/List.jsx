import React from "react";
import { Text, View } from "@react-pdf/renderer";

export const List = (props) => {
    const {listItems} = props
  return (
    <View {...props}>
        {
            listItems.map( e => <Text>{e}</Text> )
        }
    </View>
  );
};
