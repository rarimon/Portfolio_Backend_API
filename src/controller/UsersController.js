import {RegistrationService,LoginService} from '../Services/UserService.js';

    export const Registration=async(req,res)=>{
        let Result=await RegistrationService(req);
        return res.status(200).json(Result);
    }


export const Login=async(req,res)=>{
    let Result=await LoginService(req);
    return res.status(200).json(Result);
}

