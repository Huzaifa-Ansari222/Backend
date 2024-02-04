import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name:{
        
    },
},{timestamps:true});

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema);