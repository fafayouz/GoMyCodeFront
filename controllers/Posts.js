const Posts = require('../model/Post')



module.exports.CreatePost = (req ,res) => {
    const {height , race , gender , birth , spouse , death , realm , hair , name , wikiUrl} = req.body ; 
    const NewPost = new Posts({
        height:height,
        race:race,
        gender:gender,
        birth:birth,
        spouse:spouse,
        death:death,
        realm:realm,
        hair:hair,
        name:name,
        wikiUrl:wikiUrl
    })
    NewPost.save().then(DATA => {
        res.status(200).json({err : false , message:`${DATA.name} successfully published` , DATA})
    }).catch(err => {
        res.status(404).json({err : true , message:err})
    })
}


//Get All Data 

module.exports.GetPostsData = async (req ,res) => {
    try {
        const PostData = await Posts.find();
        res.status(200).json(PostData)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

//Dealte Post From DataBase ! 

module.exports.DeletePost = (req , res) => {
    const id = req.params.id
    
    Posts.findByIdAndDelete(id).then(ok => {
        res.send({err : false , message:'Post successfully deleted'})
    }).catch(err => {
        res.send({eroor : true , message : err})
    })
}

