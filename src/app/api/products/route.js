import connectMongoDB from "/config/MongoDB";
import Product from "/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { pid, name, version, price, desc } = await request.json();
        await connectMongoDB();
        await Product.create({ pid, name, version, price, desc});
        return NextResponse.json({ message: "Product Created" }, { status: 201 });
    } catch (error) {
        console.error('Error creating Product:', error);
        return NextResponse.json({ error: 'Failed to create Product' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const products = await Product.find();
        return NextResponse.json({ products });
    } catch (error) {
        console.error('Error fetching Products:', error);
        return NextResponse.json({ error: 'Failed to fetch Products' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Product.findByIdAndDelete(id);
        return NextResponse.json({ message: "Product deleted" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting Product:', error);
        return NextResponse.json({ error: 'Failed to delete Product' }, { status: 500 });
    }
}
