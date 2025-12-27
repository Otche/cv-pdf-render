import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { List } from "../components/List";

const InfoComp = ({ title, info, style, children, contentStyle }) => {
  return info ? (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "3px",
        alignItems: "flex-start",
        ...style,
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: "10px",
            color: "#58585A",
            fontFamily: "Times-Bold",
          }}
        >
          {title} :
        </Text>
      )}
      {info && (
        <Text
          style={{
            fontFamily: "Times-Roman",
            fontSize: "9px",
            maxWidth: "80%",
            color: "#282829",
            ...contentStyle,
          }}
        >
          {info} {children && children}
        </Text>
      )}
    </View>
  ) : (
    <></>
  );
};

export const ExperienceBody = ({
  projectName,
  client,
  tecs,
  link,
  role,
  projectContext,
  projectMissions,
}) => {
  return (
    <View
      style={{
        marginBottom: "5px",
        rowGap:"1px"
      }}
    >
      <InfoComp title="Projet" info={projectName}>
        {link && (
          <Link style={{ color: "#58585A" }} src={link}>
            {link}
          </Link>
        )}
      </InfoComp>
      <InfoComp title="Client" info={client} />
      <InfoComp title="Rôle" info={role} />
      <InfoComp title="Environnement" info={tecs} />
      <InfoComp
        title="Contexte"
        info={projectContext}
        contentStyle={{ textAlign: "justify", maxWidth: "88%"}}
      />
      <View>
         <Text
        style={{
          fontSize: "10px",
         color: "#58585A",
          fontFamily: "Times-Bold",
        }}
      >
        Missions :
      </Text>
      <List
        style={{
          color: "#282829",
          fontFamily: "Times-Roman",
          fontSize: "9px",
          paddingLeft: "10px",
        }}
        listItems={projectMissions}
      />
      </View>
    </View>
  );
};

