import { ScrollReveal } from "../components/ScrollReveal";
import { pageMeta } from "../seo";

export const metadata = pageMeta({
  title: "Verksamhet",
  description:
    "Så jobbar Förskolan Harpan. Temainriktat arbetssätt utifrån Lpfö25 med fokus på språkutveckling och musik. Läs om vår pedagogik, samverkan och inskolning.",
  path: "/verksamhet",
});

export default function Verksamhet() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-8 pt-32 md:pb-10 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Verksamhet</p>
              <h1
                className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Så jobbar vi
              </h1>
              <p className="text-lg text-[#0F3460]/70 leading-relaxed">
                Förskolans verksamhet bedrivs utifrån förskolans läroplan (Lpfö25) och utgår ifrån ett temainriktat arbetssätt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="mx-auto max-w-[800px] space-y-16">
          <ScrollReveal>
            <div>
              <p className="text-[#0F3460]/70 leading-relaxed">
                Under veckan delas barnen in i olika undervisningsgrupper där barn och pedagoger utforskar de teman som förskolan bestämmer att lägga fokus på. Vi går även till skogen och besöker Hässleholms kulturhus med bibliotek och konserthus.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl bg-[#FFF3CD] p-8 md:p-10">
              <h2
                className="mb-4 text-2xl font-bold text-[#0F3460]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Insatser läsåret 26/27
              </h2>
              <h3 className="mb-3 text-lg font-bold text-[#0F3460]">
                Utvecklingsområde 1: Barns språkutveckling
              </h3>
              <p className="mb-8 text-[#0F3460]/70 leading-relaxed">
                Syftet är att stärka barnen i deras språkutveckling och det gör vi bland annat genom högläsning, rim och ramsor och uppmuntrar dem till att våga uttrycka sig. Genom att skapa trygga och meningsfulla situationer där barnet blir lyssnade på får de möjlighet att sätta ord på sina tankar och upplevelser. I kommunikationen med andra läggs grunden både för socialt samspel och livslångt lärande.
              </p>

              <h3 className="mb-3 text-lg font-bold text-[#0F3460]">
                Utvecklingsområde 2: Musik
              </h3>
              <p className="text-[#0F3460]/70 leading-relaxed">
                Syftet är att barnen ska få uppleva glädjen i sången och musiken. I musikundervisningen får de får prova på olika instrument, rytm, puls och dynamik. Vi hjälper barnen att bli medvetna om sin egen röst, så att de vågar använda den.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2
                className="mb-4 text-2xl font-bold text-[#0F3460]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Samverkan
              </h2>
              <p className="text-[#0F3460]/70 leading-relaxed">
                En god kommunikation med hemmet är en grundförutsättning för en fungerande verksamhet, med ett öppet klimat där vi lyssnar på era tankar och åsikter. Möjlighet till detta ges bland annat vid de dagliga mötena vid lämning och hämtning, vid utvecklingssamtal, föräldramöte, föräldrafika och jul- och sommarfest.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2
                className="mb-4 text-2xl font-bold text-[#0F3460]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Inskolning
              </h2>
              <p className="mb-4 text-[#0F3460]/70 leading-relaxed">
                Förskolan strävar efter att inskolningen ska vara en bra början på samarbetet mellan hem och förskola. Det viktigaste med inskolningen är att barn och vårdnadshavare är trygga och att barnet knyter an till den pedagog som har ansvaret.
              </p>
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
              Nyfiken på att veta mer?
            </h2>
            <p className="mb-8 text-[#0F3460]/70 leading-relaxed">
              Kontakta oss gärna så berättar vi mer om vår verksamhet.
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
