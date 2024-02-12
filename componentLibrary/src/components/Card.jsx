export default function Card({children}){
    return (
        <div className = "card">
            <div className = "card-extended">
            </div>
            <div className = "card-content">
                {children}
            </div>
        </div>
    )
}
