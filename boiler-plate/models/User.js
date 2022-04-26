const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email : {
        type: String,
        trim: true, // ye jin에서 빈칸을 없애 yejin으로 만드는 역할
        unique: 1
    },
    password : {
        type : String,
        minlength: 5
    },
    lastname:{
        type:String,
        maxlength :50
    },
    rule : {
        type:Number,
        default : 0
    },
    image : String,
    token : {
        type:String
    },
    tokenExp : {
        type:Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = { User }