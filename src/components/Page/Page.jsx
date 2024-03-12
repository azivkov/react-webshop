function Page({ title, description }) { //umjesto (props) direktno stavljamo koji su propsi
    return(
        <>
            {title && <h1>{title}</h1>}
            <p>{description}</p>
            <h2>This is a page component</h2>
        </>
    )
}

export {Page}