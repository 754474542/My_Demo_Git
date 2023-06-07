function dataFormat(dtstr){
    const dt = new Date(dtstr)
    const y = dt.getFullYear()
    const m = dt.getMonth()+1
    const d = dt.getDate()

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZero(n){
    return n > 9 ? n: '0'+n
}

module.exports = {
    dataFormat
}

