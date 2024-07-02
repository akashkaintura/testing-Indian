import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function OrderButton({ item }) {
    const [quantity, setQuantity] = useState(0)
    const { data: session } = useSession()

    const addToOrder = async () => {
        setQuantity(quantity + 1)

        if (session) {
            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: [{ menuItem: item._id, quantity: 1 }],
                        totalAmount: item.price
                    })
                })

                if (response.ok) {
                    console.log('Order added to history')
                }
            } catch (error) {
                console.error('Error adding order to history:', error)
            }
        }
    }

    return (
        <div className="flex items-center">
            <button
                onClick={addToOrder}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors duration-300"
            >
                Add to Order
            </button>
            {quantity > 0 && (
                <span className="ml-4 bg-gray-200 px-3 py-1 rounded-full">
                    {quantity}
                </span>
            )}
        </div>
    )
}