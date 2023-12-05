const router = require("express").Router()
const usercontroller = require("../contoller/user.controller")

router.get("/",(req,res)=>{
    res.redirect("/student/getalldata")
})
router.get("/insert",(req,res)=>{
    res.render("insert.ejs")
})
router.get("/update/:id",(req,res)=>{
    res.render("update.ejs")
})
router.post("/reg",usercontroller.userRegister)
router.post("/update/:id",usercontroller.updatedata);
router.get("/updatebyid/:id",usercontroller.updatebyid);
router.get("/getalldata",usercontroller.getalldata);
router.get("/delete/:id",usercontroller.deleteuser);

module.exports = router;
