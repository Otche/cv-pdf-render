import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { Header } from "./Header";

const FORMAT = "A4";

// Create styles
const rootStyle = StyleSheet.create({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Times-Roman",
});

export const Cv = () => (
  <Document>
    <Page size={FORMAT} style={rootStyle}>
      <Header />
      <View>
        <Text>TEST</Text>
      </View>
    </Page>
  </Document>
);
