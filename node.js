const http = require('http')
const fs = require("fs");
const path = require("path");
const service = http.createServer()

service.on('request', (req, res) => {
    const url = req.url
    let conent = `<h1>404 Not Found</h1>`
    if(url === '/' || url === '/index.html'){
        conent = `<h1>这个是主页</h1>`
    }else if(url === '/about.html'){
        conent = `<h1>关于页面</h1>`
    }else if (url === 'click/index.html'){
        console.log(1)
         fs.readFile(path.join(__dirname,'/clock/index.html'),function (err, data){
             if(err) return console.log(err.message)
             conent = data
        })
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(conent )
})

service.listen(80, function () {
    console.log('80技师为您服务,门牌号: http://127.0.0.1')
})