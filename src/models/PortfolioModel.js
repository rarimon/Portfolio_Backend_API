
import mongoose from "mongoose";

    const TaskSchema = new mongoose.Schema({
        title:{type:String,required:true},
        description:{type:String,required:true},
        img:{type:String,required:true},
        codeLink:{type:String,required:true},
        liveLink:{type:String,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,required:true}
    },
        {timestamps:true,versionKey:false}
    )

    const PortfolioModel = mongoose.model("portfolios", TaskSchema)
    export default PortfolioModel

