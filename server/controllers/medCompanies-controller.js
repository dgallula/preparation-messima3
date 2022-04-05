import express from 'express';
import { getAll } from '../business-logic/medCompanies-bl.js';

const medCompaniesRouter = express.Router();


medCompaniesRouter.get('/medCompanies', async (_, res) => {
   let result = await getAll();
   res.send(result)




    })
 export default medCompaniesRouter;


