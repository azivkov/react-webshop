import React from 'react';
import './BlogPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { BlogList } from './BlogList';
import { BlogSidebar } from './BlogSidebar';
import { blogData } from './blogData';

function BlogPage() {
    return (
        <main className="main-blog">
            <h1 className="main-text-color">Naš blog</h1>
            <div className="blog-container">
                <BlogList blogData={blogData}/>
                <BlogSidebar />
                
            </div>

            <section className="nextpage">
                <div data-status="disabled"><FontAwesomeIcon icon={faBackward} className="fa-solid fa-backward" /></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div><FontAwesomeIcon icon={faForward} className="fa-solid fa-forward" /></div>
            </section>

        </main>
    );
}

export { BlogPage };
