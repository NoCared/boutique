import Card from '../Card/Card';
import './SectionArticles.css';

const SectionArticles = (props)=>{
    return(
        <section>
            <h1>Mes fabuleux articles : </h1>
            {/* emplacement de mes cards articles */}
            <div className='articleList'>
                {
                    props.articlesProp.articlesApp.map((value,index)=>{
                        return(
                            <Card key={index} articleInfo={value}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default SectionArticles;