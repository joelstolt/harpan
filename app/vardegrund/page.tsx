import { ScrollReveal } from "../components/ScrollReveal";

export default function Vardegrund() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Värdegrund</p>
              <h1
                className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vi vill vara en förskola som...
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { icon: "🤝", text: "Är trygg och där alla barn har samma värde." },
              { icon: "🌍", text: "Speglar de värden och rättigheter som uttrycks i FN:s konvention om barns rättigheter (barnkonventionen)." },
              { icon: "📚", text: "Prioriterar omsorg, utveckling och lärande." },
              { icon: "🗣️", text: "Ger barnen rätt till delaktighet och inflytande." },
              { icon: "🔍", text: "Uppmuntrar till utforskande, nyfikenhet och lust att leka." },
              { icon: "👨‍👩‍👧", text: "Samarbetar på ett nära och förtroendefullt sätt med hemmet för att barnen ska utvecklas rikt och mångsidigt." },
              { icon: "🌱", text: "Har en hälsofrämjande miljö." },
              { icon: "✝️", text: "Står för kristna värderingar." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-lift flex gap-4 rounded-2xl border border-[#0F3460]/5 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3CD] text-xl">
                    {item.icon}
                  </div>
                  <p className="text-[#0F3460]/70 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              Vill du veta mer?
            </h2>
            <p className="mb-8 text-[#0F3460]/70">
              Läs om vår verksamhet eller kontakta oss direkt.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/verksamhet"
                className="rounded-full bg-[#F7C948] px-8 py-4 text-base font-bold text-[#0F3460] shadow-[0_4px_20px_rgba(247,201,72,0.35)] transition-all hover:shadow-[0_8px_30px_rgba(247,201,72,0.45)] hover:brightness-105"
              >
                Vår verksamhet
              </a>
              <a
                href="/kontakt"
                className="rounded-full border-2 border-[#0F3460]/15 px-8 py-4 text-base font-semibold text-[#0F3460] transition-all hover:border-[#0F3460]/30 hover:bg-[#0F3460]/5"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
