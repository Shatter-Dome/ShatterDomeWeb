import connectMongoDB from "/config/MongoDB";
import Product from "/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newPID: pid, newName: name, newVersion: version, newDesc: desc, newPrice: price } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, { pid, name, version, desc, price});
    return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
}