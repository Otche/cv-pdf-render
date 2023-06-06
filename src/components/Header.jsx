import React from "react";
import { Text, View, StyleSheet, Image, Link } from "@react-pdf/renderer";

import { getFileData } from "../utils/read-file";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import profileImage from "../assets/profil-image.png";
// Create styles
const styles = StyleSheet.create({
  height: "150px",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#58585A",
});

const IdentiyRender = () => (
  <View>
    <Text
      style={{
        color: "white",
        fontFamily: "Times-Italic",
        fontSize: "15px",
      }}
    >
      Amine OUCHIHA{" "}
      <Text
        style={{
          color: "white",
          fontFamily: "Times-Italic",
          fontSize: "10px",
        }}
      >
        (30 ans)
      </Text>
    </Text>
  </View>
);

const JobNameRender = () => (
  <Text
    style={{
      color: "white",
      fontFamily: "Times-Italic",
      fontSize: "15px",
      marginTop: "5px",
      borderBottomColor : "#12B4E4",
      borderBottomStyle : "solid",
      borderBottomWidth: "2px"
    }}
  >
    Développeur full stack
  </Text>
);

const infoRender = (text, icon, linkType) => (
  <View style={{ marginTop: "2px" }}>
    <Text
      style={{
        color: "white",
        fontFamily: "Times-Roman",
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
);

const ContactRender = () => {
  const adresse = "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.";
  const Phone = "+33781581021";
  const email = "ouchihaamine@gmail.com";
  const linkedin = "https://fr.linkedin.com/in/amine-ouchiha-608808b3";
  return (
    <View>
      {infoRender(adresse, locationIcon)}
      {infoRender(Phone, phoneIcon, "tel")}
      {infoRender(email, emailIcon, "mailto")}
      {infoRender(linkedin, linkedinIcon, "url")}
      {infoRender("tt", emailIcon, "url")}
    </View>
  );
};

// Create Document Component
export const Header = () => (
  <View style={styles}>
    <View
      style={{
        width: "30%",
        height: "100%",
        paddingLeft: "5px ",
      }}
    >
      {IdentiyRender()}
      {/* {JobNameRender()} */}
      {ContactRender()}
    </View>

    <View
      style={{
        width: "20%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "10%",
        }}
      >

      </View>


        <Image style={{
          width: "100%",
          height: "80%",
          borderColor : "#12B4E4",
          borderStyle : "solid",
          borderWidth: "10px",
          borderRadius :"5px"
        }} src={getFileData(profileImage)} />

      <View
        style={{
          width: "100%%",
          height: "10%",
        }}
      >
      </View>
    </View>


    <View style={{
        width: "50%",
        height: "100%",
        marginRight : "5px",
        marginLeft : "5px"
      }}>
       <Text
    style={{
      color: "white",
      fontFamily: "Times-Italic",
      fontSize: "15px",
      marginTop: "5px",
      borderBottomColor : "#12B4E4",
      borderBottomStyle : "solid",
      borderBottomWidth: "2px"
    }}
  >
    Développeur full stack
  </Text>

    </View>
  </View>
);
