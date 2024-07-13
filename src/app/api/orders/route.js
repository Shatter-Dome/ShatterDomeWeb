import connectMongoDB from "/config/MongoDB";
import Order from "/models/order";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { oid, customer, items, totalAmount } = await request.json();
        if (!oid || !customer || !items || !totalAmount) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        await connectMongoDB();

        const newOrder = new Order({
            oid,
            customer,
            items,
            totalAmount,
        });
        await Order.create(newOrder);

        return NextResponse.json({ message: "Order Created", order: newOrder }, { status: 200 });
    } catch (error) {
        console.error('Error creating Order:', error.message);
        return NextResponse.json({ error: 'Failed to create Order', details: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const orders = await Order.find();
        return NextResponse.json({ orders });
    } catch (error) {
        console.error('Error fetching Orders:', error);
        return NextResponse.json({ error: 'Failed to fetch Orders' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
        }
        await connectMongoDB();
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }
        return NextResponse.json({ message: "Order deleted" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting Order:', error);
        return NextResponse.json({ error: 'Failed to delete Order' }, { status: 500 });
    }
}
