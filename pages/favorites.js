import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'
import MenuCard from '../components/MenuCard'

export default function Favorites() {
    const { data: session, status } = useSession()
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if (session) {
            fetchFavorites()
        }
    }, [session])

    const fetchFavorites = async () => {
        try {
            const response = await fetch('/api/favorites')
            if (response.ok) {
                const data = await response.json()
                setFavorites(data)
            }
        } catch (error) {
            console.error('Error fetching favorites:', error)
        }
    }

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (!session) {
        return (
            <Layout>
                <h1>Please sign in to view your favorite dishes</h1>
            </Layout>
        )
    }

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">Your Favorite Dishes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map(dish => (
                    <MenuCard key={dish._id} item={dish} />
                ))}
            </div>
        </Layout>
    )
}