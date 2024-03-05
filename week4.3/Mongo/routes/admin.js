const { Router, response } = require('express');
const { Admin, Course } = require('../db')
const adminMiddleware = require('../middleware/admin');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    Admin.create({
        username : username,
        password : password
    })
    
    res.json({
        message : "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.imageLink;
    const price = req.body.price;

    const newCource = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCource);
    res.json({
        message: "Course created successfully", CourceID : newCource._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const Coursefind = await Course.find({})
  res.json({
    Course : Coursefind
  })
});

module.exports = router;  