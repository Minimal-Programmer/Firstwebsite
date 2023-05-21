const express=require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use('/',express.static(__dirname+'/dist'))
const dbase='data_base'
const coll='data'
const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017'
const client=new MongoClient(url)
app.get('/get-data',async function(req,res)
{

    const response={
        name:"Alt",
        email:"Altair3542@gmail.com",
        phno:"(+41) 897-5656"
    }
    res.send(response)
})
app.post('/save-data', async function(req,res)
{
    const details=req.body
    console.log(details)
    await client.connect()
    console.log("connection set")
    const db=client.db(dbase)
    const collection=db.collection(coll)
    details['id']=1
    await collection.updateOne({id:1},{details},{})

    res.send({info:"hello information received"})
})
app.listen(3000,function()
{
    console.log("app is running on port 3000")
})