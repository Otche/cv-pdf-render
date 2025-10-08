export default {
  name: "Amine OUCHIHA",
  age: 33,
  email: "contat@amine-ouchiha.com",
  site: "https://amine-ouchiha.com",
  adresse: "180 BD Gabriel Péri, 93110, Rosny-Sous-Bois.",
  phone: "+33781581021",
  overview: `Titulaire d'un Master en Analyse et Conception de Systèmes d'Informations Sûrs, j'interviens depuis plusieurs années sur des projets de conseil et de développement au sein d'environnements techniques variés. 
  J'ai choisi de concentrer mon expertise sur l'écosystème Node.js / React.js, séduit par sa polyvalence et la richesse de sa communauté. Je reste toutefois attentif aux évolutions des autres technologies afin de conserver une vision globale et moderne du développement.
  Aujourd'hui, je souhaite rejoindre une équipe où je pourrai mettre à profit mes compétences.`,
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
      tag: "Mai 2024 - Aujourd'hui",
      projects: [
        {
          projectName: "CVTEC-OFFICE",
          link : "https://cvtec-office.com",
          role: "CEO / CTO",
          tecs: "Nest.js, Next.js, Material UI, Jest, Puppeteer, Firebase.",
          projectContext: `En collaboration avec un développeur partenaire, nous avons conçu une application dédiée à la création et à la génération de CV à partir d'un ensemble de modèles personnalisables.
          Elle offre de nombreuses options avancées de personnalisation, permettant à chaque utilisateur de produire un CV à la fois professionnel, unique et parfaitement adapté à son profil.`,
          projectMissions: [
            "- Structuration des données relatives aux CV, aux thèmes et aux autres éléments de la plateforme.",
            "- Conception et intégration des différents templates de CV.",
            "- Développement et mise en place des API avec Nest.js.",
            "- Réalisation de l'interface utilisateur avec Next.js et Material UI, permettant la saisie des informations et la personnalisation du thème des CV.",
            "- Gestion complète des utilisateurs et des mécanismes d'authentification, incluant l'accès standard et le SSO."
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
          projectName: "E-Claims.",
          link: "https://services.europ-assistance.fr",
          role: "Développeur React.js / Java 8 / Node.js.",
          tecs: "React.js, Webpack, admin-on-rest, Material-UI, Java 8, Node.js, Bitbucket, Jenkins, AWS Lambda, AWS RDS, loopback 3 / 4.",
          projectContext: `Au sein d'une équipe composée de cinq développeurs, d'un Product Owner et d'un Manager, j'ai participé au développement d'E-Claim, une plateforme de gestion des demandes de remboursement pour le compte de clients tels qu'Airbnb ou Lastminute, avec transmission automatique des dossiers aux différents assureurs partenaires.
          Le projet comprend une interface back-office (E-conf) permettant la configuration des fonctionnalités du front-office.
          La gestion du projet s'appuyait sur une méthodologie Scrum allégée, intégrant notamment les daily meetings et les sessions de poker planning.`,
          projectMissions: [
          "- Refonte complète de l'interface utilisateur en React.js, basée sur le framework Material-UI.",
          "- Gestion et optimisation du processus de bundling avec Webpack.",
          "- Développement et maintenance des API backend en Java 8 / Spring.",
          "- Maintenance du back-office construit avec Admin-on-rest et Loopback 3.",
          "- Migration du backend du back-office de Loopback 3 vers Loopback 4.",
          "- Gestion des versions et branches via Git / Bitbucket.",
          "- Déploiement et tests automatisés à l'aide de Jenkins, sur des fonctions AWS Lambda."
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
          projectContext: `Dans le cadre de la refonte du socle de gestion des objets connectés, j'ai intégré une équipe de sept personnes travaillant selon une approche de gestion de projet Combo.
            La plateforme développée repose sur un ensemble d'API permettant de configurer différents types d'objets connectés, de souscrire à leurs flux de données et de les regrouper en ensembles logiques pour une gestion centralisée et cohérente..`,
          projectMissions: [
            "- Développement de décodeurs de trames IoT sous forme de librairies TypeScript.",
            "- Conception de modules de configuration intégrés à l'architecture Nest.js.",
            "- Exposition des fonctionnalités via des CRUD RESTful développés avec Nest.js.",
            "- Traitement en temps réel des données émises par les objets connectés.",
            "- Rédaction de tests d'intégration à l'aide du framework Robot Framework.",
            "- Gestion des versions des différents composants applicatifs avec Git / GitLab.",
            "- Déploiement des composants sur les environnements de pré-production via Jenkins."
          ],
        },
      ],
   
    },
    {
      style: {
        marginTop: "2px",
      },
      label: "Société Générale",
      tag: "Déc 2019 - Déc 2020",
      projects: [
        {
          projectName: "My Digital Workplace.",
          role: "Développeur Node.js / React.js.",
          tecs: "TypeScript, Node.js, Nest.js, TypeORM, React.js, Gitlab, Openshift, Jenkins, Scrum, SAFE.",
          projectContext: `J'ai intégré une équipe composée de trois développeurs, d'un Product Owner et d'un Scrum Master, au sein d'un train rassemblant quatre équipes.
          Le projet My Digital Workplace avait pour objectif de concevoir une plateforme unifiée regroupant l'ensemble des services destinés aux collaborateurs : allocation de matériel (PC, badges, machines virtuelles), accès à la documentation, et gestion des listes de diffusion pour les communications internes.`,
          projectMissions: [
          "- Participation aux différentes cérémonies SAFe, notamment les Program Increments, au sein du train de développement.",
          "- Développement des API backend en Node.js, avec le framework Nest.js et l'ORM TypeORM.",
          "- Conception et implémentation du front-end en React.js avec TypeScript.",
          "- Gestion des versions et participation aux mises en production via Git / GitLab."
          ],
        },
      ],
      dislayPage: 2,
      
    },
    {
      style: {
        marginTop: "2px",
      },
      label: "EDIFIXIO",
      tag: "Mars 2016 - Oct 2019",
      projects: [
        {
          projectName: " Référentiel produit Carrefour.",
          client: "Carrefour. Fév-Sept 2019",
          role: "Développeur Java / IBM MDM.",
          tecs: "IBM MDM Infosphere, Java 8, Linux.",
          projectContext: `Dans le cadre d'un projet référentiel de données sur IBM MDM Infosphere, j'ai intervenu en tant que consultant développeur Java sur la solution IBM MDM.`,
          projectMissions: [
            "- Conception et mise en œuvre de scripts Trigo Script pour l'import/export de données.",
            "- Analyse et réécriture des routines Java d'import/export afin d'optimiser les performances.",
            "- Rédaction d'une documentation détaillée sur l'architecture applicative."
          ],
        },
        {
          projectName: "POC Intentionality.",
          client: "Interne Edifixio. Oct 2018 - Jan 2019",
          role: "Développeur React.js.",
          tecs: " React.js, Redux, IBM Bluemix,Composants Bootstrap.",
          projectContext: `Participation au développement du front-end d'une IA de prédiction d'impact sur les réseaux sociaux, réalisée avec React.js.`,
          projectMissions: [
          "- Conception, découpage et développement des composants React.js.",
          "- Documentation des composants React.js avec Storybook.",
          "- Intégration des services distants et appels aux API côté front."
          ],
        },
        {
          projectName: "Application React Native - Salesforce (CXO).",
          client: "Salesforce. Aout-Oct 2018",
          role: "Développeur React Native / Saleforce Apex.",
          tecs: "React Native, Salesforce, Apex, Push notification, Jest, Enzyme.",
          projectContext: `CXO est une application mobile de type réseau social, destinée aux CEO, avec une intégration directe à Salesforce.`,
          projectMissions: [
            "- Développement des composants React Native et des interfaces mobiles.",
            "- Migration des services React Native côté backend (APEX) pour réduire les appels intermédiaires au serveur.",
            "- Réalisation de tests unitaires des services avec suivi de la couverture de code Salesforce.",
            "- Mise en place des push notifications et création des triggers APEX pour leur génération."
          ],
        },
        {
          projectName: "Plateforme de dépannage en ligne.",
          link : "https://www.depannagehelp.com/",
          client: "Inter Mutuelle Assistance (IMA). Fev 2017 - Juil 2018",
          role: "Développeur fullstack.",
          tecs: `Node.js, TypeScript, Angular, Angular.js, Gulp, Heroku Paas, add-on Heroku, Pipe Heroku, PostgreSQL, Mocha, Salesforce, Talend ETL, platforme de, paiment Sogenactif.`,
          projectContext: `Nous avons développé une application de dépannage d'urgence en ligne dans les secteurs de l'automobile et de l'habitation.
                  Sur ce projet, j'ai exercé les fonctions de développeur puis de tech-lead.`,
          projectMissions: [
            "- Conception des services web RESTful en Node.js avec TypeScript.",
            "- Intégration avec le CRM Salesforce via Heroku Connect.",
            "- Développement de l'interface utilisateur avec Angular.",
            "- Mise en place de la CI avec Heroku Flow et de la CD via Remote Views."
          ],
        },
        {
          projectName: "Plateforme web et collaborative Jalios CMS.",
          link: "https://www.cofrend.com/",
          client: "COFREND. Mars 2016 - Jan 2017",
          role: "Développeur Java/Jalios.",
          tecs: `Jalios, Java JEE,  JavaScript, JQuery.`,
          projectContext: `Pour le compte de la Confédération Française pour les Essais Non Destructifs (COFREND), au sein d'une équipe de trois personnes, j'ai contribué au développement d'une application web permettant la gestion des formations, la prise de rendez-vous pour les certifications et le traitement des paiements.`,
          projectMissions: [
            "- Création de types de formulaires et gestion des règles métiers.",
            "- Conception des pages portail et organisation de la navigation sur le site.",
            "- Intégration d'un service de paiement en ligne via la solution Monetico."
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
