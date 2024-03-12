function FooterContact({title, contact}) {
    return(
        <div className={"kontakt"}>
        <h3>{title}</h3>
        <ul>
            {contact.map((item,index) => (
                <li key={index}><span>{item.type}</span>{item.info}</li>
            ))}
        </ul>
    </div>
    )
}

export {FooterContact}