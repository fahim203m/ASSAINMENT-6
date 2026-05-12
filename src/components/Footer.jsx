const Footer = () => {

  return (
    <footer className="bg-[#0f172a] text-white py-20">

      <div className="container-custom grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-3xl font-bold">
            DigiTools
          </h1>

          <p className="mt-5 text-gray-400 leading-7">
            Premium digital tools marketplace for modern creators.
          </p>

        </div>

        <div>

          <h1 className="text-xl font-bold">
            Quick Links
          </h1>

          <div className="mt-5 space-y-3 text-gray-400">

            <p>Home</p>
            <p>Products</p>
            <p>Pricing</p>
            <p>Contact</p>

          </div>

        </div>

        <div>

          <h1 className="text-xl font-bold">
            Resources
          </h1>

          <div className="mt-5 space-y-3 text-gray-400">

            <p>Documentation</p>
            <p>Support</p>
            <p>Privacy Policy</p>

          </div>

        </div>

        <div>

          <h1 className="text-xl font-bold">
            Newsletter
          </h1>

          <input
            type="text"
            placeholder="Your Email"
            className="w-full mt-5 px-5 py-3 rounded-full text-black outline-none"
          />

          <button className="w-full bg-purple-700 py-3 rounded-full mt-4">
            Subscribe
          </button>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">

        <p>
          © 2026 DigiTools Platform. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer