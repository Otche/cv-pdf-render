import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { ExperienceHeader } from "../components/ExperienceHeader";
import { List } from "../components/List";

export const ExperienceSection = (props) => (
    <View
      style={{
        marginTop: "20px",
        marginLeft: "5px",
        width: "95%",
      }}
    >
      <ExperienceHeader  label={"Société Générale"} tag={"Déc 2019 - Déc 2020"} />

      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
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
              {" "}
              My Digital Workplace.
            </Text>
          </Text>
          <Text
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
              {" "}
              Société Général.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: "4px" }}>
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
              {" "}
              TypeScript, Node.js, React.js, Gitlab, Openshift, Jenkins, Scrum
              SAFE.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: "4px" }}>
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
                paddingLeft : "10px"
              }}
            >
              Pour le compte de l'entreprise Société Général, et dans le cadre
              d’un projet intranet pour le support utilisateur et de
              centralisation des services Société Général, je suis intervenu en
              tant que développeur dans un train avec 4 équipes de développement
              dont une équipe de 5 personnes composé de 3 dev un PR et un Scrum.
            </Text>
        </View>

        <View style={{ marginTop: "4px" }}>
            <Text style={{
              fontSize: "10px",
              color: "#58585A",
              fontFamily: "Times-Bold",
            }}> Missions : </Text>
            <List style={{
                color: "#58585A",
                fontFamily: "Times-Roman",
                fontSize: "9px",
                paddingLeft : "10px"
              }}
              listItems = {[
                "Participation aux différentes cérémonies SAFE.",
                "Développement des fonctionnalités back et front.",
                "Tirage de release et participation à la mise en production.",
              ]}/>
        </View>
      </View>
    </View>
);
