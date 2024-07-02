import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'

export default function OrderHistory() {
    const { data: session, status } = useSession()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (session) {
            fetchOrderHistory()
        }
    }, [session])

    const fetchOrderHistory = async () => {
        try {
            const response = await fetch('/api/orders')
            if (response.ok) {
                const data = await response.json()
                setOrders(data)
            }
        } catch (error) {
            console.error('Error fetching order history:', error)
        }
    }

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (!session) {
        return (
            <Layout>
                <h1>Please sign in to view your order history</h1>
            </Layout>
        )
    }

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">Your Order History</h1>
            {orders.map((order, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <h2 className="text-xl font-semibold mb-2">Order #{index + 1}</h2>
                    <p className="mb-2">Date: {new Date(order.orderDate).toLocaleString()}</p>
                    <p className="mb-4">Total Amount: ₹{order.totalAmount}</p>
                    <h3 className="font-semibold mb-2">Items:</h3>
                    <ul>
                        {order.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-2">
                                {item.menuItem.name} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Layout>
    )
}