import { toast } from "react-toastify"

const Cart = ({
  cart,
  handleRemove,
  handleCheckout
}) => {

  return (
    <div className="bg-white p-8 rounded-3xl">

      <h1 className="text-3xl font-bold mb-8">
        Cart Items
      </h1>

      {
        cart.length === 0 ? (
          <p>No Product Added</p>
        ) : (
          <>
            {
              cart.map(item=>(
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-5"
                >

                  <div>
                    <h1 className="text-xl font-semibold">
                      {item.icon} {item.name}
                    </h1>

                    <p className="text-purple-700 font-bold">
                      ${item.price}
                    </p>
                  </div>

                  <button
                    onClick={()=>{
                      handleRemove(item.id)
                      toast.error("Removed")
                    }}
                    className="bg-red-500 text-white px-5 py-2 rounded-full"
                  >
                    Remove
                  </button>

                </div>
              ))
            }

            <button
              onClick={handleCheckout}
              className="w-full bg-purple-700 text-white py-4 rounded-full mt-8"
            >
              Proceed To Checkout
            </button>
          </>
        )
      }

    </div>
  )
}

export default Cart