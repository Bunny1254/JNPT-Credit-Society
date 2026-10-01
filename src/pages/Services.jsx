import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const services = [
  {
    number: "01",
    title: "Membership & Savings",
    description:
      "Membership and monthly contribution facilities for eligible JNPT employees.",
  },
  {
    number: "02",
    title: "Annual Dividend",
    description:
      "Information about the annual dividend and member distribution process.",
  },
  {
    number: "03",
    title: "Personal Loans",
    description:
      "Loan facilities for eligible members for personal financial requirements.",
  },
  {
    number: "04",
    title: "Education Loans",
    description:
      "Financial assistance for eligible education-related requirements.",
  },
  {
    number: "05",
    title: "Member Documents",
    description:
      "Forms, notices, reports and other official society documents.",
  },
  {
    number: "06",
    title: "Member Support",
    description:
      "Contact the society for assistance regarding membership and facilities.",
  },
];

function Services() {
  return (
    <div>

      <PageHeader
        eyebrow="Member Facilities"
        title="Services designed around JNPT employees."
        description="Explore the savings, dividend, loan and member support facilities offered by the society."
      />

      <section className="section">

        <div className="container-main">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <div
                key={service.number}
                className="group card p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >

                <div className="w-11 h-11 rounded-lg bg-[#0b1f3a] text-white flex items-center justify-center font-semibold">
                  {service.number}
                </div>

                <h2 className="mt-7 text-xl font-semibold text-[#0b1f3a]">
                  {service.title}
                </h2>

                <p className="mt-3 text-slate-500 leading-7">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

          <p className="mt-8 text-xs text-slate-400">
            Facilities, eligibility and applicable amounts are subject
            to the society's rules, policies and approvals.
          </p>

        </div>

      </section>


      <section className="section bg-[#f8fafc]">

        <div className="container-main">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b18b19]">
                Loan Facilities
              </p>

              <h2 className="text-3xl font-bold text-[#0b1f3a] mt-3">
                Looking for financial assistance?
              </h2>

            </div>

            <Link
              to="/loans"
              className="btn-primary"
            >
              View Loan Schemes →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;