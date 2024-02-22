import classes from '@/app/page.module.css';
import Link from 'next/link';

export default function StyledPage() {
    return (
        <main className={classes.main}>
            <h2>This is Supposed to be Styled</h2>
            <Link href='/styled/dobleStyled'> STYLE MEEE!!!</Link>
            <p>Ill get good at CSS I swear</p>
        </main>
    )
}
