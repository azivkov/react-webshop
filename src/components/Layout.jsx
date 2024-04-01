import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function Layout() {

    return(
        <>
            <Toaster/>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export {Layout}