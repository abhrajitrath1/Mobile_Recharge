import mongoose, { Schema, Document, Model } from "mongoose";

interface IPlan extends Document {
  operator: string;
  name: string;
  amount: number;
  validity: string; // e.g., "28 days", "1 year"
  data: string; // e.g., "1.5GB/day"
  voice: string; // e.g., "Unlimited", "100 mins/day"
  sms: string; // e.g., "100/day"
  description?: string;
}

const planSchema = new Schema<IPlan>(
  {
    operator: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    validity: { type: String, required: true },
    data: { type: String, required: true },
    voice: { type: String, required: true },
    sms: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const Plan: Model<IPlan> =
  mongoose.models.Plan || mongoose.model<IPlan>("Plan", planSchema);
