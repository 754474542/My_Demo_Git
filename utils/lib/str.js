
const checkUserName = username => username.length >=8
const checkPassword = password => password.length >=6

module.exports = {
    checkUser:checkUserName,
    checkPwd:checkPassword
}


