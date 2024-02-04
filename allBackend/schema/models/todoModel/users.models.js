import mongoose from "mongoose";

const userSchema = new mongoose.Schemaa({

        //use {}mongooes super power used
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password :{
            type: String,
            required: true
        }
    },{timestamps: true}
)

//export ask what model and which bases
export const User = mongoose.model("User", userSchema)
//in databases User become users --pulural