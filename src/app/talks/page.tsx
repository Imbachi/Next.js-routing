//React Server Component
import Link from 'next/link';
import classes from './page.module.css';

export default async function Talks() {

    const result: Response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    });

    const comments = await result.json();
    return (
        <main className={classes.main}>
            <h2 className={classes.h2}>JavaScript Talks Q2</h2>
            <ul className={classes.ul}>
                {comments.map((comment: any) => (
                    <li className={classes.li}>
                        <Link href={`talks/${comment.id}`} key={comment.id}>{comment.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
