import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Card 
        productName_1="Ceviche"
        productImg_1="/Images/product1.avif"
      />
    <Card 
        productName_1="Nasi Lemak"
        productImg_1="/Images/orkun-orcan-Bm8radCPG0I-unsplash.jpg"
      />
    </>
 )
}

export default App
