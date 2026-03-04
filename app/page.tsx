import { ScrollReveal } from "./components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FFF3CD] px-[5%] pb-16 pt-28 lg:pb-0 lg:pt-20">
        <div className="blob-gold" style={{ width: 500, height: 500, top: "-10%", right: "-5%" }} />
        <div className="blob-coral" style={{ width: 300, height: 300, bottom: "10%", left: "-5%" }} />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#F7C948]/30 bg-[#F7C948]/10 px-4 py-2">
                <span className="text-lg">♪</span>
                <span className="text-sm font-semibold text-[#0F3460]">Kristen förskola med musikprofil</span>
              </div>

              <h1
                className="animate-fade-in-up delay-100 mb-6 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] tracking-tight text-[#0F3460]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Välkommen till{" "}
                <span className="text-[#F7C948]">Förskolan Harpan</span>
              </h1>

              <p className="animate-fade-in-up delay-200 mb-8 max-w-md text-lg leading-relaxed text-[#0F3460]/70">
                En kristen förskola med musikprofil. Den &ldquo;lilla förskolan&rdquo; med 31 barn på två avdelningar – Pärlan och Diamanten.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
                <a
                  href="/sok-plats"
                  className="rounded-full bg-[#F7C948] px-8 py-4 text-base font-bold text-[#0F3460] shadow-[0_4px_20px_rgba(247,201,72,0.35)] transition-all hover:shadow-[0_8px_30px_rgba(247,201,72,0.45)] hover:brightness-105"
                >
                  Sök plats hos oss
                </a>
                <a
                  href="/verksamhet"
                  className="rounded-full border-2 border-[#0F3460]/15 px-8 py-4 text-base font-semibold text-[#0F3460] transition-all hover:border-[#0F3460]/30 hover:bg-[#0F3460]/5"
                >
                  Läs om verksamheten
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up delay-400 relative mb-8 lg:mb-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F7C948]/20 to-[#FF7F7F]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(15,52,96,0.12)]">
                <img
                  src="/musik.jpg"
                  alt="Barn spelar instrument på Förskolan Harpan"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating music note decoration */}
              <div className="note-float absolute -right-2 -top-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7C948] shadow-lg md:-right-4 md:-top-4">
                <span className="text-2xl text-[#0F3460]">♪</span>
              </div>
              <div className="note-float absolute bottom-2 left-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7F7F] shadow-lg md:-bottom-3 md:-left-3" style={{ animationDelay: "-3s" }}>
                <span className="text-xl text-white">♫</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🎵", title: "Musikprofil", desc: "Sång, rytmik och instrument varje vecka" },
              { icon: "✝️", title: "Kristen värdegrund", desc: "Trygghet, kärlek och respekt för alla" },
              { icon: "🍽️", title: "Hemlagad lunch", desc: "Nyttig och vällagad mat varje dag" },
              { icon: "🌳", title: "Härlig gård", desc: "Gungor, rutschkana, cykelbana och sandhav" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift rounded-2xl border border-[#0F3460]/5 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3CD] text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#0F3460]" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0F3460]/60">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OM OSS */}
      <section className="bg-white px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Om oss</p>
                <h2
                  className="mb-6 text-3xl tracking-tight text-[#0F3460] md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Den lilla förskolan med det stora hjärtat
                </h2>
                <div className="space-y-4 text-[#0F3460]/70 leading-relaxed">
                  <p>
                    Förskolan Harpan är den &ldquo;lilla förskolan&rdquo; med 31 barn på två avdelningar – Pärlan och Diamanten.
                  </p>
                  <p>
                    Barnen erbjuds en trygg miljö som samtidigt utmanar och lockar till lek och aktivitet. Förskolan präglas av en pedagogik där omsorg, fostran och lärande bildar en enhet så att den stimulerar och utmanar barnen till utveckling och lärande.
                  </p>
                  <p>
                    Varje år har förskolan stor jul- och sommarkonsert. På vår härliga gård finns bland annat gungor, rutschkana, cykelbana och ett stort sandhav. Varje dag serveras hemlagad lunch.
                  </p>
                  <p className="text-sm italic text-[#0F3460]/50">
                    Förskolan håller om möjligt stängt v 29 och 30.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F7C948]/15 to-transparent blur-xl" />
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
        </div>
      </section>

      {/* MUSIKPROFIL */}
      <section className="relative overflow-hidden bg-[#0F3460] px-[5%] py-20 text-white md:py-28">
        <div className="blob-gold" style={{ width: 400, height: 400, top: "-20%", right: "10%", opacity: 0.08 }} />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Vår musikprofil</p>
              <h2
                className="mb-8 text-3xl tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Musik som väg till lärande
              </h2>
              <p className="mb-8 text-lg text-white/80 leading-relaxed">
                Sång och musik är en väg in i språk, delaktighet, inkludering och vänskap. Därför blir det helt naturligt att använda musiken som ett verktyg för att öka barnens inlärningsförmåga. Forskning visar att sång och musik stimulerar hjärnan och gör den mottaglig för all sorts inlärning.
              </p>
              <p className="text-white/70 leading-relaxed">
                Vårt mål är att barnen ska uppleva glädjen i sången och musiken och att de ska få prova på olika instrument och rytmer. Det gör vi genom sång- och rytmikövningar, musiksagor och rörelsesånger. Förskolan strävar efter att göra barnen medvetna om sin egen röst, så att de vågar använda den.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-10">
                <div className="space-y-2 text-white/80 leading-relaxed italic">
                  <p>Musik skapar glädje och dans.</p>
                  <p>Glädje och dans skapar rörelse.</p>
                  <p>Rörelse skapar koordination.</p>
                  <p>Koordination skapar förståelse.</p>
                  <p>Förståelse skapar ord.</p>
                  <p>Ord skapar meningar.</p>
                  <p>Meningar skapar språk.</p>
                </div>
                <p className="mt-6 text-xs text-white/40">
                  Musikspråka i förskolan, med musik, rytm och rörelse 2003 – Mallo Vesterlund
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* KRISTEN INRIKTNING */}
      <section className="px-[5%] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Vår kristna inriktning</p>
              <h2
                className="mb-8 text-3xl tracking-tight text-[#0F3460] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Alla är unika och lika mycket värda
              </h2>
              <p className="mb-6 text-[#0F3460]/70 leading-relaxed">
                Förskolan bygger på en kristen grundsyn där bordsbön, bibelberättelser och kristna barnsånger är inslag i verksamheten. Även de kristna högtiderna uppmärksammas.
              </p>
              <p className="mb-10 text-[#0F3460]/70 leading-relaxed">
                Vår önskan är att barn och vårdnadshavare ska känna sig unika och lika mycket värda.
              </p>
              <div className="rounded-2xl bg-[#FFF3CD] p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-wider text-[#D4A017]">Den gyllene regeln</p>
                <p className="mt-3 text-lg font-semibold text-[#0F3460] italic leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                  &ldquo;Allt vad ni vill att människorna ska göra för er, det ska ni också göra för dem.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8E7] to-[#FFF3CD] px-[5%] py-20 md:py-28">
        <div className="blob-gold" style={{ width: 500, height: 500, top: "10%", left: "50%", transform: "translateX(-50%)" }} />
        <ScrollReveal>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2
              className="mb-6 text-3xl tracking-tight text-[#0F3460] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vill du veta mer eller söka plats?
            </h2>
            <p className="mb-8 text-[#0F3460]/70 leading-relaxed">
              Vi tar gärna emot nya familjer! Sök plats via Hässleholms kommun eller kontakta rektor Susanne Stolt direkt.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/sok-plats"
                className="rounded-full bg-[#F7C948] px-8 py-4 text-base font-bold text-[#0F3460] shadow-[0_4px_20px_rgba(247,201,72,0.35)] transition-all hover:shadow-[0_8px_30px_rgba(247,201,72,0.45)] hover:brightness-105"
              >
                Sök plats
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
