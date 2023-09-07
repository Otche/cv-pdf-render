import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { Header } from "./Header";
import { Body } from "./Body";
import cvData from "../assets/data/cv";
const FORMAT = "A4";

// Create styles
const rootStyle = StyleSheet.create({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Times-Roman",
});

export const DataContext = React.createContext();

export const Cv = () => (
  <DataContext.Provider value={cvData}>
    <Document>
      <Page size={FORMAT} style={rootStyle}>
        <Header />
        <Body pagenum={1} />
      </Page>
      <Page size={FORMAT} style={rootStyle}>
        <Body pagenum={2} />
      </Page>
      <Page size={FORMAT} style={rootStyle}>
        <Body pagenum={3} />
      </Page>
    </Document>
  </DataContext.Provider>
);
