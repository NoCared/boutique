


import './CartDetails.css'
import BoutiqueContext from '../../BoutiqueContext';
import React from 'react';

const CartDetails = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const article = boutiqueContext.articlesApp[boutiqueContext.panier[props.id]];


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
                0
            </span>
            <span>
                <button type="input" value={"Add"}>+</button>
            </span>
        </div>
    );
}

export default CartDetails;