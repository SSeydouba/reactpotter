import "./card.css"

const Card = (props) =>{
    return (
        <div className="card">
            <img src={props.urlImage} />
            <div> {props.name} </div>
        </div>
    )
}
export default Card;