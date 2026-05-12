import { useState } from "react"

import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Stats from "../components/Stats"
import Products from "../components/Products"
import Cart from "../components/Cart"
import Steps from "../components/Steps"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"

import productsData from "../data/products.json"

const Home = () => {

  const [cart,setCart] = useState([])

  const [showCart,setShowCart] = useState(false)

  // ADD TO CART
  const handleCart = (product) => {

    setCart([...cart,product])
  }

  // REMOVE
  const handleRemove = (id) => {

    const remaining = cart.filter(
      item => item.id !== id
    )

    setCart(remaining)
  }

  // CHECKOUT
  const handleCheckout = () => {

    setCart([])
  }

  return (
     <div className="bg-[#f5f7ff] min-h-screen">

      <Navbar cart={cart} />

      <Banner />

      <Stats />
       

      <section className="py-20">
        

        <div className="container-custom">

          <div className="flex justify-center gap-5 mb-10">

            <button
              onClick={()=>setShowCart(false)}
              className={`px-7 py-3 rounded-full ${
                !showCart
                ? "bg-purple-700 text-white"
                : "bg-white"
              }`}
            >
              Products
            </button>

            <button
              onClick={()=>setShowCart(true)}
              className={`px-7 py-3 rounded-full ${
                showCart
                ? "bg-purple-700 text-white"
                : "bg-white"
              }`}
            >
              Cart
            </button>

          </div>
          <h2 className="text-center mt-12 mb-12 font-extrabold text-4xl ">Our Premium Products</h2>

          {
            showCart ? (
              <Cart
                cart={cart}
                handleRemove={handleRemove}
                handleCheckout={handleCheckout}
              />
            ) : (
              <Products
                products={productsData}
                handleCart={handleCart}
              />
            )
          }

        </div>
       
        

      </section>
      <Steps />

<Pricing />

<Footer />

    </div>
  )
}

export default Home