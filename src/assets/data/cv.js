export default {
  name: "Amine OUCHIHA",
  age: 33,
  email: "contat@amine-ouchiha.com",
  site: "https://amine-ouchiha.com",
  adresse: "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.",
  phone: "+33781581021",
  overview: `Titulaire d’un Master en Analyse et Conception de Systèmes d'Informations Sûrs;
  j’interviens depuis plusieurs années sur des projets de conseil et de développement au sein d’environnements variés.
  J'ai fait le choix de m'orienté principalement vers l'ecosystémes Node.js / React.js pour ça polyvalence et ça communoté, 
  toute en pratiquant une veille sur les autres ecosystémes. 
  Aujourd’hui, je suis à la recherche de nouvelles opportunités  où je pourrai mettre à profit mon savoir-faire 
  technique et mon goût pour les solutions élégantes et efficaces.`,
  skills: [
    {
      type: "Langages de programation",
      icon: require("../images/code.png"),
      skillsList: [
        {
          label: "Javascript / Typescript ",
          progress: 80,
        },
        {
          label: "Java 8",
          progress: 60,
        },
        {
          label: "Python",
          progress: 50,
        },
        {
          label: "C / C++",
          progress: 40,
        },
      ],
    },
    {
      type: "Interface Web",
      icon: require("../images/front.png"),
      skillsList: [
        {
          label : "HTML5 / CSS3",
          progress: 80,
        },
        {
          label: "React.js",
          progress: 80,
        },
        {
          label: "Next.js",
          progress: 40,
        },
         {
          label: "Material UI",
          progress: 70,
        },
        {
          label: "Angular",
          progress: 30,
        }
      ],
    },
    {
      type: "Développement Back-end",
      icon: require("../images/back.png"),
      skillsList: [
        {
          label: "Node.js",
          progress: 75,
        },
        {
          label: "Express.js",
          progress: 70,
        },
        {
          label: "Nest.js",
          progress: 70,
        },
        {
          label: "RESTful API",
          progress: 70,
        },
        {
          label: "GraphQL",
          progress: 40,
        }
      ],
    },

    {
      type: "Mobile",
      icon: require("../images/android-logo.png"),
      dislayPage: 2,
      skillsList: [
        {
          label: "React Native",
          progress: 60,
        },
        {
          label: "Android",
          progress: 40,
        },
        {
          label: "IOS",
          progress: 30,
        },
      ],
    },
    {
      type: "Base de données",
      icon: require("../images/database.png"),
      skillsList: [
        {
          label: "SQL / PGSQL",
          progress: 70,
        },
        {
          label: "MongoDB",
          progress: 50,
        }
      ],
    },
    {
      type: "Tests",
      icon: require("../images/testing.png"),
      skillsList: [
        {
          label: "Jest",
          progress: 60,
        },
        {
          label: "Robot Framework",
          progress: 50,
        },
        {
          label: "Gherkin cucumber",
          progress: 40,
        },
      ],
    },
    {
      type: "Outils de développements",
      icon: require("../images/visual-studio.png"),
      skillsList: [
        {
          label: "VSCode",
          progress: 60,
        },
        {
          label: "Git",
          progress: 70,
        },
        {
          label: "Copilot / Cursor AI",
          progress: 40,
        },
        {
          label: "Webpack",
          progress: 50,
        }
      ],
      dislayPage: 2,
    },
    {
      type: "DevOps",
      icon: require("../images/devops.png"),
      skillsList: [
        {
          label: "Docker",
          progress: 50,
        },
        {
          label: "Jenkins",
          progress: 40,
        },
        {
          label: "Kubernates",
          progress: 40,
        },
        {
          label: "Terraform",
          progress: 30,
        },
        {
          label: "GCP",
          progress: 30,
        },
        {
          label: "AWS",
          progress: 30,
        },
      ],
      dislayPage: 2,
    },

    {
      type: "Autres compétences",
      icon: require("../images/more.png"),
      skillsList: [
        {
          label: "Scrum Agile",
          progress: 70,
        },
        {
          label: "SaFe Agile",
          progress: 50,
        },
        {
          label: "Elasticsearch",
          progress: 40,
        },
        {
          label: "Kafka",
          progress: 40,
        },
        {
          label: "Talend ETL",
          progress: 40,
        },
        {
          label: "MQL5",
          progress: 40,
        },
      ],
      dislayPage: 2,
    },

    {
      type: "Anglais",
      icon: require("../images/english-language.png"),
      dislayPage: 2,
      skillsList: [
        {
          label: "Orale",
          progress: 50,
        },
        {
          label: "Ecrit",
          progress: 70,
        },
      ],
    },
  ],
  experiences: [
    {
      label: "TEC-INVEST",
      tag: "Mai 2024 - Aujourd’hui",
      projects: [
        {
          projectName: "Cvtec-office",
          link : "https://cvtec-office.com",
          role: "CEO / Développeur",
          tecs: "Nest.js, Next.js, Material UI, Jest, Puppeteer, Firebase",
          projectContext: `Avec un partenaire on à créer une Application de génération de CV à partir de templates, avec des options de personnalisation avancées.`,
          projectMissions: [
            "- Développement de l’UI avec Next.js.",
            "- Gestion des utilisateurs et génération des CV avec Nest.js.",
            "- Création des templates de CV.",
          ],
        },
      ],
    },
    {
      style: {
        marginTop: "5px",
      },
      label: "Europ Assistance",
    
      tag: "Jui 2022 - Déc 2023",
      projects: [
        {
          projectName: "E-Claims ",
          link: "https://services.europ-assistance.fr",
          role: "Développeur React.js / Java 8 / Node.js",
          tecs: "React.js, Webpack, admin-on-rest, Material-UI, Java 8, Node.js, Bitbucket, Jenkins, AWS Lambda, AWS RDS, loopback 3 et 4.",
          projectContext: `Dans une équipe composée de cinq développeurs, un PO et un Manager. j'ai participé au développement d'E-claim, une plateforme qui gère des demandes de remboursements pour le compte de différents clients, comme AirBnb ou Lastminute et les transmet aux différents fournisseurs de couvertures (assurances).
          Le projet a une partie back-office (E-conf),où on peut configurer les différentes fonctionnalités du front-office. Le framework de la gestion du projet est un scrum allégé ( Daily / Poker planning ).`,
          projectMissions: [
            "- Développement et maintenance des fonctionnalités front en React.js.",
            "- Refonte de l'UI en React.js en se basant sur du Material-UI.",
            "- Gestion et optimisation du bundling avec Webpack.",
            "- Développement et maintenance des API backend (Java 8/ Spring).",
            "- Maintenance du back-office en Admin-on-rest et Loopback 3.",
            "- Migration de Loopback 3 à Loopback 4 du backend du back-office.",
            "- Tirage et gestion de versions (Git / Bitbucket)",
            "- Déploiments et testes avec du Jenkins sur des fonctions AWS Lambda."
          ],
        },
      ],
    },
    {
      style: {
        marginTop: "5px",
      },
      label: "ITNovem (SNCF)",
      tag: "Jan 2021 - Fév 2022",
      projects: [
        {
          projectName: "e-IOT.",
          role: "Développeur Node.js / Nest.js",
          tecs: "Nest.js, Node.js, TypeORM, React.js, Gitlab, Jenkins, Kubernate, Robot-Framwork, Postgresql, Azure Cloud, IOT, CosmoDB.",
          projectContext: `Dans le cadre de la refonte du socle de gestion des objets connectés, je suis intervenu en tant que développeur au sein d'une équipe de sept personnes en mode de géstion de projet Combo.
            La plateforme permet de configurer différents types d'objets connectés afin de déterminer leur mode de connexion, ainsi que le décodage des flux de données, puis les regrouper en ensembles logiques.`,
          projectMissions: [
            "- Développement de décodeurs de trame des IoT's sous forme de libreries en Typescript.",
            "- Développement de fonctionnalités de configuration sous forme de modules Nest.js.",
            "- Expositions des fonctionnalités via des CRUD RESTful sur Nest.js.",
            "- Traitement des remontées de données en temps-reél des IoTs.",
            "- Écriture de tests d'intégrations en utilisant le framework Robot-Framework.",
            "- Tirage de versions des différents composants applicatifs (Git / Gitlab).",
            "- Déploiment des composants sur les envirenements de pre-prod en utilisant Jenkins."
          ],
        },
      ],
   
    },
    {
      style: {
        marginTop: "0px",
      },
      label: "Société Générale",
      tag: "Déc 2019 - Déc 2020",
      projects: [
        {
          projectName: "My Digital Workplace.",
          role: "Développeur Node.js / React.js ",
          tecs: "TypeScript, Node.js, Nest.js, TypeORM, React.js, Gitlab, Openshift, Jenkins, Scrum, SAFE.",
          projectContext: `Dans le cadre d’un projet intranet pour le support utilisateur, je suis intervenu en tant que développeur dans une feature team de cinq personnes composée de trois dev, un PR et un Scrum, dans un train composé de quatre équipes de développements.
          Le projet avait comme objectif de créer une platforme qui agréger tous les services dédié aux collaborator, comme l'allocation de PC, de badges ou de machine virtuelle, la documentation et la création de liste de diffusions de mails`,
          projectMissions: [
            "- Participation aux différentes cérémonies SAFe comme le Program Increment au sein du train.",
            "- Développement des Api's back Node.js Avec Le framwork Nest.js et L'ORM TypeORM.", 
            "- Développement du Front en React.js en TypeScript.",
            "- Tirage de versions et participation à la mise en production (Git / Gitlab).",
          ],
        },
      ],
      dislayPage: 2,
      
    },
    {
      style: {
        marginTop: "10px",
      },
      label: "EDIFIXIO",
      tag: "Mars 2016 - Oct 2019",
      projects: [
        {
          projectName: " Référentiel produit Carrefour.",
          client: "Carrefour. Fév-Sept 2019",
          role: "Développeur Java / IBM MDM ",
          tecs: "IBM MDM Infosphere, Java 8, Linux.",
          projectContext: `Dans le cadre d’un projet référentiel de données utilisant la solution IBM MDM, je suis intervenu dans une équipe de six personnes en tant que consultant développeur Java sur la solution.`,
          projectMissions: [
            "- Mise en place de scripts Trigo Script pour import/ export de données.",
            "- Étude et Réécriture de routines d'import / export Java, dans le but d'optimiser les performances.",
            "- Réalisation d'une documentation sur l'architecture applicative.",
          ],
        },
        {
          projectName: " POC Intentionality.",
          client: " Interne Edifixio. Oct 2018 - Jan 2019",
          role: "Développeur React.js ",
          tecs: " React.js, Redux, IBM Bluemix,Composants Bootstrap.",
          projectContext: `Dans le cadre d'un projet en interne de création d'une IA pour la prédiction d'impact sur les réseaux sociaux, j'ai participé à la réalisation du front de l'application au sein d'une équipe de quatre personnes.`,
          projectMissions: [
            "- Conception, découpage et réalisation des composants React.js .",
            "- Appel des services distant et intégration des services sur le front.",
          ],
        },
        {
          projectName: " Application React Native - Salesforce (CXO).",
          client: " Salesforce. Aout-Oct 2018",
          role: "Développeur React Native / Saleforce Apex ",
          tecs: " React Native, Salesforce, Apex, Push notification, Jest.",
          projectContext: `Dans un projet en interne de création d'une IA pour la prédiction d'impact sur les réseaux sociaux.
          J'ai participé à la réalisation du front de l'application au sein d'une équipe de quatre personnes.`,
          projectMissions: [
            "- Migration des services React native côté Back (APEX) pour réduire le nombre d'appels intermédiaires serveur.",
            "- Test Unitaire de services (Code Coverage Salesforce) et des composants React Native avec Jest et Enzyme.",
            "- Mise en place de Push notifications et création des triggers APEX pour les générer.",
          ],
        },
        {
          projectName: " Plateforme de dépannage en ligne.",
          link : "https://www.depannagehelp.com/",
          client: "Inter Mutuelle Assistance (IMA). Fev 2017 - Juil 2018",
          role: "Développeur fullstack ",
          tecs: `Node.js, TypeScript, Angular, Angular.js, Gulp, Heroku Paas, add-on Heroku, Pipe Heroku, PostgreSQL, Mocha, Salesforce, Talend ETL, platforme de, paiment Sogenactif.`,
          projectContext: `On a réalisé une application de dépannage d’urgence en ligne dans les domaines de l’automobile et de l’habitation.
          Sur ce projet, j’ai mené une mission de développeur puis de tech-lead.`,
          projectMissions: [
            "- Conception des services web RESTful Avec Node.js en Typescript.",
            "- Interfaçage avec Le CRM Salesforce via Heroku Connect.",
            "- Implémentation de l'UI en utilisant Angular.",
            "- Mise en place de la CI avec Heroku flow et de la CD avec remote views.",
          ],
        },
        {
          projectName: "Plateforme web et collaborative Jalios CMS.",
          link: "https://www.cofrend.com/",
          client: "COFREND. Mars 2016 - Jan 2017",
          role: "Développeur Java/Jalios ",
          tecs: `Jalios, Java JEE,  JavaScript, JQuery.`,
          projectContext: `Pour le compte de la Confédération Française pour les Essais Non Destructifs (COFREND), et au sein d'une équipe de trois personnes. 
            J'ai participé à la réalisation d'une application web pour la géstion des formation et la prise de redez-vous pour les cetification ainsi que les paiment.`,
          projectMissions: [
            "- Création de types de formulaires et gestion des règles métiers.",
            "- Création des pages portails et gestion de la navigation sur le site.",
            "- Interfaçage avec un service de paiement en ligne (avec la solution Monetico).",
          ],
        },
      ],
      dislayPage: 2,
    },
  ],
  fomations: [
    {
      label: "Université de Versaille (UVSQ)",
      tag: "2013 - 2015",
      description: "Master en Analyse et conception de Systeme d'information Sûrs.",
    },
    {
      label: "Université de Béjaïa (UAMB)",
      tag: "2010 - 2013",
      description: "Licence en informatique.",
    },
  ],
};
