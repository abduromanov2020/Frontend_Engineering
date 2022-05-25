import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Layout(props) {
    return (
        <>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout