import {TokenDecode} from  "../utility/tokenUtility.js";

export default (req, res, next) => {
    let token=req.headers['token'];

    let decoded=TokenDecode(token);
    if(decoded==null){
        res.status(200).send({status:"fail",message:"Unauthorized User"});
    }
    else{
        let user_id=decoded.user_id;
        let email=decoded.email;

        //email, user_id add request header
        req.headers.email=email;
        req.headers.user_id=user_id;
        next()
    }

}