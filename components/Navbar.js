import Link from "next/link"

// Top navbar
export default function Navbar() {
    const user = true;
    const username = true;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {/* user is signed-in and has username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/${username}'}>
                                <img scr={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed-in or hasn't created username */}
                {!username && (
                    <>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>                        
                    </>
                )}        

            </ul>
        </nav>
    )
}