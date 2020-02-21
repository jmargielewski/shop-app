import mongoose from "mongoose";

const { String, Number, ObjectId } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User"
    },
    email: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    },
    products: [
      {
        quantity: {
          type: Number,
          default: 1
        },
        product: {
          type: ObjectId,
          ref: "Product"
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
