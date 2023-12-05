
exports.userRegister = async(req,res)=>{
    try {
        const userdata = new user(req.body)
        const data = await userdata.save()
        res.redirect("/student/getalldata")
       // res.render('index.ejs',{user:showdata});
        // res.status(200).json({
        //     "msg":"Saved",
        //     data:data
        // })
    } catch (error) {
        res.status(400).json({
            "msg":"failed"
        })
    }
}

exports.updatedata = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await user.findByIdAndUpdate(_id, req.body, {
            new: true
        });
       
        res.redirect("/student/getalldata");

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "did not update"
        })
    }
}
exports.updatebyid = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await user.findById(_id);
       res.render('update.ejs',{user:data})
       
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "did not update"
        })
    }
}

exports.getalldata = async (req, res) => {
    try {
        const showdata = await user.find({});
        res.render('index.ejs',{user:showdata});
    } catch (error) {
        res.status(400).json({
            message: "can not display"
        })
    }
}

exports.deleteuser = async (req, res) => {
    try {
        const _id = req.params.id;

        const data = await user.findByIdAndDelete(_id, {
            new: true
        });
       res.redirect("/student/getalldata")


    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "did not deleted"
        })
    }
}  