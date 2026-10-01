import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: "▦",
  },
  {
    label: "Society Information",
    path: "/admin/society",
    icon: "⌂",
  },
  {
    label: "Services",
    path: "/admin/services",
    icon: "◈",
  },
  {
    label: "Loan Schemes",
    path: "/admin/loans",
    icon: "₹",
  },
  {
    label: "Notices",
    path: "/admin/notices",
    icon: "!",
  },
  {
    label: "Annual Reports",
    path: "/admin/reports",
    icon: "▤",
  },
  {
    label: "Downloads",
    path: "/admin/downloads",
    icon: "↓",
  },
  {
    label: "Committee",
    path: "/admin/committee",
    icon: "♙",
  },
  {
    label: "Gallery",
    path: "/admin/gallery",
    icon: "▧",
  },
  {
    label: "Contact Messages",
    path: "/admin/messages",
    icon: "✉",
  },
];

function AdminLayout() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await signOut(auth);

      navigate("/admin/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout error:", error);
      setLoggingOut(false);
    }
  };

  const currentUser = auth.currentUser;

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}


      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-[270px]
          bg-[#0b1f3a]
          text-white
          flex
          flex-col
          transition-transform
          duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* BRAND */}

        <div className="h-[82px] px-6 flex items-center border-b border-white/10">

          <div className="w-10 h-10 rounded-lg bg-[#c9a227] text-[#0b1f3a] flex items-center justify-center font-bold">
            JN
          </div>

          <div className="ml-3 min-w-0">

            <p className="font-semibold text-sm truncate">
              JNPT Credit Society
            </p>

            <p className="text-xs text-slate-400 mt-0.5">
              Administration
            </p>

          </div>

        </div>


        {/* NAVIGATION */}

        <div className="flex-1 overflow-y-auto px-4 py-5">

          <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Management
          </p>

          <nav className="space-y-1">

            {menuItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-lg
                  text-sm
                  transition
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }
                  `
                }
              >

                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-white/5 text-xs">
                  {item.icon}
                </span>

                <span>{item.label}</span>

              </NavLink>

            ))}

          </nav>

        </div>


        {/* USER / LOGOUT */}

        <div className="border-t border-white/10 p-4">

          <div className="flex items-center gap-3 px-2 py-3">

            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              A
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-sm font-medium text-white">
                Administrator
              </p>

              <p className="text-xs text-slate-400 truncate">
                {currentUser?.email || "Admin"}
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full mt-2 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white text-left transition disabled:opacity-50"
          >
            {loggingOut ? "Signing out..." : "Sign Out"}
          </button>

        </div>

      </aside>


      {/* MAIN AREA */}

      <div className="lg:ml-[270px] min-h-screen">

        {/* TOP BAR */}

        <header className="h-[82px] bg-white border-b border-slate-200 flex items-center justify-between px-5 sm:px-8">

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0b1f3a]"
            >
              ☰
            </button>

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Administration
              </p>

              <p className="text-sm sm:text-base font-semibold text-[#0b1f3a] mt-0.5">
                JNPT Employees Co-op. Credit Society
              </p>

            </div>

          </div>


          <div className="hidden sm:flex items-center gap-3">

            <div className="text-right">

              <p className="text-sm font-semibold text-slate-700">
                Administrator
              </p>

              <p className="text-xs text-slate-400">
                Website Manager
              </p>

            </div>

            <div className="w-9 h-9 rounded-full bg-[#0b1f3a] text-white flex items-center justify-center text-sm font-semibold">
              A
            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <main className="p-5 sm:p-8 lg:p-10">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;