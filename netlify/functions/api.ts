import express, { Router } from 'express';
import serverless from 'serverless-http';
import { otheractualseason } from '../../src/api';
import { responseType } from '../../src/@types/response';
const api = express();

const router = Router();
router.get('/other/actualseason', async (req, res) => {
  try {
    const response = await otheractualseason();
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

api.use('/api/', router);

export const handler = serverless(api);
