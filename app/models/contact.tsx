import mongoose, { Schema } from "mongoose";
import data from "@/components/accordionMenu/data";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be larger than 2 charracters"],
        maxLength: [50, "Name must be lesser than 50 characters"]
    },

    email: {
        type : String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,"invalid email address"]
    },

    message: {
        type: String,
        required: [true, "Message is required"],
    },

    phone: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
