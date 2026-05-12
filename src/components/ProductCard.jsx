import { toast } from "react-toastify"

const ProductCard = ({product,handleCart}) => {

  const {
    name,
    description,
    price,
    period,
    tagType,
    features,
    icon
  } = product

  return (  
    <div className="bg-white p-7 rounded-3xl shadow-sm">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl">
          {icon}
        </h1>

        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
          {tagType}
        </span>

      </div>

      <h1 className="text-2xl font-bold mt-5">
        {name}
      </h1>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

      <h2 className="text-4xl font-bold text-purple-700 mt-5">
        ${price}
        <span className="text-base text-gray-500">
          /{period}
        </span>
      </h2>

      <div className="mt-5 space-y-2">

        {
          features.map((feature,index)=>(
            <p key={index}>
              ✅ {feature}
            </p>
          ))
        }

      </div>

      <button
        onClick={()=>{
          handleCart(product)
          toast.success("Added To Cart")
        }}
        className="w-full bg-purple-700 text-white py-3 rounded-full mt-7"
      >
        Buy Now
      </button>

    </div>
    
  )
}

export default ProductCard