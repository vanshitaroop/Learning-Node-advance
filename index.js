import { createServer } from "http";
// import {  red } from "chalk";
import chalk from 'chalk';
const {data} = require("./data.js");
createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen("4500");
