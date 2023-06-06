import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Header } from './Header';




// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
  }
});

//const imgSrc = path.resolve(__dirname,img);
//console.log("imgSrc  :", imgSrc)
// Create Document Component

export const CvDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header/> 
      <View>
        <Text>TEST</Text>
      </View>
    </Page>
  </Document>
);