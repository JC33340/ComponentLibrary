export default function Testimonial({img,children,name,company}){
    return(
        <div className = "testimonial">
            <img className = "testimonial-img" src = {img}/>
            <div className = "testimonial-content">
                {children}
                <p className = "testimonial-name">{name}</p>
                <p className = "testimonial-company">{company}</p>
            </div>
        </div>
    )
}