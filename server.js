const fs = require('fs');
const path = require('path');

/**
 * @description Read a file and print it in the console
 * @param {string} filename 
 */
const readFile =  async (filename) => {
  try {
    const filePath = path.resolve(`${__dirname}/${filename}`);
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile('archivo.txt');

/**
 * @description Write an rewrite an indicated file
 * @param {string} filename 
 * @param {string} data 
 */
const writeFile = async (filename, data) => {
  try{
    const filePath = path.resolve(`${__dirname}/${filename}`);
    await fs.promises.writeFile(filePath, data);
  } catch (error) {
    console.log(error);
  } 
}

writeFile('archivo.txt', 'Hola mundo!, saludos de parte de StudyCorn Dev. Con mucho cariño e inspiración de estudio.');

/**
 * @description Add content to the existent file without replacing all.
 * @param {string} filename 
 * @param {string} data 
 */
const appendFile = async (filename, data) => {
  try {
    const filePath = path.resolve(`${__dirname}/${filename}`);
    await fs.promises.appendFile(filePath, data);
  }catch (error) {
    console.log(error);
  }
};

appendFile('archivo.txt', '\nStudyCorn Dev 1');