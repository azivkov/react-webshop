import './DetailedBlogView.css'
import { images } from '../../assets/images'
import { blogData } from './blogData';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function DetailedBlogView() {
    const defaultBlog = {
        title: "No such blog!",
        description: "This blog doesn't exist"
    }

    const urlParams = useParams();
    const matchedBlog = blogData.filter(blog => {
        return urlParams.id === blog.id.toString();
    })

    const blog = matchedBlog[0] !== undefined ? matchedBlog[0] : defaultBlog;

    const blogPlusIndex = (blogData.findIndex(item => item.id === blog.id) + 1) % blogData.length;
    const blogPlus = blogData[blogPlusIndex];

    const blogPlusTwoIndex = (blogData.findIndex(item => item.id === blog.id) + 2) % blogData.length;
    const blogPlusTwo = blogData[blogPlusTwoIndex];
    
    return(
    <main class="blog-detail">
        <div class="blog-detail-container">
            <div class="moreblog">
                <h2 class="secondary-font main-text-color">Više s bloga</h2>
                <div>
                    <h3 class="main-font main-text-color"><img src={blogPlus.image} alt={blogPlus.title}
                            title={blogPlus.title} />{blogPlus.title}
                    </h3>
                    <p class="main-font">{blogPlus.description}
                    </p>

                    <Link to={"/blog/"+blogPlus.id}>Pročitaj više...</Link>
                </div>

                <div>
                <h3 class="main-font main-text-color"><img src={blogPlusTwo.image} alt={blogPlusTwo.title}
                            title={blogPlusTwo.title} />{blogPlusTwo.title}
                    </h3>
                    <p class="main-font">{blogPlusTwo.description}
                    </p>

                    <Link to={"/blog/"+blogPlusTwo.id}>Pročitaj više...</Link>
                </div>

            </div>

            <div className="mainblog">
                <p className="popis secondary-font"><Link to ="/blog">Idi na popis blogova <FontAwesomeIcon icon={faArrowRight}
                            className="fa-solid fa-arrow-right"></FontAwesomeIcon></Link></p>
                <h2 className="main-text-color">{blog.title}</h2>
                <article className="blagdani">
                    <img src={blog.image} alt={blog.title} title={blog.title} />
                    <p className="secondary-font" style={{padding: "1rem", lineHeight: "1.4rem"}}>
                        {blog.longDescription}
                    </p>

                    <p className="objava secondary-font">Objavila: A.A., {blog.date}</p>
                    </article>

            </div>
        </div>

    </main>
    )
}

export {DetailedBlogView}