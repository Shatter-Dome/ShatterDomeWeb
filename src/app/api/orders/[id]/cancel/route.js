import connectMongoDB from "/config/MongoDB";
import Order from "/models/order";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { oid, customer, items, totalAmount, status } = await request.json();

    await connectMongoDB();

    const updatedOrder = await Order.findByIdAndUpdate(
        id,
        { oid, customer, items, totalAmount, status },
        { new: true }
    );
    if (!updatedOrder) {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json({ message: "Order updated", order: updatedOrder }, { status: 200 });
}