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
        </section>
    )
}
export default Cart;