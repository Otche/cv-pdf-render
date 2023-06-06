import path from 'path';
import fs from 'fs';

export const getFileData = (filename)=>{
    const imgPath = path.resolve(__dirname, filename);
    return fs.readFileSync(imgPath);
}