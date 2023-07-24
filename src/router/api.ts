import express from 'express';

import { getApi } from '../controllers/api';

export default (router: express.Router)=>
{
    router.get('/api', getApi);
};