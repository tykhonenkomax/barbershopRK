import React, { useEffect } from 'react';
import { Header, Hero, Booking, LogIn, MyAccount, Registration, About, Barbers, ServicesBlock, SocialNavbar, ScrollTop, Gallery, Contact, Footer } from './components';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user";

const App = () => {
  const currentSidebarName = useSelector(state => state.sidebar.currentSidebarName);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      {currentSidebarName === 'registration' && <Registration />}
      {currentSidebarName === 'login' && <LogIn />}
      {currentSidebarName === 'booking' && <Booking />}
      {currentSidebarName === 'myAccount' && <MyAccount />}

      <SocialNavbar />
      <ScrollTop />
      <div className="main">

        <Hero />
        <About />
        <Barbers />
        <ServicesBlock />
        <Gallery />
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App