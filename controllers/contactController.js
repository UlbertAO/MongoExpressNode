// controller file will contail logic of request response

//@desc Get all contacts
//@route get /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message:"get all contacts"})
}

// @desc Create contact
// @route post /api/contacts
// @access public
const createContact = (req,res)=>{
    console.log("the req body: ",req.body);
    const {name,phone}= req.body;
    if(!name || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:"create contact"})
}

//@desc Get contact
//@route get /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
}

//@desc Update contact
//@route put /api/contacts
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
}

//@desc Delete contact
//@route delete /api/contacts
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`})
}

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}