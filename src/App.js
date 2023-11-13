import './App.css';
import Menu from './components/Menu/Menu';
import React from 'react';
import SectionArticles from './components/SectionArticles/SectionArticles';
import articles from './articles.js';
import BoutiqueContext from './BoutiqueContext.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articlesApp : articles,
            qteDecrement: this.qteDecrement.bind(this)
        }
    }

    //Creation d'une méthode pour décrémenter un article
    qteDecrement = (index)=>{
        console.log("Passe");
        let newArticle = this.state.articlesApp;
        newArticle[index].qte--;
        this.setState({
            articlesApp: newArticle
        })
        
        // props.articleInfo.qte--;
    }

    render() {
        return (
            <BoutiqueContext.Provider value={this.state}>
                <header>
                    <Menu/>
                </header>
                <main>
                    <SectionArticles articlesProp={this.state}/>
                </main>
                <footer>

                </footer>
            </BoutiqueContext.Provider>
        );
    }
}

export default App;
