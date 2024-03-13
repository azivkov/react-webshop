import React from "react"

function ProductFilters(props) {

    return(
        <div className="aside main-font">
            <h3>FILTERI</h3>
            <form>
                <fieldset>
                    <legend>Odaberite raspon cijena:</legend>
                    {props.priceFilter.map((item, index) => (
                        <React.Fragment key={index}>
                        <input type="radio" id={item.value} name="cijena" value={item.value} /><label htmlFor={item.value}>{item.title}</label><br />
                        </React.Fragment>

                    ))}
                </fieldset>
                <br />
                <fieldset>
                    <legend>Odaberite kategorije proizvoda:</legend>

                    {props.categoryFilter.map((item, index) =>(
                        <React.Fragment key={index}>
                        <input type="checkbox" id={item.value} name="kategorija" value={item.value} key={index} /><label htmlFor={item.value}>{item.title}</label><br />
                        </React.Fragment>
                    ))}
                </fieldset>
                <button type="submit">Pretraži!</button>
            </form>
        </div>
    )
}

export {ProductFilters}