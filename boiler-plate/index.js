const express = require('express') //express 모듈 가져오기
const app = express()
const port = 3000 //포트번호설정

const config = require('./config/key');
const { User  } =require('./models/User');

// 정보를 parse해서 json형식으로
app.use(express.json()); //For JSON requests
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI,{
    // useUnifiedTopology : true, useCreateIndex: true, useFindAndModify :false
}).then( ()=> console.log("MongoDB Connected ... "))
.catch( err => console.log('ERROR발생 !',err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res)=>{
    // 회원가입시 필요한 정보를 client에서 받아오면 데베에 저장
    const user = new User(req.body)

    user.save( (err, userInfo )=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({ //status(200)은 성공했다는표시
            succes:true
        })
    }) //정보가 user모델에 저장됨
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})