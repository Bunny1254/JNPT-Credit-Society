import { Link } from "react-router-dom";

const stats = [
  {
    label: "Notices",
    value: "0",
    description: "Published notices",
    path: "/admin/notices",
  },
  {
    label: "Reports",
    value: "0",
    description: "Annual reports",
    path: "/admin/reports",
  },
  {
    label: "Gallery",
    value: "0",
    description: "Gallery items",
    path: "/admin/gallery",
  },
  {
    label: "Messages",
    value: "0",
    description: "Contact enquiries",
    path: "/admin/messages",
  },
];

const quickActions = [
  {
    title: "Add Notice",
    description: "Publish an important society announcement.",
    path: "/admin/notices",
  },
  {
    title: "Manage Loans",
    description: "Update available loan schemes and information.",
    path: "/admin/loans",
  },
  {
    title: "Upload Report",
    description: "Add an annual report or official document.",
    path: "/admin/reports",
  },
  {
    title: "Manage Gallery",
    description: "Add or remove society photographs.",
    path: "/admin/gallery",
  },
];

function AdminDashboard() {
  return (
    <div className="max-w-[1400px] mx-auto">

      {/* PAGE HEADING */}

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b18b19]">
          Dashboard
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2 tracking-tight">
          Welcome back, Administrator.
        </h1>

        <p className="mt-3 text-slate-500 max-w-2xl">
          Manage the society website, member information, notices,
          documents and other public content from one place.
        </p>

      </div>


      {/* STATS */}

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((stat) => (

          <Link
            key={stat.label}
            to={stat.path}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>

                <p className="text-3xl font-bold text-[#0b1f3a] mt-3">
                  {stat.value}
                </p>

              </div>

              <div className="w-10 h-10 rounded-lg bg-[#f1f5f9] flex items-center justify-center text-[#0b1f3a] font-semibold">
                {stat.label.charAt(0)}
              </div>

            </div>

            <p className="text-xs text-slate-400 mt-4">
              {stat.description}
            </p>

          </Link>

        ))}

      </div>


      {/* QUICK ACTIONS */}

      <section className="mt-10">

        <div className="flex items-end justify-between mb-5">

          <div>

            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-slate-400">
              Quick Actions
            </p>

            <h2 className="text-xl font-bold text-[#0b1f3a] mt-1">
              Manage website content
            </h2>

          </div>

        </div>


        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          {quickActions.map((action) => (

            <Link
              key={action.title}
              to={action.path}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-[#c9a227] hover:shadow-md transition"
            >

              <div className="w-10 h-10 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                +
              </div>

              <h3 className="text-lg font-semibold text-[#0b1f3a] mt-5 group-hover:text-[#163b68]">
                {action.title}
              </h3>

              <p className="text-sm text-slate-500 leading-6 mt-2">
                {action.description}
              </p>

              <p className="text-sm font-semibold text-[#b18b19] mt-5">
                Open →
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* WEBSITE STATUS */}

      <section className="mt-10">

        <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-9 text-white">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4b34a]">
                Website Status
              </p>

              <h2 className="text-2xl font-bold mt-2">
                JNPT Credit Society Website
              </h2>

              <p className="text-slate-300 text-sm mt-2">
                Public website is currently available.
              </p>

            </div>

            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-[#0b1f3a] font-semibold hover:bg-slate-100 transition"
            >
              View Public Website →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AdminDashboard;