import CartDetails from '../CartDetails/CartDetails'


const Cart = (props) => {
    return (
        <section>
            <h2>{props.children}</h2>
            <div>
                {
                    /* Affichage des éléments de mon panier avec CartDetails à partir de props.panierLength  */

                    // ()=>{
                    //     for(let index = 0; index < props.panierLength;index++)
                    //     {
                    //         return <CartDetails key={index} id={index}/>
                    //     }
                    // }

                    Array.from(Array(props.panierLength), (value, key) => {
                        return (
                                <CartDetails key={key} id={key} />
                        )
                    })


                    // props.articlesProp.panier.map((value, index) => {
                    //     <CartDetails key={index} id={value}/>
                    // })
                }
            </div>
        </section>
    )
}
export default Cart;