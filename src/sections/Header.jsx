import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { InfoLine } from "../components/InfoLine";
import { getFileData } from "../utils/read-file";
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";
import linkedinIcon from "../assets/images/linkedin.png";
import profileImage from "../assets/images/profil-image.png";

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
          borderRadius: "3px",
        }}>
      <Image
        style={{
          marginLeft :"-1px",
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
        {overview}
      </Text>
    </View>
  );
};


// Create styles
const headerStyles = StyleSheet.create({
  height: "17%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#58585A",
  color: "white",
  borderBottomColor: "#12B4E4",
  borderBottomStyle: "solid",
  borderBottomWidth: "2px",
});
// Create Document Component
export const Header = ( props ) => (
  <View style={headerStyles} {... props}>
    <LeftSectionRender/>
    <ImageProfilRender/>
    <RigthSectionRender/>
  </View>
);
