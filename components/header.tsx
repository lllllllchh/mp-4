import Link from "next/link";

export default function Header(){
    const linkStyle = "p-1 m-2 text-xl hover:underline";
    return (
        <header className= "pt-2">
            <nav>
                <Link href={`/`} className={linkStyle}>Home</Link>
                <Link href={`/about`} className={linkStyle}>About</Link>
            </nav>
        </header>
    )
}