import classes from './styled.module.css'

const InnerLayout = ({ children }: any) => {
    return (
        <div className={classes.div}>
            {children}
        </div>
    )
}

export default InnerLayout;