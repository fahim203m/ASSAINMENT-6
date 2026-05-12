const Steps = () => {

  const steps = [
    {
      id:1,
      title:"Choose Product",
      desc:"Select your desired digital tool."
    },

    {
      id:2,
      title:"Add To Cart",
      desc:"Add selected product into cart."
    },

    {
      id:3,
      title:"Checkout",
      desc:"Complete payment securely."
    }
  ]

  return (
    <section className="py-24 bg-white">

      <div className="container-custom">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            How It Works
          </h1>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Buy your favorite digital tools in a few easy steps.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {
            steps.map(step=>(
              <div
                key={step.id}
                className="bg-[#f7f8ff] p-10 rounded-3xl text-center hover:-translate-y-2 transition duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-purple-700 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                  {step.id}
                </div>

                <h1 className="text-2xl font-bold mt-7">
                  {step.title}
                </h1>

                <p className="mt-4 text-gray-500 leading-7">
                  {step.desc}
                </p>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Steps