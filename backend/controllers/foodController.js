import foodModel from "../models/foodModel.js"
import fs from "fs"

//add food 

const addfood = async(req,res) => {
    console.log(req.file);

    let img_filename = `${req.file.filename}`;

    const food  = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:img_filename,
        category:req.body.category
    })

    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

const listFood = async(req,res) => {
    try {
        const food = await foodModel.find({});
        res.json({success:true, data:food})
    } catch (error) {
        res.json({success:flase, message:"Error"})
    }
}

const removeFood = async(req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

export { addfood, listFood, removeFood }