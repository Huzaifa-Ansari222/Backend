import mongoose, { model } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        id:Number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        id:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema],
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum: ["PENDING","CANCELLED","DELIVERED"],// can show within this only
        default:"PENDING"
    }


},{timestamps:true});


export const Order = mongoose.model("Order",orderSchema)