import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-link text-sm font-medium transition ${
      isActive
        ? "text-[#c9a227]"
        : "text-white hover:text-[#d9bc4b]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#173c8f] shadow-sm">

      <div className="container-main">

        <div className="h-[68px] flex items-center justify-between">

          {/* BRAND */}

          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 shrink-0"
          >

            <div className="w-10 h-10 rounded-full bg-white text-[#173c8f] flex items-center justify-center font-bold">
              JN
            </div>

            <div className="leading-tight">

              <div className="text-white font-bold text-base sm:text-lg">
                JNPT Employees
              </div>

              <div className="text-[11px] sm:text-xs text-blue-100">
                Co-op. Credit Society Ltd.
              </div>

            </div>

          </Link>


          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
            >
              About
            </NavLink>


            {/* SERVICES */}

            <div className="relative">

              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setResourcesOpen(false);
                }}
                className="nav-link flex items-center gap-1 text-sm font-medium text-white hover:text-[#d9bc4b] transition"
              >
                Services
                <span className="text-xs">▼</span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2">

                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    All Services
                  </Link>

                  <Link
                    to="/loans"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Loan Schemes
                  </Link>

                </div>
              )}

            </div>


            {/* RESOURCES */}

            <div className="relative">

              <button
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setServicesOpen(false);
                }}
                className="nav-link flex items-center gap-1 text-sm font-medium text-white hover:text-[#d9bc4b] transition"
              >
                Resources
                <span className="text-xs">▼</span>
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2">

                  <Link
                    to="/notices"
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Notices
                  </Link>

                  <Link
                    to="/reports"
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Annual Reports
                  </Link>

                  <Link
                    to="/downloads"
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Downloads
                  </Link>

                </div>
              )}

            </div>


            <NavLink
              to="/committee"
              className={navClass}
            >
              Committee
            </NavLink>

            <NavLink
              to="/gallery"
              className={navClass}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
            >
              Contact
            </NavLink>

          </nav>


          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-lg border border-white/20 text-white flex items-center justify-center text-xl"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "×" : "☰"}
          </button>

        </div>


        {/* MOBILE NAV */}

        {mobileOpen && (

          <div className="lg:hidden border-t border-white/10 py-5">

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMobile}
                className="px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMobile}
                className="px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                About
              </Link>


              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Services
                <span>⌄</span>
              </button>

              {servicesOpen && (
                <div className="ml-4 border-l border-white/20 pl-3">

                  <Link
                    to="/services"
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-blue-100"
                  >
                    All Services
                  </Link>

                  <Link
                    to="/loans"
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-blue-100"
                  >
                    Loan Schemes
                  </Link>

                </div>
              )}


              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Resources
                <span>⌄</span>
              </button>

              {resourcesOpen && (
                <div className="ml-4 border-l border-white/20 pl-3">

                  <Link
                    to="/notices"
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-blue-100"
                  >
                    Notices
                  </Link>

                  <Link
                    to="/reports"
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-blue-100"
                  >
                    Annual Reports
                  </Link>

                  <Link
                    to="/downloads"
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-blue-100"
                  >
                    Downloads
                  </Link>

                </div>
              )}


              <Link
                to="/committee"
                onClick={closeMobile}
                className="px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Committee
              </Link>

              <Link
                to="/gallery"
                onClick={closeMobile}
                className="px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={closeMobile}
                className="px-3 py-3 rounded-lg text-white hover:bg-white/10"
              >
                Contact
              </Link>

            </div>

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;