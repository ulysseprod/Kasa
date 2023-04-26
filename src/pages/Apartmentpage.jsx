import "../styles/Apartmentpage.css";
import {Navigate,useParams} from "react-router-dom"
import {Collapse} from "../components/Collapse"
import {Carousel} from "../components/Carousel"
import products from "../Database/db.json";


function Apartmentpage() { 

const { productId } = useParams();

const product = products.find((prod) => {
    return prod.id === productId;
});

if(product === undefined) {
    return <Navigate to="/404" replace={true} />;
}

const {title, location, rating, host, equipments, description, pictures, tags } = product;
const person= host.name;
const [firstName, LastName]= person.split(" ");

return (
    <div className="appartment_page">
 	    <Carousel imageUrl={pictures}/>  
        <div className= "appartment_header">
            <div className="appartment_title">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
            </div>
            <div className="appartment_tags">
                    {tags.map((tag)=>(<span key={tag}>{tag}</span>))}
                </div>
        <div className="appartment_owner">
            <div className="appartment_owner_details">
                <h3>
                    <span>{firstName}</span>
                    <span>{LastName}</span>
                </h3>
                <div className="appartment_owner_badge">
                    <img src={host.picture} alt="Propriétaire de la location"/>
                </div>
            </div>
            <div className="appartment_owner_rating">
                 {[1,2,3,4,5].map((num) =>(
                <span key={num} className={rating >= num ? "on": ""}>★</span>
            ))}

            </div>
        </div>
    </div>

    <div className="info_and_equipments">
        <Collapse title="Description" content={description}/>
        <Collapse title="Equipements" content={equipments.map(eq=><li>{eq}</li>)}/>
    </div>
</div>
  )
}

export default Apartmentpage
