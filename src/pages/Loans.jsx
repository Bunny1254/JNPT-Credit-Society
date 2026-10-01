import PageHeader from "../components/PageHeader";

const loans = [
  {
    title: "Personal Loan",
    description:
      "Financial assistance for eligible members for personal requirements, subject to the society's applicable rules and eligibility conditions.",
  },
  {
    title: "Education Loan",
    description:
      "Financial assistance for eligible education-related expenses, subject to the society's applicable rules and approvals.",
  },
];

function Loans() {
  return (
    <div>

      <PageHeader
        eyebrow="Loan Facilities"
        title="Financial assistance for eligible members."
        description="Members may access loan facilities for personal and education-related requirements, subject to applicable society rules."
      />

      <section className="section">

        <div className="container-main">

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

            {loans.map((loan, index) => (
              <div
                key={loan.title}
                className="card p-8"
              >

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b18b19]">
                  Loan {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="text-2xl font-bold text-[#0b1f3a] mt-4">
                  {loan.title}
                </h2>

                <p className="mt-4 text-slate-500 leading-7">
                  {loan.description}
                </p>

              </div>
            ))}

          </div>


          <div className="mt-10 rounded-2xl bg-[#0b1f3a] text-white p-8 sm:p-10 max-w-4xl">

            <p className="text-xs uppercase tracking-[0.2em] text-[#d4b34a] font-semibold">
              Member Loan Limit
            </p>

            <p className="text-4xl sm:text-5xl font-bold mt-3">
              Up to ₹15 Lakh*
            </p>

            <p className="mt-4 text-slate-300 leading-7 max-w-2xl">
              The maximum loan amount is subject to member eligibility,
              applicable society rules, repayment capacity, approvals
              and other conditions.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              * As per the information currently provided. Final limit
              and conditions should be confirmed from the society's
              approved loan rules.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Loans;