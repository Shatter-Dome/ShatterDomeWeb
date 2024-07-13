import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: String, required: true },
        address: { type: String, required: true },
    },
    items: [{
        productId: { type: String, required: true },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['pending', 'completed', 'shipped', 'cancelled'],
        default: 'pending',
    },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;