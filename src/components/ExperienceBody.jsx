import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { List } from "../components/List";

export const ExperienceBody = ({
  projectName,
  client,
  tecs,
  projectContext,
  projectMissions,
}) => {
  return (
    <View style={{
      marginBottom : "5px"
    }}>
     
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
       {  projectName && <Text
          style={{
            fontSize: "10px",
            color: "#58585A",
            fontFamily: "Times-Bold",
          }}
        >
          Projet :
          <Text
            style={{
              fontSize: "9px",
              fontFamily: "Times-Roman",
            }}
          >
            {projectName}
          </Text>
        </Text> }
        {client && <Text
          style={{
            fontSize: "10px",
            color: "#58585A",
            fontFamily: "Times-Bold",
            marginLeft: "15px",
          }}
        >
          Client :
          <Text
            style={{
              fontFamily: "Times-Roman",
              fontSize: "9px",
            }}
          >
            {client}
          </Text>
        </Text> }
      </View>

      { tecs && <View style={{ marginTop: "4px" }}>
        <Text
          style={{
            fontSize: "10px",
            color: "#58585A",
            fontFamily: "Times-Bold",
          }}
        >
          Environnement technique :
          <Text
            style={{
              fontFamily: "Times-Roman",
              fontSize: "9px",
            }}
          >
            {tecs}
          </Text>
        </Text>
      </View> }

      
      {projectContext && (<View style={{ marginTop: "4px" }}>
        <Text
          style={{
            fontSize: "10px",
            color: "#58585A",
            fontFamily: "Times-Bold",
          }}
        >
          Contexte :
        </Text>
        <Text
          style={{
            color: "#58585A",
            fontFamily: "Times-Roman",
            fontSize: "9px",
            paddingLeft: "10px",
            textAlign: "justify"
          }}
        >
          {projectContext}
        </Text>
      </View>) }

      {projectMissions && (
        <View style={{ marginTop: "4px" }}>
          <Text
            style={{
              fontSize: "10px",
              color: "#58585A",
              fontFamily: "Times-Bold",
            }}
          >
            {" "}
            Missions :{" "}
          </Text>
          <List
            style={{
              color: "#58585A",
              fontFamily: "Times-Roman",
              fontSize: "9px",
              paddingLeft: "10px",
            }}
            listItems={projectMissions}
          />
        </View>
      )}
    </View>
  );
};
