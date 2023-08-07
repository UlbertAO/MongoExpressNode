const  mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"pls add  username"],
            unique:[true,'username already taken']
        },
        password:{
            type:String,
            required:[true,"pls add user password"],
        },
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("User",userSchema);