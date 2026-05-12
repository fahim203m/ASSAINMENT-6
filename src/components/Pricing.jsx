const Pricing = () => {

  return (
    <section className="py-24">

      <div className="container-custom">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Pricing Plans
          </h1>

          <p className="mt-5 text-gray-500">
            Flexible pricing for everyone.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-sm">

            <h1 className="text-3xl font-bold">
              Starter
            </h1>

            <h2 className="text-5xl font-bold text-purple-700 mt-6">
              $19
            </h2>

            <p className="mt-4 text-gray-500">
              Best for beginners
            </p>

            <button className="w-full mt-8 border border-purple-700 text-purple-700 py-3 rounded-full">
              Choose Plan
            </button>

          </div>

          <div className="bg-purple-700 text-white p-10 rounded-3xl scale-105">

            <h1 className="text-3xl font-bold">
              Professional
            </h1>

            <h2 className="text-5xl font-bold mt-6">
              $49
            </h2>

            <p className="mt-4">
              Most Popular Package
            </p>

            <button className="w-full mt-8 bg-white text-purple-700 py-3 rounded-full">
              Choose Plan
            </button>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm">

            <h1 className="text-3xl font-bold">
              Enterprise
            </h1>

            <h2 className="text-5xl font-bold text-purple-700 mt-6">
              $99
            </h2>

            <p className="mt-4 text-gray-500">
              For large businesses
            </p>

            <button className="w-full mt-8 border border-purple-700 text-purple-700 py-3 rounded-full">
              Choose Plan
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Pricing