import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    emailVerified: Date,
    favoriteDishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
    orderHistory: [{
        items: [{
            menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
            quantity: Number
        }],
        totalAmount: Number,
        orderDate: { type: Date, default: Date.now }
    }]
})

export default mongoose.models.User || mongoose.model('User', UserSchema)