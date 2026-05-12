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
           Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today..
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-7 py-3 rounded-full">
              Explore Products
            </button>

            <button class="flex items-center gap-2 border-2 border-purple-400 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 ">
              Watch Demo
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