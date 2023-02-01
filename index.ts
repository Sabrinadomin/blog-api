import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { connectDb }from './src/dbConfig'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!')
})

app.listen(port, async () => {
  try {
    const connectionResult = await connectDb()
    if(connectionResult.success === true) {
      console.info(connectionResult.message)
      console.info(`Server running on port ${port}.`)
    } else {
      throw new Error(connectionResult.message)
    }
  } catch(err) {
    console.error(`An error ocurred when initializing server: ${err}`)
  }
})