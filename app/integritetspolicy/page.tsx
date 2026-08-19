import { pageMeta } from "../seo";

export const metadata = pageMeta({
  title: "Integritetspolicy",
  description:
    "Så hanterar Förskolan Harpan personuppgifter som lämnas via webbplatsen, och vilka rättigheter du har enligt GDPR.",
  path: "/integritetspolicy",
});

const SECTIONS = [
  {
    title: "Personuppgiftsansvarig",
    body: "Förskolan Harpan ansvarar för de personuppgifter som behandlas via den här webbplatsen. Har du frågor om hur dina uppgifter hanteras kontaktar du oss på info@forskolanharpan.se eller 0732-64 61 57.",
  },
  {
    title: "Vilka uppgifter vi samlar in",
    body: "När du kontaktar oss via webbplatsen eller e-post får vi de uppgifter du själv lämnar: namn, e-postadress, telefonnummer och innehållet i ditt meddelande. Vi begär inte fler uppgifter än vad som behövs för att svara dig.",
  },
  {
    title: "Varför vi behandlar uppgifterna",
    body: "Uppgifterna används enbart för att besvara din fråga, till exempel om köplats, besök eller verksamheten. Vi säljer aldrig personuppgifter och använder dem inte för marknadsföring.",
  },
  {
    title: "Hur länge uppgifterna sparas",
    body: "Meddelanden sparas bara så länge de behövs för att hantera ditt ärende och raderas därefter. Uppgifter om barn och vårdnadshavare i förskolans verksamhet hanteras i separata system enligt skollagens krav och omfattas inte av den här webbplatsen.",
  },
  {
    title: "Statistik och cookies",
    body: "Webbplatsen använder cookiefri besöksstatistik som inte lagrar personuppgifter och inte spårar dig mellan webbplatser. Vi använder inga annons- eller spårningscookies.",
  },
  {
    title: "Dina rättigheter",
    body: "Du har rätt att få veta vilka uppgifter vi har om dig, få dem rättade eller raderade och invända mot behandling. Kontakta oss på info@forskolanharpan.se så hjälper vi dig. Du kan också lämna klagomål till Integritetsskyddsmyndigheten, IMY.",
  },
];

export default function Integritetspolicy() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF7] px-[5%] pb-8 pt-32 md:pb-10 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Integritet</p>
            <h1
              className="mb-6 text-4xl tracking-tight text-[#0F3460] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Integritetspolicy
            </h1>
            <p className="text-lg text-[#0F3460]/70">
              Så hanterar vi personuppgifter som lämnas via webbplatsen.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFDF7] px-[5%] py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-[#0F3460]">{s.title}</h2>
              <p className="leading-relaxed text-[#0F3460]/80">{s.body}</p>
            </div>
          ))}
          <p className="border-t border-[#0F3460]/10 pt-6 text-xs text-[#0F3460]/60">
            Senast uppdaterad: augusti 2026. Design:{" "}
            <a href="https://www.welovemarketing.se" className="underline underline-offset-2">
              We Love Marketing
            </a>{" "}
            · SEO:{" "}
            <a href="https://www.stoltmarketing.se" className="underline underline-offset-2">
              Stolt Marketing
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
