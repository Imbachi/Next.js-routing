import classes from '@/app/page.module.css';

export default function TalksInformation({ params }: any) {
    return (
        <main className={classes.main}>
            <h2>Here is the information for talk {params.id}</h2>
        </main>
    )
}
