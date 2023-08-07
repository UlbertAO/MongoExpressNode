const  mongoose=require('mongoose');

const contactSchema=mongoose.Schema(
    {
        // assosiate contact with user
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        name:{
            type:String,
            required:[true,"pls add contact name"],
        },
        phone:{
            type:String,
            required:[true,"pls add contact phone number"],
        },
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("Contact",contactSchema);