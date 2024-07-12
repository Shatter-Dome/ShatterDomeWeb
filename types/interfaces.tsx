import mongoose from "mongoose";

export interface Product {
    _id: mongoose.Schema.Types.ObjectId;
    pid: number;
    name: string;
    version: string;
    price: String;
    desc: string;
}