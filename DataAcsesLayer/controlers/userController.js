const {userModel} = require('../models/user')
async function create(data){
   return await userModel.create(data);

}
async function read(filter,proj){
    return await userModel.find(filter,proj);
    
}
async function readOne(filter,proj){
    return await userModel.findOne(filter,proj);
    
}
async function update(filter,newData){
   return await userModel.updateOne(filter, newData);
}
async function del(filter){
    await update(filter,{isActive:flase})
}

module.exports = {create,read,update,del,readOne}

