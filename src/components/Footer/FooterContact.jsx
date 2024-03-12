function FooterContact({contact}) {
    return(
        <div class="kontakt">
        <h3>Kontakt informacije</h3>
        <ul>
            {contact.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    )
}

export {FooterContact}