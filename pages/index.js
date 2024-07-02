import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spice Paradise - Authentic Indian Cuisine</title>
        <meta name="description" content="Experience the flavors of India at Spice Paradise" />
      </Head>
      <div className="relative h-screen">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Indian spices and dishes"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-6xl mb-4">Welcome to Spice Paradise</h1>
            <p className="font-sans text-xl mb-8">Discover authentic Indian flavors in every bite</p>
            <Link href="/menu">
              <a className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300">
                Explore Our Menu
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}