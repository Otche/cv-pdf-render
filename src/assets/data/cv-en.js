export default {
  name: "Amine OUCHIHA",
  age: 33,
  email: "contact@amine-ouchiha.com",
  site: "https://amine-ouchiha.com",
  adresse: "180 BD Gabriel Péri, 93110, Rosny-sous-Bois.",
  phone: "+33781581021",
  overview: `Holder of a Master's degree in analysis and design of secure information systems, I have been working for several years on consulting and development projects across varied technical environments.
I chose to focus my expertise on the Node.js / React.js ecosystem, attracted by its versatility and the richness of its community. I remain attentive to developments in other technologies to maintain a broad and modern view of development.
Today, I am looking to join a team where I can apply my skills.`,
  skills: [
    {
      type: "Programming",
      icon: require("../images/code.png"),
      skillsList: [
        {
          label: "JavaScript / TypeScript",
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
          label: "MQL5",
          progress: 50,
        },
        {
          label: "C / C++",
          progress: 40,
        },
      ],
    },
    {
      type: "Web Interface",
      icon: require("../images/front.png"),
      skillsList: [
        {
          label: "HTML5 / CSS3",
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
        },
      ],
    },
    {
      type: "Back-end Development",
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
        },
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
          label: "iOS",
          progress: 30,
        },
      ],
    },
    {
      type: "Databases",
      icon: require("../images/database.png"),
      skillsList: [
        {
          label: "SQL / PGSQL",
          progress: 70,
        },
        {
          label: "MongoDB",
          progress: 50,
        },
      ],
    },
    {
      type: "Testing",
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
          label: "Gherkin / Cucumber",
          progress: 40,
        },
      ],
    },
    {
      type: "Development Tools",
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
        },
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
          label: "Kubernetes",
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
      type: "Other Skills",
      icon: require("../images/more.png"),
      skillsList: [
        {
          label: "Scrum Agile",
          progress: 70,
        },
        {
          label: "SAFe Agile",
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
          label: "MT5",
          progress: 70,
        },
      ],
      dislayPage: 2,
    },

    {
      type: "English",
      icon: require("../images/english-language.png"),
      dislayPage: 2,
      skillsList: [
        {
          label: "Spoken",
          progress: 50,
        },
        {
          label: "Written",
          progress: 70,
        },
      ],
    },
  ],
  experiences: [
    {
      label: "TEC-INVEST",
      tag: "May 2024 - Present",
      projects: [
        {
          projectName: "MT5 expert advisor consultancy",
          tecs: "MT5, MQL5, Trading, Expert Advisor, technical indicator.",
          projectContext: `Development of trading robots.`,
          projectMissions: [
            "- Creation of trading robots and execution of backtests for technical indicators and information interfaces.",
            "- Performing backtests and analyzing trading strategy results.",
          ],
        },
        {
          projectName: "CVTEC-OFFICE.",
          link: "https://cvtec-office.com",
          tecs: "Nest.js, Next.js, Material UI, Jest, Puppeteer, Firebase.",
          projectContext: `In collaboration with a partner developer, we designed an application dedicated to creating and generating CVs from a set of customizable templates.
It provides many advanced customization options, allowing each user to produce a professional, unique CV perfectly suited to their profile.`,
          projectMissions: [
            "- Structuring data, themes and other platform elements.",
            "- Designing and integrating the various CV templates.",
            "- Developing and implementing APIs with Nest.js.",
            "- Building the user interface with Next.js and Material UI to enter information and customize templates.",
            "- Full user management and authentication mechanisms, including standard access and SSO.",
          ],
        },
      ],
    },
    {
      style: {
        marginTop: "5px",
      },
      label: "Europ Assistance",
      tag: "June 2022 - Dec 2023",
      projects: [
        {
          projectName: "E-Claims.",
          link: "https://services.europ-assistance.fr",
          role: "React.js / Java 8 / Node.js Developer.",
          tecs: "React.js, Webpack, admin-on-rest, Material-UI, Java 8, Node.js, Bitbucket, Jenkins, AWS Lambda, AWS RDS, LoopBack 3/4.",
          projectContext: `As part of a team of five developers, a Product Owner and a Manager, I participated in the development of E-Claim, a claims management platform for clients like Airbnb or Lastminute, with automatic forwarding of cases to partner insurers.
The project includes a back-office interface (E-conf) to configure front-office features.
Project management used a lightweight Scrum approach, including daily meetings and planning poker sessions.`,
          projectMissions: [
            "- Complete redesign of the user interface in React.js, based on the Material-UI framework.",
            "- Management and optimization of the bundling process with Webpack.",
            "- Development and maintenance of backend APIs in Java 8 / Spring.",
            "- Maintenance of the back-office built with Admin-on-rest and LoopBack 3.",
            "- Migration of the back-office backend from LoopBack 3 to LoopBack 4.",
            "- Version and branch management using Git / Bitbucket.",
            "- Deployment and automated testing using Jenkins on AWS Lambda functions.",
          ],
        },
      ],
    },
    {
      style: {
        marginTop: "5px",
      },
      label: "ITNovem (SNCF)",
      tag: "Jan 2021 - Feb 2022",
      projects: [
        {
          projectName: "e-IOT.",
          role: "Node.js / Nest.js Developer.",
          tecs: "Nest.js, Node.js, TypeORM, React.js, PostgreSQL, GitLab, Jenkins, Kubernetes, Robot Framework, Azure Cloud, IOT, Cosmos DB.",
          projectContext: `As part of the overhaul of the IoT management platform, I joined a team of seven working with a Combo project management approach.
The platform is based on a set of APIs to configure different types of connected devices, subscribe to their data streams and group them into logical sets for centralized and coherent management.`,
          projectMissions: [
            "- Development of IoT frame decoders as TypeScript libraries.",
            "- Design of configuration modules integrated into the Nest.js architecture.",
            "- Exposing functionality via CRUD RESTful endpoints developed with Nest.js.",
            "- Real-time processing of data emitted by connected devices.",
            "- Writing integration tests using the Robot Framework.",
            "- Version management of different application components with Git / GitLab.",
            "- Deploying components to pre-production environments via Jenkins.",
          ],
        },
      ],
    },
    {
      style: {
        marginTop: "2px",
      },
      label: "Société Générale",
      tag: "Dec 2019 - Dec 2020",
      projects: [
        {
          projectName: "My Digital Workplace.",
          role: "Node.js / React.js Developer.",
          tecs: "TypeScript, Node.js, Nest.js, TypeORM, React.js, GitLab, OpenShift, Jenkins, Scrum, SAFe.",
          projectContext: `I joined a team of three developers, a Product Owner and a Scrum Master within a train made up of four teams.
The My Digital Workplace project aimed to design a unified platform bringing together all services for employees: equipment allocation (PCs, badges, virtual machines), access to documentation, and mailing list management for internal communications.`,
          projectMissions: [
            "- Participation in SAFe ceremonies, including Program Increments within the development train.",
            "- Development of backend APIs in Node.js using Nest.js and the TypeORM ORM.",
            "- Design and implementation of the front-end in React.js with TypeScript.",
            "- Version management and participation in releases via Git / GitLab.",
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
      tag: "Mar 2016 - Oct 2019",
      projects: [
        {
          projectName: "Carrefour product repository.",
          client: "Carrefour. Feb - Sept 2019",
          role: "Java / IBM MDM Developer.",
          tecs: "IBM InfoSphere MDM, Java 8, Linux.",
          projectContext: `As part of a data repository project on IBM InfoSphere MDM, I worked as a Java consultant developer on the IBM MDM solution.`,
          projectMissions: [
            "- Design and implementation of Trigo Script scripts for data import/export.",
            "- Analysis and rewriting of Java import/export routines to optimize performance.",
            "- Writing detailed documentation on the application architecture.",
          ],
        },
        {
          projectName: "Intentionality POC.",
          client: "Internal Edifixio. Oct 2018 - Jan 2019",
          role: "React.js Developer.",
          tecs: "React.js, Redux, IBM Bluemix, Bootstrap components.",
          projectContext: `Participation in the front-end development of an AI predicting social media impact, built with React.js.`,
          projectMissions: [
            "- Design, breakdown and development of React.js components.",
            "- Documentation of React.js components with Storybook.",
            "- Integration of remote services and front-end API calls.",
          ],
        },
        {
          projectName: "React Native Application - Salesforce (CXO).",
          client: "Salesforce. Aug - Oct 2018",
          role: "React Native / Salesforce Apex Developer.",
          tecs: "React Native, Salesforce, Apex, push notifications, Jest, Enzyme.",
          projectContext: `CXO is a mobile social-network-style application for CEOs with direct Salesforce integration.`,
          projectMissions: [
            "- Development of React Native components and mobile interfaces.",
            "- Migration of React Native services to backend (APEX) to reduce intermediate server calls.",
            "- Writing unit tests for services with coverage monitoring on Salesforce.",
            "- Implementing push notifications and creating APEX triggers to generate them.",
          ],
        },
        {
          projectName: "Online assistance platform.",
          link: "https://www.depannagehelp.com/",
          client: "Inter Mutuelle Assistance (IMA). Feb 2017 - Jul 2018",
          role: "Fullstack Developer.",
          tecs: `Node.js, TypeScript, Angular, Angular.js, Gulp, Heroku PaaS, Heroku add-ons, Heroku Pipelines, PostgreSQL, Mocha, Salesforce, Talend ETL, Sogenactif payment platform.`,
          projectContext: `We developed an online emergency assistance application in the automotive and home sectors.
On this project, I served as a developer and later as tech lead.`,
          projectMissions: [
            "- Designing RESTful web services in Node.js with TypeScript.",
            "- Integration with the Salesforce CRM via Heroku Connect.",
            "- Developing the user interface with Angular.",
            "- Setting up CI with Heroku Flow and CD via Remote Views.",
          ],
        },
        {
          projectName: "Jalios CMS collaborative web platform.",
          link: "https://www.cofrend.com/",
          client: "COFREND. Mar 2016 - Jan 2017",
          role: "Java/Jalios Developer.",
          tecs: "Jalios, Java JEE, JavaScript, jQuery.",
          projectContext: `For the French Confederation for Non-Destructive Testing (COFREND), as part of a three-person team, I contributed to the development of a web application for training management, appointment scheduling for certifications and payment processing.`,
          projectMissions: [
            "- Creation of form types and management of business rules.",
            "- Design of portal pages and organization of site navigation.",
            "- Integration of an online payment service via the Monetico solution.",
          ],
        },
      ],
      dislayPage: 2,
    },
  ],
  fomations: [
    {
      label: "University of Versailles (UVSQ)",
      tag: "2013 - 2015",
      description:
        "Master's degree in analysis and design of secure information systems.",
    },
    {
      label: "University of Béjaïa (UAMB)",
      tag: "2010 - 2013",
      description: "Bachelor's degree in Computer Science.",
    },
  ],
};
