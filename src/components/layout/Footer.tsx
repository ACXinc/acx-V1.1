export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              ACX
            </h3>

            <p className="text-gray-400">
              Building modern websites, web applications,
              and digital solutions for businesses,
              entrepreneurs and startups.
            </p>

          </div>



          {/* Navigation */}

          <div>

            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>

            </div>

          </div>



          {/* Contact */}

          <div>

            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">

              <p>chebbiadem454@gmail.com</p>

              <p>
                Think, Believe, Make It Happen.
              </p>

            </div>

          </div>

        </div>



        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">

          © {year} ACX. All rights reserved.

        </div>

      </div>

    </footer>
  );
}