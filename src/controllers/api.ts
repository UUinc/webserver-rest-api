import express from "express";

export const getApi = (req: express.Request, res: express.Response) => {
    try{
        const api = {
            "users": ["yahya", "anass", "ahmed", "nissrine" ]
        }
        return res.status(200).json(api);
    }catch(error)
    {
        console.log(error);
        return res.sendStatus(400);
    }
};