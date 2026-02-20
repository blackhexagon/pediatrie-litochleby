import hyperCholesterol from "./src/images/hypercholesterol.jpeg";

const reservationLink =
  "https://pediatrie-litochleby.reservio.com/services/343b0b08-7387-43dd-abdd-fda08bc653e3";

export default {
  reservationLink,
  title: "Pediatrie Litochleby",
  news: [
    {
      text: `Dovolená 23.–25. 2. 2026. Akutní případy ošetří MUDr. Naděje Tošovská v ordinačních hodinách.`,
    },
    {
      text: `Možnost bezjehlové aplikace. Možné pro subkutánní i intramuskulární očkování bez použití jehly. Dostupné v naší ordinaci od 1. 3. 2026. Poplatek 350 Kč za aplikaci.`,
    },
    {
      text: `Očkování proti chřipce dostupné od 1. října. Více informací na stránce <a href="/ockovani" class="underline">očkování</a>.`,
    },
    {
      text: `
    Pro zpříjemnění očkování nyní používáme
    <strong>Mini Buzzy LADYBUZZ „Beruška“ 🐞</strong>,
    který pomáhá zmírnit bolest a nepříjemné pocity při aplikaci vakcíny.`,
    },
    {
      text: `Od října 2025 bude dostupné pro kojence narozené od 4/2025 očkování RSV monoklonální protilátkou.`,
    },
    {
      text: `Nově možnost vyšetření lipidového spektra z kapky krve v rámci celorepublikové studie záchytu familiární hypercholesterolemie (viz <a class="underline" href="${hyperCholesterol.src}">obrázek</a>) pro 3-7 leté děti. Pro ostatní v rámci nadstandardu za poplatek.`,
    },
    {
      text: `Od 14. dubna 2025 nabízíme screening očních vad přístrojem Plusoptix. Objednávat se můžete <a class="underline" href=${reservationLink}>online</a>. Vyšetření je hrazeno do 3 let z veřejného pojištění, i pro neregistrované. Pro pacienty nad 3 roky je poplatek za vyšetření 300 Kč.`,
    },
    {
      text: `Termíny na předporodní konzultace: vždy 3. čtvrtek v měsíci od 8 hodiny.`,
    },
  ],
  phone: "+420 272 919 633",
  gsm: "+420 775 073 796",
  email: "pediatrie.litochleby@gmail.com",
  whatsapp: "https://wa.me/420775073796",
  instagram: "https://www.instagram.com/pediatrie_litochleby",
  openingHours: [
    ["Pondělí", "7:30 - 11:00"],
    ["Úterý", "11:00 - 15:00 (MUDr. Naděje Tošovská)"],
    ["Středa", "8:00 - 11:00"],
    ["Čtvrtek", "12:30 - 15:00"],
    ["Pátek", "7:30 - 11:00"],
  ],
  controlHours: [
    ["Pondělí", "11:00 - 12:00"],
    ["Středa", "11:00 - 12:00"],
    ["Pátek", "11:00 - 12:00"],
  ],
  description: `
    Vítáme vás na stránkách Pediatrie Litochleby MUDr. Kateřiny Rieger
    Konopáskové nacházející se na poliklinice Litochleby na pražském Chodově.
    Jsme ordinace s dlouhodobou praxí, která byla založena v devadesátých letech.
    Praxi nyní vede atestovaná lékařka s dlouholetou praxí v ambulantní a
    nemocniční pediatrii MUDr. Kateřina Rieger Konopásková. Od 2. ledna 2026
    v ordinaci působí MUDr. Naděje Tošovská. Nabízíme komplexní péči o pacienty
    od narození až do dospělosti.
  `,
  gdpr: {
    title: "GDPR",
    path: "/gdpr",
    description: "Informace pro pacienty o zpracování osobních údajů",
  },
  links: {
    team: {
      title: "Náš tým",
      path: "/nas-tym",
      description: `Seznamte se s naším týmem, který je odhodlán poskytovat odbornou péči pro podporu zdraví vašeho dítěte na každém kroku jeho vývoje.`,
    },
    registration: {
      title: "Registrace",
      path: "/registrace",
      description: `Registrace nových pacientů`,
    },
    services: {
      title: "Služby",
      heading: "Poskytované služby a vybavení",
      path: "/sluzby",
      description: `Poskytujeme léčebnou a preventivní péči pro děti ve věku od narození do 19 let`,
    },
    insurance: {
      title: "Pojišťovny",
      path: "/pojistovny",
      description: "Spolupracujeme s následujícími pojišťovnami",
    },
    vaccination: {
      title: "Očkování",
      path: "/ockovani",
      description:
        "Nabízíme očkování  proti pneumokokům 20 valenční vakcínou Prevenar 20 zdarma pro kojence od 2. měsíce ve schématu 3+1. Prohlédněte si interaktivní verzi očkovacího kalendáře pro děti – povinné a nepovinné hrazené očkování",
    },
    faq: {
      title: "Dotazy",
      path: "/dotazy",
      description:
        "Máte dotazy ohledně dětského zdraví? Získejte informace důvěryhodně od našich pediatrických odborníků.",
    },
    emergency: {
      title: "Pohotovost",
      path: "/pohotovost",
      description:
        "V době mimo ordinační hodiny pro nemocné, při nutnosti ošetření lékařem, se obraťte na dětskou pohotovost",
    },
    prices: {
      title: "Ceník",
      path: "/cenik",
      description: "Úkony nehrazené zdravotními pojišťovnami",
    },
    contact: {
      title: "Kontakt",
      heading: "Ordinační hodiny a objednání",
      path: "/kontakt",
      description:
        "Kontaktujte naši pediatrickou ordinaci pro jakékoli dotazy nebo objednání na schůzku. Jsme tu, abychom poskytli podporu a odbornou péči pro vaše dítě.",
    },
  },
};
