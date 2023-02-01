import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongoUri = process.env.DATABASE_URI

export async function connectDb() {
  try {
    if(!mongoUri) throw new Error('DATABASE_URI environment variable is not defined.')

    await mongoose.connect(mongoUri)
    return { success: true, message: 'Connected on MongoDB.' }
  } catch(err: unknown) {
    console.log(err)
    return { success: false, message: 'An error ocurred when connecting on database.' }
  }
}
