import './Card.css'

const Card = (props)=>{
    return(
        <div>
            <img src={props.articleInfo.url} alt=""></img>
            <p>{props.articleInfo.name}</p>
            <p>{props.articleInfo.description}</p>
            <p>{props.articleInfo.price}</p>
            <button>Achat</button>
        </div>
    )
}

export default Card;