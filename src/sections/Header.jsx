import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { InfoLine } from "../components/InfoLine";
import { getFileData } from "../utils/read-file";
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";
import webIcon from "../assets/images/web.png";
import profileImage from "../assets/images/amine-photo.jpeg";
import { DataContext } from "./Cv";



const IdentiyRender = (props ) => {
  const data = useContext(DataContext);
  const {age, name}  = data;
  return <View style={{
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
}

const JobNameRender = (props) => {
  return <Text
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
    Consultant développeur full-stack
  </Text>
}


const ContactRender = (props) => {
  const data = useContext(DataContext);
  const { phone, email,adresse, site}  = data;
  return (
    <View {...props}>
      <InfoLine text={adresse} icon={locationIcon} />
      <InfoLine text={phone} icon={phoneIcon} linkType={"tel"} />
      <InfoLine text={email} icon={emailIcon} linkType={"mailto"} />
      <InfoLine text={site} icon={webIcon} linkType={"url"}  />
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
          height: "65%",
          marginTop : "10px",
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
        marginTop : "5px",
        marginBottom :"2px", 
        fontSize : "9px"
      }}/>
    </View>
  );
};

const RigthSectionRender = (props) => {
  const data = useContext(DataContext);
  const {overview}  = data;
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
        marginTop: "5px",
        fontSize : "9px",
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
  height: "18%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#58585A",
  color: "white",

});
// Create Document Component
export const Header = ( props ) => {
  return <View style={headerStyles} {... props } >
    <LeftSectionRender/>
    <ImageProfilRender/>
    <RigthSectionRender/>
  </View>
};
