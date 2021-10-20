const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
    height : {
        type:String,
    },
    race: {
        type:String,
    },
    gender : {
        type:String,
    },
    birth:{
        type:String,
    },
    spouse : {
        type:String
    },
    death : {
        type:String
    },
    realm : {
        type:String
    },
    hair: {
        type:String
    },
    name:{
        type:String
    },
    wikiUrl:{
        type:String
    }
});

module.exports = mongoose.model('Post',PostSchema)