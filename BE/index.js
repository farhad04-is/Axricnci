import express from 'express'
import {connect} from 'mongoose'
import cors from 'cors'
import mongoose from 'mongoose';
const { Schema } = mongoose;

const app = express()
const port = 3000
app.use(express.json());
app.use(cors())

const productss = new Schema({
    image:String,
    product:String,
    price:Number
    }
  );
  const Products = mongoose.model('Products', productss);


app.get("/", async (req, res) => {
	let deyer= await Products.find()
	res.send(deyer);
})
app.get("/:id", async (req, res) => {
    let {id}=req.params
	let deyer=await Products.findById(id)
	res.send(deyer);
})
app.post("/", async (req, res) => {
	const {body}=req //  const body = req.body
    const deyer=await Products.create(body)
	res.send(deyer);
})


app.delete("/:id", async (req, res) => {
	let {id}=req.params
  let deyer= await Products.findByIdAndDelete(id)
	res.send(deyer);
})

app.listen(port, () => {
	console.log(`Server established at ${port}`);
})




connect('mongodb+srv://mongodb:mongodb@cluster0.iq05qmm.mongodb.net/').then(()=>console.log("conected")).catch(()=>console.log("islemir"));