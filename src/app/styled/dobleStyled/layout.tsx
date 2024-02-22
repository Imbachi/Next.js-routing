import classes from '../styled.module.css'

const InnerInnerLayout = ({ children }: any) => {
    return (
        <div className={classes.div2}>
            {children}
        </div>
    )
}

export default InnerInnerLayout;