import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@auth/prisma-adapter"
// import prisma from "./connect"
import prisma from "./connect"
import { getServerSession } from "next-auth"
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      })
    ],
}
  
export const getAuthSession=()=>getServerSession(authOptions)