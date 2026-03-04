import { ScrollReveal } from "../components/ScrollReveal";

export default function SokPlats() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Sök plats</p>
              <h1
                className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Välkommen att söka plats hos oss
              </h1>
              <p className="text-lg text-[#0F3460]/70 leading-relaxed">
                Ansökan görs via Hässleholms kommuns hemsida. Undrar ni något? Kontakta rektor Susanne Stolt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <div className="space-y-6">
              <a
                href="https://www.hassleholm.se/utbildning-och-barnomsorg/forskola-och-barnomsorg/e-tjanst.html"
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex items-center gap-5 rounded-2xl border border-[#0F3460]/5 bg-white p-6 shadow-sm transition-colors hover:border-[#F7C948]/30 md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3CD] text-2xl">
                  🏛️
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-[#0F3460]" style={{ fontFamily: "var(--font-display)" }}>
                    Hässleholms kommuns hemsida
                  </h3>
                  <p className="text-sm text-[#0F3460]/60">
                    Läs mer om hur ansökan går till på kommunens sida.
                  </p>
                </div>
                <svg className="h-5 w-5 shrink-0 text-[#0F3460]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <a
                href="https://skolwebbhlm.hassleholm.se/HCW.Welfare.CC.CDCWeb/Functions/Application/StartView.aspx?ApplicationType=cdc&Domain=Hassleholm&uiculture=sv-SE"
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex items-center gap-5 rounded-2xl border-2 border-[#F7C948]/30 bg-[#FFF8E7] p-6 shadow-sm transition-colors hover:border-[#F7C948]/50 md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F7C948] text-2xl">
                  📝
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-[#0F3460]" style={{ fontFamily: "var(--font-display)" }}>
                    Ansök om plats direkt
                  </h3>
                  <p className="text-sm text-[#0F3460]/60">
                    Gå direkt till e-tjänsten för att ansöka om förskoleplats.
                  </p>
                </div>
                <svg className="h-5 w-5 shrink-0 text-[#0F3460]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-sm md:p-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3CD]">
                <svg className="h-7 w-7 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3
                className="mb-2 text-xl font-bold text-[#0F3460]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Har du frågor?
              </h3>
              <p className="mb-4 text-[#0F3460]/60">
                Kontakta rektor Susanne Stolt direkt.
              </p>
              <a
                href="tel:0732646157"
                className="text-lg font-bold text-[#0F3460] transition-colors hover:text-[#F7C948]"
              >
                0732-64 61 57
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
