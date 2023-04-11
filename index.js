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
app.get('/phones', (req, res)=>{
    res.send(phones)
})

// get phone by id
app.get('/phone/:id', (req, res)=>{
    // req.params থেকে id পাওয়া যায়
    const id = req.params.id
    // find মেথড চালিয়ে id দ্বারা নির্দিষ্ট ডাটা পাওয়া যায়।
    const phone = phones.find(phone => phone.id === +id)
    res.send(phone)

})

// এপ কোন পোর্টে চলছে, বা কোন এরর থাকলে এখানে দেখাবে।
app.listen(port, ()=>{
    console.log(`Server running on port : ${port}`);
})