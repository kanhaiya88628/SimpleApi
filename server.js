const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
    res.end("hello from kanhaiya")
    }

    else if(req.url == "/namelist"){
    fs.readFile(`${__dirname}/names/namelist.json`,"utf-8",(err,data) =>{
        res.end(data)
    })
    
    }

    else{
    res.writeHead(404)
    res.end("page not found")
    }
})

server.listen(5000,"127.0.0.1",() =>{
    console.log("listening on the port 5000")
})