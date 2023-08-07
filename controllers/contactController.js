// controller file will contail logic of request response

const asyncHandler = require('express-async-handler')
const  Contact = require('../models/contactModel');
//@desc Get all contacts
//@route get /api/contacts
//@access private
const getContacts = asyncHandler(async(req,res)=>{
    const contact=await Contact.find({userid:req.user.id});
    res.status(200).json(contact)

});
// in async when we want to catch error we need to use try catch 
// In order to do that we would need to add try catch in each method
// But there is better way to do this by using middleware "express-async-handler" which is going to handle our exception inside async express routes then it is going to pass to express errorHandler 

// @desc Create contact
// @route post /api/contacts
// @access private
const createContact = asyncHandler(async(req,res)=>{
    console.log("the req body: ",req.body);
    const {name,phone}= req.body;
    if(!name || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({userid:req.user.id,name,phone})
    res.status(201).json(contact)
});

//@desc Get contact
//@route get /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact)
});

//@desc Update contact
//@route put /api/contacts
//@access private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.userid.toString()!==req.user.id){
        res.status(403);
        throw new Error("Users dont have permission to update other users contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json(updatedContact)
});

//@desc Delete contact
//@route delete /api/contacts
//@access private
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.userid.toString()!==req.user.id){
        res.status(403);
        throw new Error("Users dont have permission to delete other users contact")
    }
    
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact)
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}