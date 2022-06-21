const userController = require('../DataAcsesLayer/controlers/userController')
const {createToken} = require('./jwt')
const { use } = require('../Routs')

exports.getAllUsers=async()=>{
    const users = await userController.read({},"address firstName")
    if(users.length === 0){
        throw {code:400,massage:"there is no massage"}
    }else{return users}
}
exports.getUserDetailByid=  async (id)=>{
    const users = await userController.read({_id:id})
    if(!users.length){
        throw {code:404,massage:"there is no users by this ID"}
    }else{
        return users
    }
}
exports.register = async (userField)=>{
    const eUser = await userController.read({email: userField.email})
    if(eUser.length){throw({code:400,massage:"this email already exist"})}
    return await userController.create(userField)
}
exports.createUser = async (userField)=>{
    const eUser = await userController.read({email: userField.email})
    if(eUser.length){throw({})}
    return await userController.create(userField)
}
exports.login = async(email,password)=>{
    //validate - basic
    if(!email||!password){throw({code:409,message:"missing data"})}
    //user exist?
    const eUser = await userController.read({email},"+password")
    console.log(eUser);
    if(eUser.length == 0) throw({code:404,message:"user not found"})
    //password match?
    if(password!==eUser[0].password) throw ({code:503,message:"not auth"})
    return createToken(eUser[0]._id)
}
exports.updateUser = async(id, newFieled)=>{
    const users = await userController.read({_id:id})
    if(!users.length){ throw {code:404,massage:"there is no users by this ID (put)"}}
    else{
   return userController.update({_id:id},newFieled)
    }
}

// }
// let user1={
//     firstName : "gtu",
//     lastName : "kolm",
//     email :"bonbon@gmail.com",
//     password:"mgmgmg222",
   
//     address:{
//         street:"chaim shofet hachoen",
//         city:"Tel",
//         number:8
//     },
//     gender:"male"
// }
// let user2={
//     firstName : "yossef",
//     lastName : "amar",
//     email :"yossef@gmail.com",
//     password:"ldhdjd4568",
   
//     address:{
//         street:"chaim shofet hachoen",
//         city:"efrat",
//         number:2222222
//     },
//     gender:"male"
// }
// create(user2)