import './App.css';
import Menu from './components/Menu/Menu';
import React from 'react';
import SectionArticles from './components/SectionArticles/SectionArticles';
import articles from './articles.js';
import BoutiqueContext from './BoutiqueContext.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesApp: articles,
            qteDecrement: this.qteDecrement.bind(this),
            panier: []
        }
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
                // mise à jour de mon panier avec l'ajout de i
                panier:[...this.state.panier,i],
            });
            

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
            //         };
            //     });


        }
    }

    render() {
        return (
            <BoutiqueContext.Provider value={this.state}>
                <header>
                    <Menu />
                </header>
                <main>
                    <div>{this.state.panier}</div>
                    <SectionArticles articlesProp={this.state} />
                </main>
                <footer>

                </footer>
            </BoutiqueContext.Provider>
        );
    }
}

export default App;
