const { CONSTANT } = require("../constants");

const errorHandler = (err, req, res, next)=>{
    const status = res.statusCode ? res.statusCode : 500;
    switch (status) {
        case CONSTANT.VALIDATION_ERROR:
            res.json({Title:"Validation Failed",errorMessage:err.message,stackTrace:err.stack})
            break;
        case CONSTANT.NOT_FOUND:
            res.json({Title:"Not Found",errorMessage:err.message,stackTrace:err.stack})
            break;
        case CONSTANT.FORBIDDEN:
            res.json({Title:"Forbidden",errorMessage:err.message,stackTrace:err.stack})
            break;
        case CONSTANT.UNAUTHORIZED:
            res.json({Title:"Unauthorized",errorMessage:err.message,stackTrace:err.stack})
            break;
        case CONSTANT.SERVER_ERROR:
            res.json({Title:"Internal Server Error",errorMessage:err.message,stackTrace:err.stack})
            break;     
        default:
            console.log("Something went wrong");
            console.log(err);
            break;
    }
}; 

module.exports = errorHandler;