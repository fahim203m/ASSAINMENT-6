import { FaShoppingCart } from "react-icons/fa"

const Navbar = ({cart}) => {

  return (
    <nav className="bg-white shadow-sm py-5">

      <div className="container-custom flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-700">
          DigiTools
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-600">
          <li>Home</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <div className="relative">

          <FaShoppingCart className="text-2xl text-purple-700" />

          <span className="absolute -top-3 -right-3 bg-purple-700 text-white text-xs rounded-full px-2 py-1">
            {cart.length}
          </span>
          
        </div>
         <button className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-7 py-3 rounded-full">
              Get Start
            </button>


      </div>
      

    </nav>
  )
}

export default Navbar