import express, { Application, Request, Response } from 'express'
import mongoose, { connect } from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import accountOperation from './routes/accountOperation'

const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB_NAME}.pbvafsv.mongodb.net/test`
//mongodb+srv://admin:<password>@classtest4bank.pbvafsv.mongodb.net/test
console.log('Trying to connect to mongodb');

mongoose.set("strictQuery", false);


connect(mongoUrl)

.then(() => console.log('Successfully connected to mongodb'))
.catch ((error) => {
    console.log(error)
})

const app: Application = express()

app.use(express.json())
app.use(
    cors({
      origin: 'http://localhost:4200',
    })
  )

app.use('/accountOperation', accountOperation)

app.use((req:Request, res:Response)=> {
    res.sendStatus(404).send(`Endpoint not supported ${req.url}`)
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is listening on port ${process.env.APP_PORT}`);
})