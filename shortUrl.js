const mongoose=require('mongoose')
const shortId=require('shortid')

const shortUrlschema=new mongoose.Schema({
    long:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:shortId.generate
    }
})

module.exports=mongoose.model('shortUrl',shortUrlschema)