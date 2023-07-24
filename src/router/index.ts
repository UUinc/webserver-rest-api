import express from 'express';

import authentication from './authentication';
import users from './users';
import api from './api';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    api(router);

    return router;
};