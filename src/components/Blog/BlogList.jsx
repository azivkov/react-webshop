import { images } from "../../assets/images"
import { Link } from "react-router-dom"

function BlogList({blogData}) {
    return(
        <div className="blog">
            {blogData.map(article => (
                <article className={"entry"+article.id}>
                <img src={article.image} alt={article.title} title={article.title} />
                <h3 className="main-font main-text-color">{article.title}</h3>
                <p className="secondary-font">
                    {article.description}
                </p>
    
                <Link to={"/blog/"+article.id}>Pročitaj više...</Link>
            </article>
            ))}

        </div>
    )
}

export {BlogList}