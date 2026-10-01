import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#08182d] text-white">

      <div className="container-main py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-10 lg:gap-16">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-white text-[#0b1f3a] flex items-center justify-center font-bold">
                JN
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  JNPT Employees
                </h2>

                <p className="text-xs text-slate-400">
                  Co-op. Credit Society Ltd.
                </p>

              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400 max-w-md">
              Jawaharlal Nehru Port Trust Employees Co-operative Credit
              Society Ltd.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                About Society
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Services
              </Link>

              <Link
                to="/notices"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Notices
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <p>
                Jawaharlal Nehru Port Trust
              </p>

              <p>
                Email: jnpt.ecsl@gmail.com
              </p>

              <p>
                Phone: +91 XXXXX XXXXX
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="border-t border-white/10">

        <div className="container-main py-5">

          <p className="text-xs text-slate-500 text-center">
            © 2026 JNPT Employees Co-op. Credit Society Ltd. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;