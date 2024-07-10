import connectMongoDB from "/config/MongoDB";
import Topic from "/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await connectMongoDB();
        await Topic.create({ title, description });
        return NextResponse.json({ message: "Topic Created" }, { status: 201 });
    } catch (error) {
        console.error('Error creating Topic:', error);
        return NextResponse.json({ error: 'Failed to create Topic' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics });
    } catch (error) {
        console.error('Error fetching Topics:', error);
        return NextResponse.json({ error: 'Failed to fetch Topics' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting Topic:', error);
        return NextResponse.json({ error: 'Failed to delete Topic' }, { status: 500 });
    }
}
