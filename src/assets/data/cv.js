export default {
  name: "Amine OUCHIHA",
  age: 30,
  email: "ouchihaamine@gmail.com",
  adresse: "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.",
  phone: "+33781581021",
  linkedin: "https://fr.linkedin.com/in/amine-ouchiha-608808b3",
  overview:
    "Titulaire d’un Master en Analyse et Conception de Systèmes d'Informations Sûrs, je suis intervenu sur diffrents projets de conseils et de développements avec des aspects technologiques divers notament sur les ecosystemes Node.js/ React.js. Aujourd’hui, je suis à la recherche de nouvelles opportunités en tant que développeur et/ou lead-dev.",
  skills: [
    {
      skillType: "Développement",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "JavaScript, Typescript ",
          skillProgress: 90,
        },
        {
          skillLabel: "React.js ",
          skillProgress: 85,
        },
        {
          skillLabel: "Express, Node.js, Nest.js",
          skillProgress: 75,
        },
        {
          skillLabel: "Java",
          skillProgress: 60,
        },
        {
          skillLabel: "Python",
          skillProgress: 40,
        },
      ],
    },
    {
      skillType: "Data Base",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "SQL, Postgresql, MySQL",
          skillProgress: 70,
        },
        {
          skillLabel: "Mongodb",
          skillProgress: 50,
        },
        {
          skillLabel: "Azure Cosmo-DB",
          skillProgress: 50,
        },
        {
          skillLabel: "Elasticsearch",
          skillProgress: 40,
        },
      ],
    },
    {
      skillType: "DevTools",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "VSCode",
          skillProgress: 70,
        },
        {
          skillLabel: "Git",
          skillProgress: 50,
        },
        {
          skillLabel: "Gitlab , BitBuckets",
          skillProgress: 50,
        },
      ],
    },
    {
      skillType: "DevOps",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "Docker / Docker-compose",
          skillProgress: 70,
        },
        {
          skillLabel: "Kubernate",
          skillProgress: 50,
        },
        {
          skillLabel: "Jenkins",
          skillProgress: 50,
        },
        {
          skillLabel: "Terraform",
          skillProgress: 50,
        },
      ],
    },
    {
      skillType: "Mobile",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "React Native",
          skillProgress: 70,
        },
        {
          skillLabel: "Android",
          skillProgress: 50,
        },
        {
          skillLabel: "IOS",
          skillProgress: 50,
        },
      ],
    },
    {
      skillType: "Anglais",
      skillTypeIcon: require("../images/profil-image.png"),
      skillsList: [
        {
          skillLabel: "Orale",
          skillProgress: 70,
        },
        {
          skillLabel: "Ecrit",
          skillProgress: 50,
        },
      ],
    },
  ],
  experiences: [
     {
      experienceLabel: "Europ Assistance",
      experiencetag: "Jui 2022 - aujourd'hui",
      projectName: " E-claims.",
      client: " Europ Assistance.",
      tecs: " React.js, admin-on-rest, Java 8, Node.js, Bitbucket, Jenkins, AWS Lambda, AWS RDS, loopback3.",
      projectContext:
        "Pour le compte d'Europ Assistance, j'interviens en tant que développeur fullStack sue le projet e-claims, dans une équipe composé de 5 dévloppeur, 1 PO et un Manager. La platforme gére des demande de romboursement pour le compte de diffirent client comme AirBnb et Lastminute et transmet les demande au diffirent fourniseur de couverture.",
      projectMissions: [
        "- Développement et maintenace des fonctionnalités front en React.js.",
        "- Refont du front React.js.",
        "- Développement et maintenace des fonctionnalité back en Java et Loopback ",
        "- Migration Loopback 2 à 3."
     ],
     },
    {
      experienceLabel: "ITNovem (SNCF)",
      experiencetag: "Jan 2021 - Fév 2022",
      projectName: " e-IOT.",
      client: " ITNovem (SNCF).",
      tecs: "Nest.js, React.js, Gitlab, Jenkins, Kubernate, Robot-Framwork, Postgresql, Azure Cloud.",
      projectContext:
        "Pour le compte d'ITNovem, une filiale de la SNCF, et dans le cadre de la refonte du socle de gestion des objets connectés, je suis intervenu en tant que développeur au sein d'une équipe de sept personnes en mode combo.",
      projectMissions: [
        "- Développement des fonctionnalité de configuration, gestion et remonté de données desdes IoT's.",
        "- Ecriture des testes d'intégrations.",
        "- Livraison et gestions des version des différents composants applicatifs."
      ],
    },
    {
      experienceLabel: "Société Générale",
      experiencetag: "Déc 2019 - Déc 2020",
      projectName: " My Digital Workplace.",
      client: " Société Général.",
      tecs: "TypeScript, Node.js, React.js, Gitlab, Openshift, Jenkins, Scrum, SAFE.",
      projectContext:
        "Pour le compte de l'entreprise Société Général, et dans le cadre d’un projet intranet pour le support utilisateur et de centralisation des services Société Général, je suis intervenu en tant que développeur dans un train avec 4 équipes de développement dont une équipe de 5 personnes composé de 3 dev un PR et un Scrum.",
      projectMissions: [
        "- Participation aux différentes cérémonies SAFE.",
        "- Développement des fonctionnalités back et front.",
        "- Tirage de release et participation à la mise en production.",
      ],
    },
    {
      experienceLabel: "Edifixio",
      experiencetag: "Mars 2016 - Oct 2019",
      tecs: "Node.js, TypeScript, Angular, : React.js,Heroku Paas, PostgreSQL, Salesforce, Talend ETL, IBM MDM Infosphere, Java EE, Jalios CMS.",
      projectContext:
        "Pour le compte de la SI Edifixio je suis intérvenu sur des missions diverse pour le compte de plusieur Client comme l'inter mutuelle assistance (IMA) ainsi que Carrefour et la COFREND.",
      projectMissions: [
        "- Réalisation d'une application de dépannage d’urgence.",
        "- Maintenance du référentiel produit Carrefour .",
        "- Réalisation d'une Plateforme web et collaborative pour le compte de la COFREND avec Jalios CMS.",
      ],
    }
    ,
    {
      experienceLabel: "Edifixio (Stage)",
      experiencetag: "Mai 2015 - Nov 2016",
      projectName : " Couche de services ElasticSearch.",
      tecs: "Java EE, Spring (Core, MVC,AOP), ElasticSearch.",
      projectContext:
        "Pour mon stage de fin d'études, j'ai eu à réaliser une API configurable en java pour interroger un index Elasticsearch et générer des facettes dynamiques de recherche.",
      projectMissions: [
        "- Étude de l’état de l’art sur les moteurs de recherches.",
        "- Conception et réalisation d'une API configurable utilisant des facettes sur ElasticSearch en Java.",
      ],
      dislayPage : 2
    }
  ],
};
