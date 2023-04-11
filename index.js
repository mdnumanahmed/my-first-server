const express = require('express')
const phones = require('./phones.json')
const app = express()
const port = 5000

// যখন ইউজার (’/’) হোম রাউটে হিট করবে, তখন এটি কল হবে।
// get api
app.get('/', (req, res)=>{
    res.send('I am coming from root route')
})

// get phones data
app.get('/', (req, res)=>{
    res.send(phones)
})

// এপ কোন পোর্টে চলছে, বা কোন এরর থাকলে এখানে দেখাবে।
app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`);
})