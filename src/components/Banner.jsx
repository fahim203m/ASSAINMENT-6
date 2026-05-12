const Banner = () => {

  return (
    <section className="py-20 bg-white">

      <div className="container-custom grid md:grid-cols-2 items-center gap-10">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="mt-6 text-gray-500 leading-7">
            Discover premium digital tools to improve productivity,
            automation and workflow management.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-7 py-3 rounded-full">
              Get Started
            </button>

            <button className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-7 py-3 rounded-full">
              Learn More
            </button>

          </div>

        </div>

        <div>

          <img
            src="/src/assets/banner-C8dER-aL.png" 
            alt="banner"
            className="w-full"
          />

        </div>

      </div>

    </section>
  )
}

export default Banner