import mongoose, { Schema } from "mongoose";

//Example code for testing
// Define the schema
const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

// Define the model based on the schema
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
