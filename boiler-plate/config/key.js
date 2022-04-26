if (process.env.MODE_ENV === 'production'){
    module.exports = require('./prod')
} else{
    module.exports = require('./dev')
}

// process.env.MODE_ENV : 환경변수임
// local환경이면 development
//deply(배포)한 후는 production