import mongoose, { Schema } from "mongoose";

//Example code for testing
// Define the schema
const productSchema = new Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        pid: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

// Define the model based on the schema
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
