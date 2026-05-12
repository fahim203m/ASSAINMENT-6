import ProductCard from "./ProductCard"

const Products = ({products,handleCart}) => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {
        products.map(product=>(
          <ProductCard
            key={product.id}
            product={product}
            handleCart={handleCart}
          />
        ))
      }

    </div>
  )
}

export default Products