const fs = require('fs')
const path = require('path')
const resstyle = /<style>[\s\S]*<\/style>/
const resScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function (err, data) {
    if (err) {
        return console.log(err.message)
    }
    resolveCSS(data)
    resolveJS(data)
    resolveindex(data)
})

function resolveCSS(html_str) {
    const css = resstyle.exec(html_str)
    css[0] = css[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/index.css'), css[0], 'utf-8', function (err) {
        if (err) {
            return console.log(err.message)
        }
        console.log('文件css提取成功')
    })
}

function resolveJS(html_str) {
    const js = resScript.exec(html_str)
    js[0] = js[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/index1.js'), js[0], 'utf-8', function (err) {
        if (err) {
            return console.log(err.message)
        }
        console.log('文件js提取成功')
    })
}

function resolveindex(html_str) {

    const index_str = html_str
        .replace(resstyle, '<link href="index.css" rel="stylesheet">')
        .replace(resScript, '<script src="index1.js"></script>')

    fs.writeFile(path.join(__dirname, '/index.html'), index_str, function (err) {
        if (err) {
            return console.log(err.message)
        }

        console.log('文件index修改完成')

    })

}

//
// const fs = require('fs')
// const path = require('path')
//
// fs.readFile(path.join(__dirname,'没改动的','index.html'),'utf-8',(err, data) => {
//     if(err)return console.log(err)
//     const str = data.replace(/[\r\n]/g,'')
//     fs.writeFile(path.join(__dirname,'没改动的','yihang.html'),str,'utf-8',err=>{
//         return console.log(err)
//     })
//
// })




