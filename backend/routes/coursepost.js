const router = require("express").Router();
const verify = require("../routes/verifyToken");
// import model
const Coursepost = require("../model/Coursepost");


// Add New Listing
router.post("/",verify, async (req,res)=>{
    const coursepost = new Coursepost({
        Id: req.body.Id,
        Title: req.body.Title,
        Sort_Desc: req.body.Sort_Desc,
        Full_Desc: req.body.Full_Desc,
        Image: req.body.Image,
        Author: req.body.Author,
        EnteredDate: req.body.EnteredDate,
        IsActive: req.body.IsActive
    });
    try {
        const savedCoursepost = await coursepost.save();
        res.send(savedCoursepost);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get All Listing
router.get("/", async (req,res)=>{
    try {
        const coursepost = await Coursepost.find();
        res.json(coursepost);
    } catch (error) {
        res.json({message:error});
    }
});

//Single Listing 
router.get("/:courseId", async (req,res)=>{
    try {
        const coursepost = await Coursepost.findById(req.params.courseId);
        res.json(coursepost);
    } catch (error) {
        res.json({message:error});
    }
});

//Update Listing 
router.put("/:courseId",verify, async (req,res)=>{
    try {
        const coursepost = {
            Id: req.body.Id,
            Title: req.body.Title,
            Sort_Desc: req.body.Sort_Desc,
            Full_Desc: req.body.Full_Desc,
            Image: req.body.Image,
            Author: req.body.Author,
            EnteredDate: req.body.EnteredDate,
            IsActive: req.body.IsActive 
        };

        const updatedCourse = await Coursepost.findByIdAndUpdate({_id:req.params.courseId},coursepost);
        res.json(updatedCourse);
    } catch (error) {
        res.json({message:error});
    }
});

//Delete Listing 
router.delete("/:courseId",verify, async (req,res)=>{
    try {
        const removeCourse = await Coursepost.findByIdAndDelete(req.params.courseId);
        res.json(removeCourse);
    } catch (error) {
        res.json({message:error});
    }
});

module.exports = router;