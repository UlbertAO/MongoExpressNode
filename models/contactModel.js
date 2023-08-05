const  mongoose=require('mongoose');

const contactSchema=mongoose.Schema(
    {
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