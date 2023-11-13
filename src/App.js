import './App.css';
import Menu from './components/Menu/Menu';
import React from 'react';
import SectionArticles from './components/SectionArticles/SectionArticles';
import articles from './articles.js';

class App extends React.Component {
    articlesApp = articles;

    render() {
        return (
            <>
                <header>
                    <Menu/>
                </header>
                <main>
                    <SectionArticles articlesProp={this.articlesApp}/>
                </main>
                <footer>

                </footer>
            </>
        );
    }
}

export default App;
