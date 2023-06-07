import React from "react";
import { checkAndCreateDir } from "./utils/dir";
import { renderToFile } from "@react-pdf/renderer";
import { Cv } from "./sections/Cv";

const date = new Date();
const dn = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;
const outputFloderName = `${__dirname}/docs`;

checkAndCreateDir(outputFloderName).then(async () => {
  console.log("=> create document ........");
  try {
    await renderToFile(<Cv />, `${outputFloderName}/cv-${dn}.pdf`);
    console.log("=> document created");
  } catch (e) {
    console.error(e);
  }
});
