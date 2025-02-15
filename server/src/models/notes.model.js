import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   title: {
      type: String,
      required: true,
      trim: true,
   },
   note: {
      type: String,
      required: true,
   },
   category: {
      type: String,
      enum: ["Work", "Personal", "Study", "Other"],
      required: true,
   },
   feeling: {
      type: String,
      enum: ["Happy", "Sad", "Neutral", "Excited", "Angry"],
      required: true,
   },
   backgroundColor: {
      type: String,
      enum: ["red", "blue", "orange", "black", "white"],
      default: "white",
   },
   textColor: {
      type: String,
      enum: ["black", "white"],
      default: "black",
   },
   isPrivate: {
      type: Boolean,
      default: false,
   },
}, { timestamps: true });

export const Note = mongoose.model("Note", noteSchema);
