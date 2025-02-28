import {Login} from "../controller/UsersController.js";
import  UsersModel from "../models/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";


export const RegistrationService=async(req)=>{

    try{
        let ReqBody=req.body;
        const data=await UsersModel.create(ReqBody);
        return {status:"success","Message":"Registration" , data:data}
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}
export const LoginService=async(req)=>{

    try{
        let User_Email=req.params.Email;
        const data =await UsersModel.findOne({Email:User_Email});

        if(data===null){
            return {status:"Fail","Message":"User Not Found!"}
        }
        else{

            let token=TokenEncode(data['Email'],data['_id']);

            return {status:"Success","Message":"User Found!",token:token}
        }
    }
    catch(err){
        return {Status: "Fail:" +err}.toString();
    }

}




