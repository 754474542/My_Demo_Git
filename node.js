const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request',function (req, res){
    console.log('你成功的访问到了服务器，且触发了request事件')
})

server.listen(80,function (){
    console.log('80端口本地服务器已启动。')
})
