const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc register user
//@route post /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {username,password}= req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("UserName and Password are required.");
    }
    const useravail = await User.findOne({username});
    if(useravail){
        res.status(400);
        throw new Error("Username already taken");
    }
    // Hash Password
    const hashPassword = await bcrypt.hash(password,5)
    // console.log("Hashed Password: ",hashPassword);
    // create user
    const user = await User.create({username,password:hashPassword})
    console.log(`User Created ${username}`);
    res.status(201).json({message:`user ${username} successfully created`})
});

//@desc login user
//@route post /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {username, password}=req.body;
    if(!username||!password){
        res.status(400);
        throw new Error("UserName and Password are required.");
    }
    const user = await User.findOne({username});

    //match passwrod hash to authenticate
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15m'}
        );
        res.status(200).json({accessToken})

    }else{
        res.status(401);
        throw new Error("UserName or Password is incorrect");
    }
});

//@desc current user
//@route post /api/users/current
//@access private
const currentUser = asyncHandler(async(req,res)=>{
    
    res.status(200).json({"LoggedIn_username":req.user.username})
});

module.exports = {registerUser, loginUser, currentUser}