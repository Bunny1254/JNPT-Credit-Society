import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-[#0b1f3a] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#163b68] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#c9a227] opacity-[0.05] blur-3xl" />
        </div>

        <div className="container-main relative py-20 lg:py-24">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">

                <div className="w-9 h-[2px] bg-[#c9a227]" />

                <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#d4b34a]">
                  JNPT Employees Co-op. Credit Society
                </p>

              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.08] tracking-[-0.03em]">
                Financial support built for JNPT employees.
              </h1>

              <p className="mt-7 text-base sm:text-lg leading-8 text-slate-300 max-w-xl">
                A members-only cooperative credit society helping JNPT
                employees build savings, receive annual member benefits
                and access financial assistance when they need it.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/services"
                  className="hero-btn hero-btn-primary"
                >
                  Explore Services
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  to="/loans"
                  className="hero-btn hero-btn-secondary"
                >
                  Explore Loans
                </Link>

              </div>

            </div>


            {/* IMAGE */}

            <div className="w-full">

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-white/10">

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                <div className="relative h-full flex flex-col items-center justify-center text-center px-8">

                  <div className="w-20 h-20 rounded-full bg-white text-[#0b1f3a] flex items-center justify-center text-2xl font-bold shadow-lg">
                    JN
                  </div>

                  <p className="mt-6 text-lg font-medium text-white">
                    JNPT Employees Co-op. Credit Society
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Official society photograph
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* KEY INFORMATION */}

      <section className="bg-white border-b border-slate-200">

        <div className="container-main">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            <div className="py-7 lg:py-8 lg:pr-8 border-b sm:border-r lg:border-b-0 border-slate-200">

              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-400">
                Membership
              </p>

              <p className="mt-2 text-base font-semibold text-[#0b1f3a]">
                JNPT Employees Only
              </p>

            </div>

            <div className="py-7 lg:py-8 sm:pl-8 lg:px-8 border-b lg:border-b-0 lg:border-r border-slate-200">

              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-400">
                Monthly Contribution
              </p>

              <p className="mt-2 text-base font-semibold text-[#0b1f3a]">
                From ₹1,000*
              </p>

            </div>

            <div className="py-7 lg:py-8 sm:pr-8 lg:px-8 border-b sm:border-b-0 lg:border-r border-slate-200">

              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-400">
                Member Benefit
              </p>

              <p className="mt-2 text-base font-semibold text-[#0b1f3a]">
                Annual Dividend*
              </p>

            </div>

            <div className="py-7 lg:py-8 sm:pl-8 lg:pl-8">

              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-400">
                Loan Facility
              </p>

              <p className="mt-2 text-base font-semibold text-[#0b1f3a]">
                Up to ₹15 Lakh*
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="section bg-[#f8fafc]">

        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                About the Society
              </p>

              <h2 className="section-title mt-4 max-w-xl">
                A financial cooperative created for JNPT employees.
              </h2>

            </div>

            <div className="max-w-xl">

              <p className="text-lg leading-8 text-slate-600">
                The JNPT Employees Co-op. Credit Society is a
                members-only cooperative credit society serving eligible
                employees of Jawaharlal Nehru Port Trust.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Members contribute a fixed amount every month during
                their service period. The society operates on a
                cooperative model in which members participate in the
                financial benefits provided under the society's rules.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The society also provides loan facilities to eligible
                members for requirements such as education and personal
                financial needs.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center mt-8 font-semibold text-[#0b1f3a] border-b-2 border-[#c9a227] pb-1 hover:text-[#163b68]"
              >
                Learn more about the society
                <span className="ml-2">→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="section">

        <div className="container-main">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
              How Membership Works
            </p>

            <h2 className="section-title mt-3">
              Save, participate and access member facilities.
            </h2>

            <p className="section-subtitle">
              The society follows a simple cooperative model designed
              around the working life and financial needs of its members.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="card p-7">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                01
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Become a Member
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Membership is intended for eligible JNPT employees
                who participate in the society.
              </p>

            </div>


            <div className="card p-7">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                02
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Contribute Monthly
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Members make their monthly contribution during their
                service period, subject to the society's rules.
              </p>

            </div>


            <div className="card p-7">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                03
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Access Member Benefits
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Eligible members can benefit from annual dividend
                distribution and available loan facilities.
              </p>

            </div>

          </div>

          <p className="mt-6 text-xs text-slate-400">
            * Amounts, eligibility, dividend rates and loan limits are
            subject to the society's applicable rules, policies and
            approvals.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="section bg-[#f8fafc]">

        <div className="container-main">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                Member Facilities
              </p>

              <h2 className="section-title mt-3">
                Services built around members.
              </h2>

              <p className="section-subtitle">
                Explore the key facilities available to eligible
                members of the society.
              </p>

            </div>

            <Link
              to="/services"
              className="btn-secondary shrink-0"
            >
              View All Services
              <span className="ml-2">→</span>
            </Link>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            <div className="group card p-7 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                01
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Savings & Membership
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Monthly contributions and membership facilities
                available to eligible JNPT employees.
              </p>

            </div>


            <div className="group card p-7 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                02
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Personal Loans
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Loan assistance for eligible members for personal
                financial requirements, subject to applicable rules.
              </p>

            </div>


            <div className="group card p-7 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">

              <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                03
              </div>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-7">
                Education Loans
              </h3>

              <p className="text-slate-500 leading-7 mt-3">
                Financial assistance for eligible education-related
                requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* LOAN CTA */}

      <section className="bg-[#0b1f3a] text-white">

        <div className="container-main py-20 lg:py-24">

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4b34a]">
                Loan Facilities
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
                Financial assistance when you need it.
              </h2>

              <p className="mt-5 text-slate-300 leading-8 max-w-2xl">
                Eligible society members can access loan facilities
                including education and personal loans, subject to
                the society's applicable eligibility criteria and rules.
              </p>

            </div>

            <div className="lg:text-right">

              <p className="text-sm text-slate-400">
                Member loan facility
              </p>

              <p className="text-4xl sm:text-5xl font-bold text-white mt-2">
                Up to ₹15 Lakh*
              </p>

              <Link
                to="/loans"
                className="inline-flex items-center mt-7 px-6 py-3.5 rounded-lg bg-[#c9a227] text-[#0b1f3a] font-semibold hover:bg-[#d9bc4b] transition"
              >
                View Loan Schemes
                <span className="ml-2">→</span>
              </Link>

            </div>

          </div>

          <p className="mt-8 text-xs text-slate-500">
            * Subject to eligibility, applicable society rules, approvals
            and other conditions.
          </p>

        </div>

      </section>


      {/* NOTICES */}

      <section className="section">

        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                Stay Informed
              </p>

              <h2 className="section-title mt-3">
                Notices & Announcements
              </h2>

              <p className="section-subtitle">
                Important notices and official announcements for society
                members.
              </p>

              <Link
                to="/notices"
                className="btn-primary mt-8"
              >
                View Notices →
              </Link>

            </div>


            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-8">

              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">
                Official Updates
              </p>

              <h3 className="text-xl font-semibold text-[#0b1f3a] mt-3">
                Society information and notices
              </h3>

              <p className="mt-3 text-slate-500 leading-7">
                New announcements, important member information and
                official notices will be published here.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section className="section bg-[#f8fafc]">

        <div className="container-main">

          <div className="rounded-2xl bg-white border border-slate-200 px-7 py-10 sm:px-10 lg:px-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                Member Support
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 tracking-tight">
                Need information about membership or loans?
              </h2>

              <p className="text-slate-600 mt-4 leading-7">
                Contact the society office for information about
                membership, contributions, loans and other facilities.
              </p>

            </div>

            <Link
              to="/contact"
              className="btn-primary shrink-0"
            >
              Contact Society
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;