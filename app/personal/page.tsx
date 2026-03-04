import { ScrollReveal } from "../components/ScrollReveal";

export default function Personal() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Personal</p>
              <h1
                className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Här är vi
              </h1>
              <p className="text-lg text-[#0F3460]/70 leading-relaxed">
                Det är vi som tillsammans med alla barnen representerar Förskolan Harpan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#F7C948]/15 to-[#FF7F7F]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(15,52,96,0.1)]">
                <img
                  src="/personal.jpg"
                  alt="Personalen på Förskolan Harpan"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="mb-5 text-3xl tracking-tight text-[#0F3460]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vill du träffa oss?
            </h2>
            <p className="mb-8 text-[#0F3460]/70">
              Kontakta rektor Susanne Stolt så berättar vi mer om förskolan.
            </p>
            <a
              href="/kontakt"
              className="rounded-full bg-[#F7C948] px-8 py-4 text-base font-bold text-[#0F3460] shadow-[0_4px_20px_rgba(247,201,72,0.35)] transition-all hover:shadow-[0_8px_30px_rgba(247,201,72,0.45)] hover:brightness-105"
            >
              Kontakta oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
