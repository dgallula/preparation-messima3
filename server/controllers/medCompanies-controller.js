import express from 'express';

const medCompaniesRouter = express.Router();


medCompaniesRouter.get('/medCompanies', async (_, res) => {
      res.send('hello')

    })
 export default medCompaniesRouter;




    // let result = await getAll();

    // if (!result.success) {
    //     res.status(500).send(result)
    // } else {
    //     res.send(result)
    // }
