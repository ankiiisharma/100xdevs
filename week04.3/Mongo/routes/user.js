const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const router = Router();

const { User, Course } = require('../db')

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        message: "user created successfully!"
    })
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
    const AllCourses = await  Course.find({});

    res.json({
        Course : AllCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

        await User.updateOne ({
            username : username 
        }, {
        "$push" : {
            purchasedCourses : courseId
        }
    })

    res.json({
        message : "Purchase Complete!!"
    })
});

router.get('/purchasedcourses', userMiddleware, async (req, res) => {
    try {
      // Implement fetching purchased courses logic
      const userPurchased = await User.findOne({
        username: req.headers.username
      });
  
      if (!userPurchased) {
        return res.status(404).json({ error: "User not found" });
      }
  
      console.log(userPurchased.purchasedCourses);
  
      const courses = await Course.find({
        _id: {
          "$in": userPurchased.purchasedCourses
        }
      });
  
      res.json({
        courses: courses
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
module.exports = router;