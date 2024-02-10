export default function Banner({children,color}){
    return(
        <div className = {`banner ${color}`}>
            {children}
        </div>
    )
}