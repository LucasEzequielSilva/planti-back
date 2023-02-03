import mongoose from "mongoose"

const testimonialsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        argument: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const Testimonials = mongoose.model("testimonials", testimonialsSchema)

export default Testimonials