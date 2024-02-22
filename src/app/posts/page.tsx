import classesGlobal from '@/app/page.module.css'
import classes from './post.module.css'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function PostPage() {
    await sleep(3000);

    const result: Response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    });

    const posts = await result.json();

    return (
        <main className={classesGlobal.main}>
            <h2> Posts </h2>
            {posts.map((post: any) => (
                <div className={classes.div} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </main>
    )

}