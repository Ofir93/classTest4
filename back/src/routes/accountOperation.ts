import { Router, Request, Response } from "express"
import { createOperation, findAccountOperation } from "../controllers/accountOperation"

const router: Router = Router()

router.post('/', async (req:Request, res:Response) => {
    try {
        const accountOperation = await createOperation(req.body)
        res.send(accountOperation)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

router.get('/:accountNumber', async (req:Request, res:Response) => {
    try {
        const accountNumber = await findAccountOperation(+req.params.accountNumber)
        accountNumber ? res.send(accountNumber) : res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router