import mongoose from "mongoose"

const plantasSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        photo: {
            type: [String],
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        petfriendly: {
            type: Boolean,
            required: true,
        },
        lowlight: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
)
const Plantas = mongoose.model("plantas", plantasSchema)

export default Plantas