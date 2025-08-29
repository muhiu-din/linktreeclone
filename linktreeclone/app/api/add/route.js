import clientPromise from "@/lib/mongodb"
import { link } from "fs"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("linktree")
    const collection = db.collection("links")

    const doc = await collection.findOne({handle:body.handle})

    if(doc){
        return Response.json({success:false,error:true, message: 'Handle already exists!!!' })
    }

    const result = await collection.insertOne(body)
    console.log(body);
    
  return Response.json({success:true,error:false, message: 'Your LinkTree has been generated!!!', result:result })
}