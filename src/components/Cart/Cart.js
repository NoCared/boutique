import CartDetails from '../CartDetails/CartDetails'


const Cart = (props) => {
    return (
        <section>
            <h2>{props.children}</h2>
            <div>
                {
                    /* Affichage des éléments de mon panier avec CartDetails à partir de props.panierLength  */
                    
                    //Utilisé comme une boucle for
                    Array.from(Array(props.panierLength), (value, key) => {
                        return (
                                <CartDetails key={key} id={key} />
                        )
                    })
                }
            </div>
            <p>
                {props.panierCost === 0 ? "Panier vide" : "Total price : " + props.panierCost}
            </p>
        </section>
    )
}
export default Cart;