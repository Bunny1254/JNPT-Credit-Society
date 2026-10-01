import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function About() {
  return (
    <div>

      <PageHeader
        eyebrow="About the Society"
        title="A cooperative created for JNPT employees."
        description="Learn about the purpose, membership model and financial facilities of the JNPT Employees Co-op. Credit Society."
      />

      <section className="section">
        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                Who We Are
              </p>

              <h2 className="section-title mt-4">
                A society built around employee members.
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 text-lg leading-8">

              <p>
                The JNPT Employees Co-op. Credit Society is a cooperative
                credit society exclusively serving eligible JNPT employees.
              </p>

              <p>
                Members contribute a fixed amount every month while they
                remain in service. The contribution model allows members
                to build their financial participation in the society
                over their working years.
              </p>

              <p>
                At the end of the financial year, the applicable dividend
                and other member benefits are distributed in accordance
                with the society's rules and approvals.
              </p>

              <p>
                Eligible members can also access loan facilities for
                requirements such as education and personal needs.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section className="section bg-[#f8fafc]">

        <div className="container-main">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="card p-7 bg-white">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0b1f3a]">
                Employee Membership
              </h3>

              <p className="mt-3 text-slate-500 leading-7">
                The society is intended exclusively for eligible JNPT
                employees.
              </p>

            </div>


            <div className="card p-7 bg-white">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0b1f3a]">
                Monthly Contribution
              </h3>

              <p className="mt-3 text-slate-500 leading-7">
                Members make regular monthly contributions during their
                service period, subject to applicable rules.
              </p>

            </div>


            <div className="card p-7 bg-white">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0b1f3a]">
                Member Benefits
              </h3>

              <p className="mt-3 text-slate-500 leading-7">
                Eligible members may receive annual dividend and access
                available society loan facilities.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container-main">

          <div className="rounded-2xl bg-[#0b1f3a] text-white p-8 sm:p-12">

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4b34a]">
              Member Facilities
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Savings, dividend and loan support.
            </h2>

            <p className="mt-4 text-slate-300 leading-7 max-w-2xl">
              The society combines regular member contributions with
              financial facilities intended to support employees during
              their service.
            </p>

            <Link
              to="/loans"
              className="inline-flex mt-7 px-5 py-3 rounded-lg bg-white text-[#0b1f3a] font-semibold"
            >
              Explore Loan Facilities →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;