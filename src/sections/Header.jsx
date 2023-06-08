import React from "react";
import { Text, View, StyleSheet, Image, Link } from "@react-pdf/renderer";
import { InfoLine } from "../components/InfoLine";
import { getFileData } from "../utils/read-file";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import profileImage from "../assets/profil-image.png";



const IdentiyRender = (props ) => (
  <View style={{
    fontFamily: "Times-Italic",
    fontSize: "15px",
    marginTop : "5px"
  }}
   {... props} 
  >
    <Text>
      Amine OUCHIHA{" "}
      <Text
        style={{
          fontSize: "10px",
        }}
      >
        (30 ans)
      </Text>
    </Text>
  </View>
);

const JobNameRender = (props) => (
  <Text
    style={{
      fontFamily: "Times-Italic",
      fontSize: "15px",
      marginTop: "5px",
      borderBottomColor: "#12B4E4",
      borderBottomStyle: "solid",
      borderBottomWidth: "2px",
    }}
    {... props}
  >
    Développeur full stack
  </Text>
);


const ContactRender = (props) => {
  const adresse = "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.";
  const phone = "+33781581021";
  const email = "ouchihaamine@gmail.com";
  const linkedin = "https://fr.linkedin.com/in/amine-ouchiha-608808b3";
  return (
    <View {...props}>
      <InfoLine text={adresse} icon={locationIcon} />
      <InfoLine text={phone} icon={phoneIcon} linkType={"tel"} />
      <InfoLine text={email} icon={emailIcon} linkType={"mailto"} />
      <InfoLine text={linkedin} icon={linkedinIcon} linkType={"url"} />
    </View>
  );
};

const ImageProfilRender = ( props) => (
  <View
    style={{
      width: "20%",
      height: "100%",
    }}
    {...props}
  >
    <View
      style={{
        width: "100%",
        height: "10%",
      }}
    ></View>
    <View  style={{
          width: "100%",
          height: "80%",
          borderColor: "#12B4E4",
          borderStyle: "solid",
          borderWidth: "2px",
          borderLeftWidth: "3px",
          borderRightWidth: "3px",
          borderRadius: "2px",
        }}>
      <Image
        style={{
          marginLeft :"-1px",
          width: "102%",
          height: "102%",
          borderRadius: "2px",
        }}
        src={getFileData(profileImage)}
      />
    </View>
    

    <View
      style={{
        width: "100%%",
        height: "10%",
      }}
    ></View>
  </View>
);

const LeftSectionRender = (props) => {
  return (
    <View
      style={{
        width: "30%",
        height: "100%",
        marginLeft: "5px",
        paddingRight: "5px",
      }}
      {...props}
    >
      <IdentiyRender/>
      <ContactRender style = {{
        marginTop : "10px"
      }}/>
    </View>
  );
};

const RigthSectionRender = (props) => {
  return (
    <View
      style={{
        width: "50%",
        height: "100%",
        marginRight: "5px",
        marginLeft: "5px",
      }}
      {...props}
    >
      <JobNameRender/>
      <Text  style={{
        marginTop: "10px",
        fontSize : "10px",
        marginRight :"5px",
        lineHeight : "1.5px",
      }}>
        Titulaire depuis 2015 d’un Master en Analyse et Conception de Systèmes
        d'Informations Sûrs, je suis intervenu sur diffrents projets de conseils et de
        développements avec des aspects technologiques divers notament sur les
        ecosystemes Node.js/ React.js. Aujourd’hui, je suis à la recherche de
        nouvelles opportunités en tant que développeur et/ou lead-dev.
      </Text>
    </View>
  );
};


// Create styles
const headerStyles = StyleSheet.create({
  height: "150px",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#58585A",
  color: "white",
});
// Create Document Component
export const Header = ( props ) => (
  <View style={headerStyles} {... props}>
    <LeftSectionRender/>
    <ImageProfilRender/>
    <RigthSectionRender/>
  </View>
);
