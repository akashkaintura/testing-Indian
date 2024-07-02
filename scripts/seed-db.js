import { connectToDatabase } from '../lib/mongodb'
import MenuItem from '../models/MenuItem'

const menuItems = [
    {
        name: 'Butter Chicken',
        description: 'Tender chicken in a rich, creamy tomato sauce',
        price: 450,
        category: 'Main Course',
    },
    {
        name: 'Vegetable Samosas',
        description: 'Crispy pastries filled with spiced vegetables',
        price: 240,
        category: 'Starters',
    },
    // Add more menu items here
]

async function seedDatabase() {
    try {
        const { db } = await connectToDatabase()
        await db.collection('menu_items').deleteMany({})
        await db.collection('menu_items').insertMany(menuItems)
        console.log('Database seeded successfully')
        process.exit(0)
    } catch (error) {
        console.error('Error seeding database:', error)
        process.exit(1)
    }
}

seedDatabase()