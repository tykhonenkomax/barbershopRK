import React, {useEffect} from 'react';
import {
    Header,
    Hero,
    LogIn,
    MyAccount,
    Registration,
    About,
    Barbers,
    ServicesBlock,
    SocialNavbar,
    ScrollTop,
    Gallery,
    Contact,
    Footer
} from './components';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";
// import {Modal} from "./components/Modal/Modal";

const App = () => {
    const currentSidebarName = useSelector(state => state.sidebar.currentSidebarName);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header/>
            {currentSidebarName === 'registration' && <Registration/>}
            {currentSidebarName === 'login' && <LogIn/>}
            {currentSidebarName === 'myAccount' && <MyAccount/>}

            <SocialNavbar/>
            <ScrollTop/>
            <div className="main">

                <Hero/>
                <About/>
                <Barbers/>
                <ServicesBlock/>
                <Gallery/>
                <Contact/>
            </div>
            {/*<Modal/>*/}
            <Footer/>
        </>
    )
}

export default App
