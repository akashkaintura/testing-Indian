import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Profile() {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        router.push('/') // Redirect to home page if not authenticated
        return null
    }

    return (
        <Layout>
            <h1>Profile</h1>
            <p>Welcome, {session.user.name}!</p>
            <p>Email: {session.user.email}</p>
        </Layout>
    )
}