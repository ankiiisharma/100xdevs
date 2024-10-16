import React from 'react'
import { PrismaClient } from "@repo/db/client"

const client = new PrismaClient();

const page = () => {
  return (
    <> 
      <h1 className='text-3xl font-bold'> hi from user </h1>
    </>
  )
}

export default page