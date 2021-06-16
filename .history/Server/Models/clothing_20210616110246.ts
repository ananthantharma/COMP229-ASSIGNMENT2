import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ClothingSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number,
    phone: String,
    email: String

},
{
    collection: "clothing"
});

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;