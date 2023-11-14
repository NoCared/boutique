import './App.css';
import Menu from './components/Menu/Menu';
import React from 'react';
import SectionArticles from './components/SectionArticles/SectionArticles';
import Cart from './components/Cart/Cart';
import articles from './articles.js';
import BoutiqueContext from './BoutiqueContext.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesApp: articles,
            qteDecrement: this.qteDecrement.bind(this),
            qteIncrement: this.qteIncrement.bind(this),
            panier: []
        }
    }


    addItemPanier = (id) => {

        const index = this.state.panier.findIndex(x => x.id === id);
        if (index >= 0) {
            this.setState(prevState => {
                const newPanier = [...prevState.panier];
                newPanier[index] = { ...newPanier[index], qte: newPanier[index].qte + 1 };

                return {
                    ...prevState,
                    panier: newPanier,
                };
            });
        }
        else {
            this.setState({
                ...this.state,
                // mise à jour de mon panier avec l'ajout de i
                panier: [...this.state.panier, { id: id, qte: 1 }],
            });
        }
    }
    removeItemPanier = (id) => {
        const index = this.state.panier.findIndex(x => x.id === id);
        this.setState(prevState => {
            const newPanier = [...prevState.panier];
            newPanier[index] = { ...newPanier[index], qte: newPanier[index].qte - 1 };

            if (newPanier[index].qte <= 0)
            {
                newPanier.splice(index,1);
            }

            return {
                ...prevState,
                panier: newPanier,
            };
        });
    }

    //Creation d'une méthode pour décrémenter un article
    qteDecrement = (i) => {
        if (this.state.articlesApp[i].qte > 0) {
            //Je ne peux pas directement réattribuer une valeur à mes states
            //this.state.articlesApp[i].qte--; -> impossible
            //pour cela je dois utiliser un setter à partir de la méthode setState


            //// ------- ONE VERSION
            let newArticle = this.state.articlesApp.slice();
            newArticle[i].qte--;
            this.setState({
                ...this.state,
                // mise à jour de ma qte pour i (id de l'article)
                articlesApp: newArticle,
                // // mise à jour de mon panier avec l'ajout de i
                // panier: [...this.state.panier, i],
            });

            this.addItemPanier(i);

            //// ------- OTHER
            // let newArticle = this.state.articlesApp.map((value, index) => {
            //     if (i === index) {
            //         value.qte--;
            //     }
            //     return value;
            // });
            // this.setState({
            //     ...this.state,
            //     articlesApp: newArticle
            // })

            ////// ------------------------- OPTIMISED
            //     this.setState(prevState => {
            //         const newArticlesApp = [...prevState.articlesApp];
            //         newArticlesApp[i] = { ...newArticlesApp[i], qte: newArticlesApp[i].qte - 1 };

            //         return {
            //             ...prevState,
            //             articlesApp: newArticlesApp,
            //              panier:[...this.state.panier,i],
            //         };
            //     });


        }
    }

    //Creation d'une méthode pour incrémenter un article
    qteIncrement = (i) => {
        let newArticle = this.state.articlesApp.slice();
        newArticle[i].qte++;
        this.setState({
            ...this.state,
            articlesApp: newArticle,
        });

        this.removeItemPanier(i);
    }

    render() {
        return (
            <BoutiqueContext.Provider value={this.state}>
                <header>
                    <Menu />
                </header>
                <main>
                    <Cart panierLength={this.state.panier.length}>Texte du titre pour le composant Cart</Cart>
                    <SectionArticles articlesProp={this.state} />
                </main>
                <footer>

                </footer>
            </BoutiqueContext.Provider>
        );
    }
}

export default App;
