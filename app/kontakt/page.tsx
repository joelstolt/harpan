import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Förskolan Harpan – Finjagatan 19, Hässleholm. Rektor Susanne Stolt, 0732-64 61 57, info@forskolanharpan.se.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Kontakt</p>
              <h1
                className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kontakta oss
              </h1>
              <p className="text-lg text-[#0F3460]/70 leading-relaxed">
                Vi finns på Finjagatan 19 i Hässleholm. Hör av dig – vi berättar gärna mer!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ScrollReveal>
              <div className="card-lift rounded-2xl border border-[#0F3460]/5 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3CD]">
                  <svg className="h-6 w-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0F3460]/50">Adress</h2>
                <p className="font-semibold text-[#0F3460]">Finjagatan 19</p>
                <p className="text-[#0F3460]/70">281 50 Hässleholm</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-lift rounded-2xl border border-[#0F3460]/5 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3CD]">
                  <svg className="h-6 w-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0F3460]/50">Telefon</h2>
                <p className="text-sm text-[#0F3460]/70">Rektor Susanne Stolt</p>
                <a href="tel:0732646157" className="font-semibold text-[#0F3460] transition-colors hover:text-[#F7C948]">
                  0732-64 61 57
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-lift rounded-2xl border border-[#0F3460]/5 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3CD]">
                  <svg className="h-6 w-6 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0F3460]/50">E-post</h2>
                <a href="mailto:info@forskolanharpan.se" className="font-semibold text-[#0F3460] transition-colors hover:text-[#F7C948]">
                  info@forskolanharpan.se
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 rounded-2xl border border-[#0F3460]/5 bg-white p-2 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Finjagatan%2019%2C%20281%2050%20H%C3%A4ssleholm&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karta till Förskolan Harpan, Finjagatan 19 i Hässleholm"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-8 rounded-2xl bg-[#FFF3CD] p-6 text-center md:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#D4A017]">Huvudman</p>
              <p className="mt-2 text-lg font-semibold text-[#0F3460]" style={{ fontFamily: "var(--font-display)" }}>
                Pingstkyrkan i Hässleholm
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
