import {
    CreatePortfolioService,
    DeletePortfolioService,
    PortfolioListService,
    UpdatePortfolioService,
} from "../Services/PortfolioService.js";

export const CreatePortfolio=async(req,res)=>{
    let Result=await CreatePortfolioService(req);
    return res.status(200).json(Result);
}

export const UpdatePortfolio=async(req,res)=>{
    let Result=await UpdatePortfolioService(req);
    return res.status(200).json(Result);
}

export const PortfolioList=async(req,res)=>{
    let Result=await PortfolioListService(req);
    return res.status(200).json(Result);
}

export const DeletePortfolio=async(req,res)=>{
    let Result=await DeletePortfolioService(req);
    return res.status(200).json(Result);
}

