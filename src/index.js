import React from "react";
import { checkAndCreateDir } from "./utils/dir";
import { renderToFile } from "@react-pdf/renderer";
import { Cv } from "./sections/Cv";
import cvDataFr from "./assets/data/cv-fr";
import cvDataEn from "./assets/data/cv-en";

const date = new Date();
const dn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
const outputFloderName = `${__dirname}/docs`;

checkAndCreateDir(outputFloderName).then(async () => {
  console.log("=> create document ........");
  try {
    await renderToFile(<Cv cvData={cvDataFr}  />, `${outputFloderName}/cv-${dn}-fr.pdf`);
    console.log("=> document created");
  } catch (e) {
    console.error(e);
  }
});

checkAndCreateDir(outputFloderName).then(async () => {
  console.log("=> create document ........");
  try {
    await renderToFile(<Cv cvData={cvDataEn}  />, `${outputFloderName}/cv-${dn}-en.pdf`);
    console.log("=> document created");
  } catch (e) {
    console.error(e);
  }
});
