import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { InfoLine } from "../components/InfoLine";
import { getFileData } from "../utils/read-file";
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";
import linkedinIcon from "../assets/images/linkedin.png";
import profileImage from "../assets/images/profil-img.png";

import cvData from "../assets/data/cv";

const {age, overview, phone, linkedin, email, name, adresse}  = cvData;

const IdentiyRender = (props ) => (
  <View style={{
    fontFamily: "Times-Italic",
    fontSize: "15px",
    marginTop : "5px"
  }}
   {... props} 
  >
    <Text>
      {name}
      <Text
        style={{
          fontSize: "10px",
        }}
      >
        ({age} ans)
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
  return (
    <View {...props}>
      <InfoLine text={adresse} icon={locationIcon} />
      <InfoLine text={phone} icon={phoneIcon} linkType={"tel"} />
      <InfoLine text={email} icon={emailIcon} linkType={"mailto"} />
    </View>
  );
};

const ImageProfilRender = ( props) => (
  <View
    style={{
      width: "15%",
      height: "100%",
    }}
    {...props}
  >
    <View
      style={{
        width: "100%",
        height: "3%",
      }}
    ></View>
    <View  style={{
          width: "100%",
          height: "93%",
          borderColor: "#12B4E4",
          borderStyle: "solid",
          borderWidth: "2px",
          borderLeftWidth: "3px",
          borderRightWidth: "3px",
          borderRadius: "5px",
        }}>
      <Image
        style={{
          marginLeft :"-0.5px",
          width: "102%",
          height: "102%",
          borderRadius: "3px",
        }}
        src={getFileData(profileImage)}
      />
    </View>
    

    <View
      style={{
        width: "100%%",
        height: "4%",
      }}
    ></View>
  </View>
);

const LeftSectionRender = (props) => {
  return (
    <View
      style={{
        width: "27%",
        height: "100%",
        marginLeft: "5px",
        paddingRight: "5px",
        marginTop : "5px",
      }}
      {...props}
    >
      <IdentiyRender/>
      <ContactRender style = {{
        marginTop : "10px",
        fontSize : "9px"
      }}/>
    </View>
  );
};

const RigthSectionRender = (props) => {
  return (
    <View
      style={{
        width: "55%",
        height: "100%",
        marginRight: "5px",
        marginLeft: "10px",
        marginTop : "5px",
      }}
      {...props}
    >
      <JobNameRender/>
      <Text  style={{
        marginTop: "10px",
        fontSize : "10px",
        marginRight :"5px",
        lineHeight : "1.5px",
        textAlign : "justify"
      }}>
        {overview}
      </Text>
    </View>
  );
};


// Create styles
const headerStyles = StyleSheet.create({
  height: "15%",
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
