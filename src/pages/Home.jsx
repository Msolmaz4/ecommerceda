import React from 'react'
import Anno from '../components/Anno'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slid from '../components/Slid'

const Home = () => {
  return (
    <div>

<Anno/>

<Navbar/>
<Slid/>
<Categories/>

<Products/>
    </div>
  )
}

export default Home