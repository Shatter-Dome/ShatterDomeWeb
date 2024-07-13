import mongoose from 'mongoose';

if (mongoose.models.Product) {
    delete mongoose.models.Product; // Clear the model definition if it exists
}

const productSchema = new mongoose.Schema({
    pid: { type: String, required: true },
    name: { type: String, required: true },
    version: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
