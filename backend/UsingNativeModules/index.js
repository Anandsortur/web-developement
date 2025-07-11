// import  { writeFile, readFile } from 'fs'; //imports only the specific functions from the core modules
// directly the writeFile() function can be used 

import fs from "fs" // basically imports entire module
//if importing the module fs.writeFile() must be used
// const fs = require("fs"); commonjs 


fs.writeFile("message.txt", "This is the message from the write file function", (err) => {
    if (err) {
        throw err;
    }
    console.log("File saved successfully");
})
fs.readFile('./message.txt', "utf8", (err, data) => {
    if (err) throw err;
    // console.log(data.toString()); use utf8
    console.log(data);
})