import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Us - Spice Paradise</title>
            </Head>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">About Spice Paradise</h1>
                <p className="mb-4">
                    Spice Paradise is a family-owned Indian restaurant dedicated to bringing the authentic flavors of India to your table. Our chefs use traditional recipes and the finest ingredients to create dishes that transport you to the bustling streets of Mumbai and the serene landscapes of Kerala.
                </p>
                <p className="mb-4">
                    Founded in 2010, we have been serving our community with love and passion for over a decade. Our commitment to quality and customer satisfaction has made us a favorite among locals and visitors alike.
                </p>
                <p>
                    Whether you're a seasoned lover of Indian cuisine or new to its rich flavors, we invite you to join us for a culinary journey you won't forget.
                </p>
            </div>
        </Layout>
    )
}