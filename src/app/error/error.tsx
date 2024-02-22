'use client'
import classes from '@/app/page.module.css'


export default function errorExample({ error, reset }: any) {
    return (
        <main className={classes.main}>
            <div>
                <h3>{error.message}</h3>
                <button onClick={reset}>Reset</button>
            </div>
        </main>
    )
}
