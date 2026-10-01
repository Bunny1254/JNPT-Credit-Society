import { Link } from "react-router-dom";

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-[#0b1f3a] text-white">
      <div className="container-main py-16 sm:py-20">

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4b34a]">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-300 max-w-2xl">
            {description}
          </p>
        )}

      </div>
    </section>
  );
}

export default PageHeader;