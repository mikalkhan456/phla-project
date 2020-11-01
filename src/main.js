const express = require('express')
const app = express();
const port = process.env.PORT || 2000;
const path = require('path')

// console.log(path.join (__dirname, '../public'))
const static_Path = path.join (__dirname, '../public')
app.use(express.static(static_Path))

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})