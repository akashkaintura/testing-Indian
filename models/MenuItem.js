import mongoose from 'mongoose'

const MenuItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
})

export default mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema)