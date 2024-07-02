import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { SignInButton, SignOutButton } from './Auth'

export default function Header() {
    const { data: session } = useSession()

    return (
        <header className="bg-primary text-white">
            <nav className="container mx-auto px-4 py-6">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link href="/">
                            <a className="text-2xl font-bold">Spice Paradise</a>
                        </Link>
                    </li>
                    <li>
                        <ul className="flex space-x-6 items-center">
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/menu"><a>Menu</a></Link></li>
                            <li><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                            <li>
                                {session ? (
                                    <SignOutButton />
                                ) : (
                                    <SignInButton />
                                )}
                                {session && (
                                    <li>
                                        <Link href="/profile">
                                            <a>Profile</a>
                                        </Link>
                                    </li>
                                )}
                                {session && (
                                    <>
                                        <li>
                                            <Link href="/favorites">
                                                <a>Favorites</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/order-history">
                                                <a>Order History</a>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}