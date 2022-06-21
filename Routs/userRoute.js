const express = require("express")
const router = express.Router();
const userLogic = require('../BuissnesLogic/userLogic');
const { auth } = require("../middleware/auth");

// router.use(auth)
router.all("/test",auth,(req,res)=>{
    res.send("test")
})

router.post("/login", async(req,res)=>{
    try {
        res.send( `${await userLogic.login(req.body.email,req.body.password)} TOKEN`)
        
    } catch (error) {
        console.log(error.massage);
        res.status(error.code||500).send({massag: error.massage || "sorry,"}) 
    }
})

router.post("/register", async(req,res)=>{
    try {
        const newUser = await userLogic.register(req.body)
        console.log("newUser",newUser);
        res.send("register")
        
    } catch (error) {
        res.status(error.code||500).send({massag: error.massage || "sorry,"}) 
    }
})

router.get('/', async(req,res)=>{
    try {
        const users = await userLogic.getAllUsers();
        res.send(users)
    } catch (error) {
        res.status(error.code).send({massag: error.massage})
    }
})
// router.get("/", async(req,res)=>{
//     console.log(req.query);
//     const user = await userLogic.getUserDetailByid(req.query.id)
//     res.send(user)

// })
router.get("/:id", async(req,res)=>{
    try {
        const user = await userLogic.getUserDetailByid(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(error.code||500).send({massag: error.massage || "s"})
    }
   })

router.put("/edit_user/:id",async(req,res) =>{
     await userLogic.updateUser(req.params.id, req.body)
     res.send("change succes")
    })

module.exports=router;
// const rou
// module.exports = (req, res) => {
//     res.send("testI")
// }
// const userLogic = require('../BL/userLogic')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/user', async (req, res) => {

//     let res = await userLogic.bla()

//     res.send({
//         firstName: "Yonatan",
//         lastName: "Ramon",
//         email: "Yokon@walla.com",
//         password: "987865",
//         address: {
//             street: 12,
//             homeNum: 34,
//             city: "jerusalem",
//         },
//         gender: 'male'
//     })
// })