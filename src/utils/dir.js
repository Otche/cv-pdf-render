const fs = require('fs');

export const checkAndCreateDir = ( dir ) => {
    return new Promise(( resolve, reject) =>{
      if(!dir || typeof dir != typeof ''){
        return reject('Invalid dir name');
      }
  
      if(!fs.existsSync(dir)){
        console.log("=> dir not exist");
        console.log(`=> dir to created : ${dir}`);
        fs.mkdirSync(dir);
        return resolve(true); 
      }
      console.log(`=> dir alredy exist : ${dir}`);
      return resolve(true);  
    });
  } 