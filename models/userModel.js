const  mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"UserName is required"],
            unique:[true,'UserName already taken, Try Again!!!']
        },
        password:{
            type:String,
            required:[true,"Password for user is required"],
        },
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("User",userSchema);