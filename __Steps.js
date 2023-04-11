/**
 * Steps for creating Server
 * 1. mkdir folderName -> to create folder
 * 2. cd folderName
 * 3. npm init -y
 * 4. index.js File create
 * 5. npm install express -> to install express
 * 6. write code in entry pint index.js
 *  -> import express
 *  -> create app from express()
 *  -> create port
 *  -> create get method from app
 *  -> create listen method from app
 *  -> server run node index.js
 * 
 * Each api take two parameters
 * 1. route, ('/') will be string
 * 2. callback function
 *  -> has two parameters (req, res)
 * 
 * req.params থেকে id পাওয়া যায়। যদি User ক্লায়েন্ট সাইট থেকে url এর কোন আইডি দেয়, সেটি req.params থেকে পাওয়া যায়।
 * 
*/