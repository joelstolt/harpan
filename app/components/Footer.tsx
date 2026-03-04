export const Footer = () => {
  return (
    <footer className="bg-[#0F3460] px-[5%] py-12 text-white md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#F7C948" />
                <path d="M14 28V14C14 11.5 16 9 20 9C24 9 26 11.5 26 14" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="16" x2="16" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="13" x2="20" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="24" y1="16" x2="24" y2="28" stroke="#0F3460" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 28H28" stroke="#0F3460" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                Förskolan <span className="text-[#F7C948]">Harpan</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              En kristen förskola med musikprofil i Hässleholm. 31 barn på två avdelningar – Pärlan och Diamanten.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Kontakt</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              <span>Finjagatan 19, 281 50 Hässleholm</span>
              <a href="tel:0732646157" className="transition-colors hover:text-white">
                Rektor Susanne Stolt: 0732-64 61 57
              </a>
              <a href="mailto:info@forskolanharpan.se" className="transition-colors hover:text-white">
                info@forskolanharpan.se
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#F7C948]">Huvudman</h4>
            <p className="text-sm text-white/70">Pingstkyrkan i Hässleholm</p>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/forskolan_harpan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#F7C948]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                @forskolan_harpan
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            © 2025 Förskolan Harpan. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};
