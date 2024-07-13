import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    pid: { type: String, required: true },
    name: { type: String, required: true },
    version: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
