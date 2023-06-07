const http = require('http')
const path = require("path")
const fs = require("fs")

const service = http.createServer()

service.on('request',function (req, res){
    const url = req.url
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname,'/clock/index.html')
    }else {
        fpath = path.join(__dirname,'/clock',url)
    }

    res.setHeader('Content-Type','text/html;charset=utf-8')
    console.log(fpath)
    fs.readFile(fpath,'utf-8',function (err, data){
        if(err) return res.end(`<h1>404咯</h1>`)
        res.end(data)
    })

})

service.listen(80,function (){
    console.log('80技师为您服务，门牌号:http://127.0.0.1')
})
