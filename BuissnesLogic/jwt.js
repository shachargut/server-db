const jwt = require("jsonwebtoken")
const secret = "1234"

function createToken(id){
    const token = jwt.sign({id},secret,{expiresIn:'1m'})
    return token;
}
//console.log(createToken("yossi"));
function validation (token){
    return jwt.verify(token,secret)
}
//console.log(validation("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Inlvc3NpIiwiaWF0IjoxNjU1ODE1NjI5LCJleHAiOjE2NTU4MTU2ODl9.x2jMUYmAQ8CsTM2QlS8kbHc8R6Tdvf_NwNloqVM0Z5k"))
module.exports = {createToken,validation}