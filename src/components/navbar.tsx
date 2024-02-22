import classes from './navbar.module.css';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <Link href="/">
                Home
            </Link>
            <Link href="/talks">
                Talks
            </Link>
            <Link href="/styled">
                Styled
            </Link>
            <Link href="/error">
                Error
            </Link>
            <Link href="/posts">
                Posts
            </Link>
            <Link href="/godknowstheroute">
                Not Defined Yet
            </Link>
        </nav>
    );
}