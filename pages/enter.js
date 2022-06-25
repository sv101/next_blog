import { async } from '@firebase/util'
import { auth, googleAuthProvider } from '../lib/firebase'

export default function EnterPage({ }) {
    const user = null
    const username = null

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
    
        </main>
    )
}

function SignInButton(){
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    }

    return (
        <buton className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </buton>
    )
}

function SignOutButton(){
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm(){
    
}