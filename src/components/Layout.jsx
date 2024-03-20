import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function Layout({cart}) {

    return(
        <>
            <Toaster/>
            <Header cart={cart} />
            <Outlet />
            <Footer />
        </>

    )
}

export {Layout}