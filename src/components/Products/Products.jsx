import { Outlet } from "react-router-dom"

function Products() {
    return(
        <>
            <h2>Product some-id </h2>
            <Outlet />
        </>
    )
}

export {Products}