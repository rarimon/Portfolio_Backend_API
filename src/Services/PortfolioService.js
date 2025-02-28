import PortfolioModel from "../models/PortfolioModel.js";

export const CreatePortfolioService=async(req)=>{

    try{
        let user_id=req.headers['user_id'];
        let reqBody=req.body;
        reqBody.userId=user_id;
        const data=await PortfolioModel.create(reqBody);

        return {status:"success","Message":"Create Portfolio", data:data }
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}

export const UpdatePortfolioService=async(req)=>{

    try{
        let id=req.params.id;
        let user_id=req.headers['user_id'];
        let reqBody=req.body;
        const data=await PortfolioModel.updateOne({"_id":id,"userId": user_id},{$set:reqBody});
        return {status:"success","Message":"Portfolio Updated", data:data }
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}

export const PortfolioListService=async(req)=>{

    try{
        let user_id=req.headers['user_id'];
        const data =await PortfolioModel.find({"userId":user_id});
        return {status:"success","Message":"All Portfolio", data:data }
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}

export const DeletePortfolioService=async(req)=>{

    try{

        let id=req.params.id;
        let user_id=req.headers['user_id'];
        const data=await PortfolioModel.deleteOne({"_id":id,"userId":user_id});

        return {status:"success","Message":"Delete Portfolio", data:data }
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}

