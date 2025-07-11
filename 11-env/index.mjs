import {config} from 'dotenv'
config()
// 1
// // Import entire module including default export
// import * as dotenv from 'dotenv'
// dotenv.config();

// 2
//require('dotenv').config()

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
