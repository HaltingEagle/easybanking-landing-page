import Bottom from './sections/Bottom'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Middle from './sections/Middle'
import Top from './sections/Top'
import React from 'react'
function App() {

  return (
    <main className='overflow-hidden'>
      <Header/>
      <Top/>
      <Middle/>
      <Bottom/>
      <Footer/>
    </main>
  )
}

export default App

