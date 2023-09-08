export default {
  name: "Amine OUCHIHA",
  age: 30,
  email: "ouchihaamine@gmail.com",
  adresse: "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.",
  phone: "+33781581021",
  overview:
    `Titulaire d’un Master en Analyse et Conception de Systèmes d'Informations Sûrs, je suis intervenu dans diffrents projets de conseils et de développements avec des aspects technologiques divers, notament les ecosystemes Node.js et React.js .Aujourd’hui, je suis à la recherche de nouvelles opportunités en tant que développeur et/ou lead-dev.`,
  skills: [
    {
      skillType: "Développement",
      skillTypeIcon: require("../images/software.png"),
      skillsList: [
        {
          skillLabel: "JavaScript, Typescript ",
          skillProgress: 85,
        },
        {
          skillLabel: "React.js ",
          skillProgress: 80,
        },
        {
          skillLabel: "Node.js",
          skillProgress: 75,
        },
        {
          skillLabel: "Express.js",
          skillProgress: 70,
        },
        {
          skillLabel: "Nest.js",
          skillProgress: 70,
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
      skillType: "Databases",
      skillTypeIcon: require("../images/database.png"),
      skillsList: [
        {
          skillLabel: "SQL",
          skillProgress: 70,
        },
        {
          skillLabel: "Postgresql/ PGSQL",
          skillProgress: 60,
        },
        {
          skillLabel: "MySQL ",
          skillProgress: 55,
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
      skillType: "Dev tools",
      skillTypeIcon: require("../images/visual-studio.png"),
      skillsList: [
        {
          skillLabel: "VSCode",
          skillProgress: 70,
        },
        {
          skillLabel: "Git",
          skillProgress: 70,
        },
        {
          skillLabel: "Webpack",
          skillProgress: 60,
        },
        {
          skillLabel: "Maven",
          skillProgress: 50,
        },
        {
          skillLabel: "BitBuckets",
          skillProgress: 50,
        },
        {
          skillLabel: "Gitlab",
          skillProgress: 50,
        },
      ],
    },
    {
      skillType: "DevOps",
      skillTypeIcon: require("../images/devops.png"),
      skillsList: [
        {
          skillLabel: "Docker",
          skillProgress: 70,
        },
        {
          skillLabel: "Linux / Shell",
          skillProgress: 70,
        },
        {
          skillLabel: "Jenkins",
          skillProgress: 50,
        },
        {
          skillLabel: "Kubernate",
          skillProgress: 40,
        },
        {
          skillLabel: "Terraform",
          skillProgress: 40,
        },
        {
          skillLabel: "Heroku PaaS",
          skillProgress: 40,
        },
        {
          skillLabel: "AWS",
          skillProgress: 30,
        },
      ],
      dislayPage : 2
    },
    {
      skillType: "Mobile",
      skillTypeIcon: require("../images/android-logo.png"),
      skillsList: [
        {
          skillLabel: "React Native",
          skillProgress: 60,
        },
        {
          skillLabel: "Android",
          skillProgress: 50,
        },
        {
          skillLabel: "IOS",
          skillProgress: 40,
        },
      ],
    },
    ,
    {
      skillType: "Compétence divers",
      skillTypeIcon: require("../images/more.png"),
      skillsList: [
        {
          skillLabel: "Scrum",
          skillProgress: 70,
        },
        {
          skillLabel: "REST API",
          skillProgress: 70,
        },
        {
          skillLabel: "Test unitaire",
          skillProgress: 70,
        },
        {
          skillLabel: "Test d'integration",
          skillProgress: 70,
        },
        {
          skillLabel: "GraphQL",
          skillProgress: 40,
        },
        {
          skillLabel: "Salceforce Apex / Ligthning",
          skillProgress: 40,
        },
        {
          skillLabel: "PHP",
          skillProgress: 50,
        },
        {
          skillLabel: "C/C++",
          skillProgress: 50,
        },
      ],
      dislayPage : 2
    },
    {
      skillType: "Anglais",
      skillTypeIcon: require("../images/english-language.png"),
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
      dislayPage : 2
    },
  ],
  experiences: [
     {
      style : {
        marginTop : "10px"
      },
      experienceLabel: "Europ Assistance",
      experiencetag: "Jui 2022 - aujourd'hui",
      projects : [{
        projectName: " E-Claims.",
        client: " Europ Assistance.",
        tecs: " React.js, admin-on-rest, Material-UI, Java 8, Node.js, Bitbucket, Jenkins, AWS Lambda, AWS RDS, loopback3, loopback4",
        projectContext:
          `Pour le compte d'Europ Assistance, j'interviens en tant que développeur fullStack sur le projet e-claims, dans une équipe composée de 5 développeurs, 1 PO et un Manager.
          La plateforme gère des demandes de remboursements pour le compte de différents clients comme AirBnb ou Lastminute et les transmet aux différents fournisseurs de couvertures
          (assurance).
          Le projet a une partie back-office (E-conf) ou on peux configurer les différentes fonctionnalités du front-office.
          Le framwork de la gestion du projet est un scrum très alléger (daily / poker planing)`,
        projectMissions: [
          "- Développement et maintenance des fonctionnalités front en React.js .",
          "- Refonte du front React.js .",
          "- Développement et maintenance des fonctionnalités backend Java .",
          "- Développement et maintenance des fonctionnalités back-office admin-on-rest / Loopback 3 .",
          "- Migration de Loopback 3 à Loopback 4 ."
       ],
      }],
     
     },
    {
      style : {
        marginTop : "10px"
      },
      experienceLabel: "ITNovem (SNCF)",
      experiencetag: "Jan 2021 - Fév 2022",
      projects : [{
        projectName: " e-IOT.",
        client: " ITNovem (SNCF).",
        tecs: "Nest.js, Node.js, React.js, Gitlab, Jenkins, Kubernate, Robot-Framwork, Postgresql, Azure Cloud, IOT.",
        projectContext:
          `Pour le compte d'ITNovem, une filiale de la SNCF, et dans le cadre de la refonte du socle de gestion des objets connectés,
          je suis intervenu en tant que développeur au sein d'une équipe de 7 personnes en mode combo. 
          La platfome pérmet de configurer différents types d'objets connectés afin de déterminer leur mode de connexion et
          de décodé leur flux de données, puis de les regrouper en ensemble logique et d'utiliser leurs données pour faire des calculs.`,
        projectMissions: [
          "- Développement des décodeurs.",
          "- Développement des fonctionnalités de configuration, gestion et remontée de données des IoT's.",
          "- Écriture des tests d'intégrations end-to-end en utilisant.Robot-Framwork",
          "-  Tirage de versions des différents composants applicatifs."
        ],
      }],
    
    },
    {
      style : {
        marginTop : "10px"
      },
      experienceLabel: "Société Générale",
      experiencetag: "Déc 2019 - Déc 2020",
      projects : [{
        projectName: " My Digital Workplace.",
        client: " Société Général.",
        tecs: "TypeScript, Node.js, React.js, Gitlab, Openshift, Jenkins, Scrum, SAFE.",
        projectContext:
          `Pour le compte de l'entreprise Société Générale, et dans le cadre d’un projet intranet pour
          le support utilisateur et de centralisation des services Société Générale,
          je suis intervenu en tant que développeur, dans un train avec 4 équipes de développements,
          dont une équipe de 5 personnes composée de 3 dev, un PR et un Scrum.`,
        projectMissions: [
          "- Participation aux différentes cérémonies SAFE.",
          "- Développement des fonctionnalités back et front.",
          "- Tirage de release et participation à la mise en production.",
        ],
      }],
     
    },
    {
      style : {
        marginTop : "10px"
      },
      experienceLabel: "EDIFIXIO (CDI)",
      experiencetag: "Mars 2016 - Oct 2019",
      projects : [
        {
          projectName: " Référentiel produit Carrefour.",
          client: " Carrefour. Fév-Sept 2019",
          tecs: "IBM MDM Infosphere, Java 8, Linux.",
          projectContext:
            `Pour le compte de l'entreprise Carrefour, et dans le cadre d’un
            projet référentiel de données utilisant la solution IBM MDM, je
            suis intervenu dans une équipe de six personnes en tant que
            consultant développeur Java sur la solution.`,
          projectMissions: [
            "- Mise en place de scripts TrigoScript pour import/ export de données.",
            "- Étude et Réécriture de routine d'import / export Java dans le but d'optimiser les performances.",
            "- Réalisation d'une documentation sur l'architecture applicative et de déploiement du projet.",
          ],
        },
        {
          projectName: " POC Intentionality.",
          client: " Interne Edifixio. Oct 2018 - Jan 2019",
          tecs: "React.js, Redux, IBM Bluemix,Composants Bootstrap.",
          projectContext:
            `Dans un projet en interne de création d'une IA pour la
            prédiction d'impact sur les réseaux sociaux, j'ai participé à la
            réalisation du front de l'application au sein d'une équipe de
            quatre personnes.`,
          projectMissions: [
            "- Conception, découpage et réalisation des composants React.js .",
            "- Appel des services distant et intégration des services sur le front.",
          ],
        },
        {
          projectName: " Application React Native - Salesforce (CXO).",
          client: " Salesforce. Aout-Oct 2018",
          tecs: "React Native, Salesforce, Apex, Push notification, Jest.",
          projectContext:
            `Pour le compte d'un projet pilote en partenariat avec
            Salesforce, j'ai participé à la réalisation et à la maintenance de
            certaines fonctionnalités d'un réseau sociale d'entreprise au
            sein d'une équipe de quatre personnes.`,
          projectMissions: [
            "- Migration des services React native coté Back (APEX) pour réduire le nombre d'appels intermédiaires serveur.",
            "- Test Unitaire de services (Code Covrage Salesforce) et des composants ReactNative avec Jest et Enzyme..",
            "- Mise en place des Push notifications et création des trigguers APEX pour les intercepter.",
          ],
        },
        {
          projectName: " Plateforme de dépannage en ligne.",
          client: " Inter Mutuelle Assistance (IMA). Mai 2017 - Juil 2018",
          tecs: `Node.js, TypeScript, Angular,
          Angular.js, Gulp, Heroku Paas, add-on Heroku, Pipe Heroku,
          PostgreSQL, Mocha, Salesforce, Talend ETL, platforme de
          paiment Sogenactif.`,
          projectContext:
            `Pour le compte de l'Inter Mutuelle Assistance (IMA) basée à
            Niort, on a réalisé une application de dépannage d’urgence en
            ligne dans les domaines de l’automobile et de l’habitation. Sur
            ce projet, j’ai mené une mission de développeur puis de tech-lead.`,
          projectMissions: [
            "- Conception des services web.",
            "- Conception et implémentation des clients web.",
            "- Administration des environnements sur Heroku PaaS.",
            "- Mise en place d’un déploiement avec Heroku flow et des remotes views.",
          ],
        },
        {
          projectName: " Plateforme web et collaborative Jalios CMS.",
          client: " COFREND. Mars 2016 - Jan 2017",
          tecs: `Jalios - Java JEE - JavaScript - JQuery.`,
          projectContext:
            `Pour le compte de la Confédération Française pour les Essais
            Non Destructifs (COFREND), et au sein d'une équipe de 3
            personnes, j'ai participé à la réalisation d'une application web
            collaborative.`,
          projectMissions: [
            "- Création de types de contenus et gestion de leurs affichages.",
            "- Création de types de formulaires et gestion des règles métiers.",
            "- Création des pages portails et gestion de la navigation dans le site.",
            "- Interfaçage avec un service de paiement en ligne (avec la solution Monitico).",
          ],
        }
      ],
        dislayPage : 2
    
    }
    ,
    {
      experienceLabel: "EDIFIXIO - Stage fin d'études",
      experiencetag: "Mai 2015 - Nov 2016",
      projects : [{
        projectName : " Couche de services Elasticsearch.",
        tecs: "Java EE, Spring (Core, MVC,AOP), Elasticsearch.",
        projectContext:
          "Pour mon stage de fin d'études, j'ai eu à réaliser une API configurable en java pour interroger un index Elasticsearch et générer des facettes dynamiques de recherche.",
        projectMissions: [
          "- Étude de l’état de l’art sur les moteurs de recherches.",
          "- Conception et réalisation d'une API configurable utilisant des facettes sur Elasticsearch en Java.",
        ],
      }],
     
      dislayPage : 3
    }
  ],
};
