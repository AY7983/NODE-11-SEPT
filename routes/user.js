const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();
router.use(express.json());

router.get('/users',(req,res)=>{
  usercontroller.getAllUsers(req,res)    //the bussinesslogic of this code is written in usercontroller
})
router.get('/user/:id',(req,res)=>{
  usercontroller.getParticularUser(req,res)
})
router.post('/add/user',(req,res)=>{
  usercontroller.addUser(req,res)
})
module.exports = router;