import mongoose, { mongo } from "mongoose";

const todoSchema =new mongoose.Schema({
    content :{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, //for ref
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]//array of susbTodos
},{timestamps: true })

export const Todo = mongoose.model("Todo",todoSchema)
//todos