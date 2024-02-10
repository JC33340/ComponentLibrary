
export default function Badge({children,shape,color}){
    return(
        <div className = {`badge ${shape} ${color}`}>
            {children}
        </div>
    )
}
