// controller file will contail logic of request response

const asyncHandler = require('express-async-handler')
//@desc Get all contacts
//@route get /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all contacts"})
});
// in async when we want to catch error we need to use try catch 
// In order to do that we would need to add try catch in each method
// But there is better way to do this by using middleware "express-async-handler" which is going to handle our exception inside async express routes then it is going to pass to express errorHandler 

// @desc Create contact
// @route post /api/contacts
// @access public
const createContact = asyncHandler(async(req,res)=>{
    console.log("the req body: ",req.body);
    const {name,phone}= req.body;
    if(!name || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:"create contact"})
});

//@desc Get contact
//@route get /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
});

//@desc Update contact
//@route put /api/contacts
//@access public
const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
});

//@desc Delete contact
//@route delete /api/contacts
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`})
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}