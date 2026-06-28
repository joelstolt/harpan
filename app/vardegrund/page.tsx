import { ScrollReveal } from "../components/ScrollReveal";
import { pageMeta } from "../seo";

export const metadata = pageMeta({
  title: "Värdegrund",
  description:
    "Förskolan Harpans värdegrund: trygghet, alla barns lika värde, barnkonventionen och kristna värderingar. Kristen musikförskola i Hässleholm.",
  path: "/vardegrund",
});

export default function Vardegrund() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-8 pt-32 md:pb-10 md:pt-40">
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

      <section className="px-[5%] pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", text: "Är trygg och där alla barn har samma värde." },
              { d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418", text: "Speglar de värden och rättigheter som uttrycks i FN:s konvention om barns rättigheter (barnkonventionen)." },
              { d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25", text: "Prioriterar omsorg, utveckling och lärande." },
              { d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z", text: "Ger barnen rätt till delaktighet och inflytande." },
              { d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z", text: "Uppmuntrar till utforskande, nyfikenhet och lust att leka." },
              { d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z", text: "Samarbetar på ett nära och förtroendefullt sätt med hemmet för att barnen ska utvecklas rikt och mångsidigt." },
              { d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z", text: "Har en hälsofrämjande miljö." },
              { d: "M12 4.5v15M7.5 9h9", text: "Står för kristna värderingar." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} className="h-full">
                <div className="card-lift flex h-full gap-4 rounded-2xl border border-[#0F3460]/5 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3CD]">
                    <svg className="h-6 w-6 text-[#0F3460]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
                    </svg>
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
