import { getSession } from 'next-auth/react'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import MenuItem from '../../models/MenuItem'

export default async function handler(req, res) {
    const session = await getSession({ req })
    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    await dbConnect()

    switch (req.method) {
        case 'GET':
            try {
                const user = await User.findOne({ email: session.user.email }).populate('favoriteDishes')
                res.status(200).json(user.favoriteDishes)
            } catch (error) {
                res.status(500).json({ error: 'Error fetching favorite dishes' })
            }
            break

        case 'POST':
            try {
                const { dishId } = req.body
                const user = await User.findOne({ email: session.user.email })
                const dish = await MenuItem.findById(dishId)

                if (!dish) {
                    return res.status(404).json({ error: 'Dish not found' })
                }

                if (!user.favoriteDishes.includes(dishId)) {
                    user.favoriteDishes.push(dishId)
                    await user.save()
                }

                res.status(200).json({ message: 'Dish added to favorites' })
            } catch (error) {
                res.status(500).json({ error: 'Error adding dish to favorites' })
            }
            break

        case 'DELETE':
            try {
                const { dishId } = req.body
                const user = await User.findOne({ email: session.user.email })

                user.favoriteDishes = user.favoriteDishes.filter(id => id.toString() !== dishId)
                await user.save()

                res.status(200).json({ message: 'Dish removed from favorites' })
            } catch (error) {
                res.status(500).json({ error: 'Error removing dish from favorites' })
            }
            break

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}