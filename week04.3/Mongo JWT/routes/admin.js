const { Router } = require('express');
const { Admin, Course, User } = require('../db');
const adminMiddleware = require('../middleware/admin');
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config');

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    console.log(JWT_SECRET);
    
    await Admin.create({
        username: username,
        password: password
    });
    
    res.json({
        message: "Admin created successfully"
    });
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({
        username,
        password
    });

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        });
    } else {
        res.status(401).json({
            message: "Incorrect email or password!"
        });
    }
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
  
});

module.exports = router;
