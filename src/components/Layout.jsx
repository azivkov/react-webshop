import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout({cart}) {

    return(
        <>
            <Header cart={cart} />
            <Outlet />
            <Footer />
        </>

    )
}

export {Layout}