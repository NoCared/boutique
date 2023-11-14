


import './CartDetails.css'
import BoutiqueContext from '../../BoutiqueContext';
import React from 'react';

const CartDetails = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const articlePanier = boutiqueContext.panier[props.id];
    const article = boutiqueContext.articlesApp[articlePanier.id];


    return (
        <div className='cartDetails'>
            <span className='iconCartDetails'>
                <img src={article.url} alt="" />
            </span>
            <span>
                {article.name}
            </span>
            <span>
                <button type="input" value={"Remove"}>-</button>
            </span>
            <span>
                {articlePanier.qte}
            </span>
            <span>
                <button type="input" value={"Add"}
                onClick={
                    () => {
                        boutiqueContext.qteDecrement(articlePanier.id);
                    }}
                >+</button>
            </span>
        </div>
    );
}

export default CartDetails;