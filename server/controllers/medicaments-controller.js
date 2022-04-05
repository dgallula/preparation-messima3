import express from 'express';
import { getAll,addMedicaments } from '../business-logic/medicaments-bl.js';

const medicamentsRouter = express.Router();


medicamentsRouter.get('/medicaments', async (_, res) => {
   let result = await getAll();
   res.send(result)

   
medicamentsRouter.post('/medicaments', async (req, res) => {
    let result = await addMedicaments(req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }

        res.send(result)
    }
})

    })
 export default medicamentsRouter;