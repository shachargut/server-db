const { validation } = require("../BuissnesLogic/jwt")
const {readOne} = require('../DataAcsesLayer/controlers/userController')

async function auth (req,res,next){
    const token =req.headers.authorization
    try {
        // verify token
        const decode =  validation(token)
       // check if user exist
        const eUser = await readOne({_id:decode.id})
        if(!eUser) throw ({code:503, message:"not auth"})
       // next / res error
       next()
    } catch (error) {
        res.status(503).send({message:error.message})
    }
}        

module.exports = {auth}