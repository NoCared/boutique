import './Card.css'
import BoutiqueContext from '../../BoutiqueContext';
import React from 'react';

const Card = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);


    return (
        <div>
            <img src={props.articleInfo.url} alt=""></img>
            <p>{props.articleInfo.name}</p>
            <p>{props.articleInfo.description}</p>
            <p>{props.articleInfo.price} £</p>
            <p>{props.articleInfo.qte}</p>
            <button onClick={
                () => {
                    boutiqueContext.qteDecrement(props.articleInfo.id);
                }
            }>Achat</button>
        </div>
    )
}

export default Card;