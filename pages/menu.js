import Head from 'next/head'
import Layout from '../components/Layout'
import MenuCard from '../components/MenuCard'
import { connectToDatabase } from '../lib/mongodb'

export default function Menu({ menuItems }) {
    const categories = ['Starters', 'Main Course', 'Breads', 'Sides', 'Desserts', 'Beverages']

    return (
        <Layout>
            <Head>
                <title>Our Menu - Spice Paradise</title>
            </Head>
            <div className="bg-neutral py-12">
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-4xl text-textDark text-center mb-12">Our Flavorful Menu</h1>
                    {categories.map((category) => (
                        <div key={category} className="mb-16">
                            <h2 className="font-serif text-3xl text-primary mb-8">{category}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {menuItems
                                    .filter((item) => item.category === category)
                                    .map((item) => (
                                        <MenuCard key={item._id} item={item} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
