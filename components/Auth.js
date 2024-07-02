import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
    return (
        <button
            onClick={() => signIn('google')}
            className="bg-white text-primary px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        >
            Sign in with Google
        </button>
    )
}

export function SignOutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="bg-white text-primary px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        >
            Sign out
        </button>
    )
}