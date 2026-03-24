import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Footer from './Components/Footer'
import { AuthProvide } from './context/AuthContext'


const App = () => {
  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen mx-w-screen-2xl max-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>


    </>
  )
}

export default App
