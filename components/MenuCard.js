import Image from 'next/image'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import OrderButton from './OrderButton'

export default function MenuCard({ item }) {
    const { data: session } = useSession()
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = async () => {
        if (!session) {
            alert('Please sign in to add favorites')
            return
        }

        try {
            const method = isFavorite ? 'DELETE' : 'POST'
            const response = await fetch('/api/favorites', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dishId: item._id })
            })

            if (response.ok) {
                setIsFavorite(!isFavorite)
            }
        } catch (error) {
            console.error('Error toggling favorite:', error)
        }
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative h-48">
                <Image
                    src={item.image || '/images/placeholder-dish.jpg'}
                    layout="fill"
                    objectFit="cover"
                    alt={item.name}
                />
                {session && (
                    <button
                        onClick={toggleFavorite}
                        className="absolute top-2 right-2 bg-white rounded-full p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
                            fill={isFavorite ? 'currentColor' : 'none'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="p-6">
                <h3 className="font-serif text-xl text-textDark mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                    <span className="font-sans text-lg font-bold text-primary">₹{item.price}</span>
                    <OrderButton item={item} />
                </div>
            </div>
        </div>
    )
}