import Card from '../Card/Card';
import './SectionArticles.css';

const SectionArticles = (props)=>{
    console.dir(props);
    return(
        <section>
            <h1>Mes fabuleux articles : </h1>
            {/* emplacement de mes cards articles */}
            <div>
                {
                    props.articlesProp.map((value,index)=>{
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