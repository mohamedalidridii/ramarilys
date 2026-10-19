// SS27 "Denim, redefined" — pieces shown at the Plaza Athénée presentation.
// Names and descriptions are editorial placeholders to be validated by the Maison.
// Campaign photos, crops and evening photos from the Maison's Instagram
const c = (name) => `/maison/campaign/${name}.jpg`;
const k = (name) => `/maison/crops/${name}.jpg`;
const e = (n) => `/maison/event/${String(n).padStart(2, "0")}.jpg`;

export const categories = ["all", "dresses", "denim", "tailoring"];

export const pieces = [
  {
    slug: "robe-gilet-velours",
    category: "dresses",
    name: { fr: "Robe-gilet en velours", en: "Velvet Waistcoat Dress" },
    material: { fr: "Velours de coton retravaillé", en: "Reworked cotton velvet" },
    colour: { fr: "Noir nuit, volant ivoire", en: "Night black, ivory ruffle" },
    description: {
      fr: "Une robe sans manches coupée comme un gilet de tailleur. Le velours profond est rythmé par une colonne de boutons dorés et souligné d'un volant ivoire qui adoucit la structure.",
      en: "A sleeveless dress cut like a tailored waistcoat. Deep velvet punctuated by a column of gold buttons and edged with an ivory ruffle that softens the structure.",
    },
    images: [k("rama-salon"), k("robe-gilet-mannequin"), k("rama-portrait"), e(8)],
  },
  {
    slug: "gilet-velours-col-volant",
    category: "tailoring",
    name: { fr: "Gilet long à col volant", en: "Long Ruffle-Collar Waistcoat" },
    material: { fr: "Velours, popeline de coton", en: "Velvet, cotton poplin" },
    colour: { fr: "Noir, ivoire", en: "Black, ivory" },
    description: {
      fr: "Le vestiaire masculin réécrit au féminin : un gilet allongé, épaulé avec précision, dont le col en popeline ivoire s'ouvre comme une fleur.",
      en: "Menswear rewritten for women: an elongated, precisely shouldered waistcoat whose ivory poplin collar opens like a flower.",
    },
    images: [k("gilet-col-volant"), k("robe-gilet-mannequin"), e(8)],
  },
  {
    slug: "robe-longue-boutons-dores",
    category: "dresses",
    name: { fr: "Robe longue boutonnée", en: "Long Buttoned Gown" },
    material: { fr: "Velours de soie", en: "Silk velvet" },
    colour: { fr: "Noir profond", en: "Deep black" },
    description: {
      fr: "Un buste net de tailleur qui se libère en une jupe fluide jusqu'à la cheville. Les boutons dorés accrochent la lumière comme des bijoux discrets.",
      en: "A crisp tailored bodice released into a fluid ankle-length skirt. Gold buttons catch the light like discreet jewellery.",
    },
    images: [k("robe-longue"), e(5)],
  },
  {
    slug: "robe-courte-volant",
    category: "dresses",
    name: { fr: "Robe courte à ourlet volanté", en: "Ruffle-Hem Short Dress" },
    material: { fr: "Velours retravaillé", en: "Reworked velvet" },
    colour: { fr: "Noir, ourlet ivoire", en: "Black, ivory hem" },
    description: {
      fr: "La silhouette courte de la saison : une ligne droite, presque architecturale, terminée par un volant qui danse à chaque pas.",
      en: "The season's short silhouette: a straight, almost architectural line finished with a ruffle that dances with every step.",
    },
    images: [k("robe-volant"), e(4)],
  },
  {
    slug: "mini-robe-velours",
    category: "dresses",
    name: { fr: "Mini-robe en velours", en: "Velvet Mini Dress" },
    material: { fr: "Velours de coton", en: "Cotton velvet" },
    colour: { fr: "Noir", en: "Black" },
    description: {
      fr: "Bretelles fines, boutonnage doré, longueur courte : l'élégance décontractée de la Maison, pensée pour passer du dîner au cabaret.",
      en: "Fine straps, gold buttoning, a short length: the Maison's relaxed elegance, made to move from dinner to cabaret.",
    },
    images: [k("mini-robe"), e(18)],
  },
  {
    slug: "gilet-denim-sculpte",
    category: "denim",
    name: { fr: "Gilet en denim sculpté", en: "Sculpted Denim Waistcoat" },
    material: { fr: "Denim japonais brut", en: "Raw Japanese denim" },
    colour: { fr: "Indigo nuit", en: "Midnight indigo" },
    description: {
      fr: "Le denim perd ses références utilitaires. Coupé comme un gilet de couture, cintré et boutonné d'or, il se porte sur une blouse aux manches ballon.",
      en: "Denim loses its workwear references. Cut like a couture waistcoat, fitted and buttoned in gold, worn over a balloon-sleeve blouse.",
    },
    images: [k("gilet-denim"), e(17)],
  },
  {
    slug: "jupe-crayon-denim",
    category: "denim",
    name: { fr: "Jupe crayon en denim", en: "Denim Pencil Skirt" },
    material: { fr: "Denim stretch haut de gamme", en: "Premium stretch denim" },
    colour: { fr: "Indigo", en: "Indigo" },
    description: {
      fr: "Une jupe mi-longue au tombé de tailleur, fendue au dos. Le denim y devient une matière de sophistication absolue.",
      en: "A midi skirt with a tailored drape and a back vent. Here denim becomes a material of absolute sophistication.",
    },
    images: [e(17), k("gilet-denim")],
  },
  {
    slug: "jean-bicolore-redefined",
    category: "denim",
    name: { fr: "Jean bicolore « Redefined »", en: "“Redefined” Two-Tone Jean" },
    material: { fr: "Denim délavé et brut assemblés", en: "Washed and raw denim, spliced" },
    colour: { fr: "Bleu ciel, indigo", en: "Sky blue, indigo" },
    description: {
      fr: "La pièce manifeste : deux lavages superposés à la taille, comme une ceinture de couture. Étiquette en cuir siglée, coupe droite fluide.",
      en: "The manifesto piece: two washes layered at the waist like a couture belt. Embossed leather label, fluid straight cut.",
    },
    images: [k("jean-bicolore"), k("jean-mannequin"), k("detail-etiquette")],
  },
  {
    slug: "tailleur-denim-croise",
    category: "tailoring",
    name: { fr: "Tailleur-pantalon en denim croisé", en: "Double-Breasted Denim Suit" },
    material: { fr: "Denim de coton", en: "Cotton denim" },
    colour: { fr: "Indigo moyen", en: "Mid indigo" },
    description: {
      fr: "Une veste croisée et un pantalon large, coupés dans un denim souple. Le vêtement de travail devient tenue du soir.",
      en: "A double-breasted jacket and wide trousers cut in a supple denim. Workwear becomes eveningwear.",
    },
    images: [c("tailleur-03"), c("tailleur-02"), c("tailleur-04"), c("tailleur-08"), c("tailleur-05")],
  },
  {
    slug: "veste-denim-ivoire",
    category: "denim",
    name: { fr: "Veste courte en denim ivoire", en: "Ivory Denim Cropped Jacket" },
    material: { fr: "Denim de coton, boutons dorés", en: "Cotton denim, gold buttons" },
    colour: { fr: "Ivoire", en: "Ivory" },
    description: {
      fr: "Une veste courte au col montant, boutonnée d'or et portée avec une jupe assortie : le denim en version claire et lumineuse.",
      en: "A cropped jacket with a high collar, buttoned in gold and worn with a matching skirt: denim in a bright, luminous key.",
    },
    images: [c("ivoire-01"), c("ivoire-02"), c("ivoire-03")],
  },
  {
    slug: "ensemble-denim-cargo",
    category: "denim",
    name: { fr: "Ensemble denim cargo", en: "Cargo Denim Set" },
    material: { fr: "Denim de coton, boutons dorés gravés", en: "Cotton denim, engraved gold buttons" },
    colour: { fr: "Indigo", en: "Indigo" },
    description: {
      fr: "Une chemise-veste à poches plaquées et un pantalon cargo large. Les boutons dorés gravés, dessinés dès le premier croquis, signent la pièce.",
      en: "A patch-pocket shirt jacket and wide cargo trousers. Engraved gold buttons, drawn from the very first sketch, sign the piece.",
    },
    images: [c("cargo-01"), c("cargo-02"), c("cargo-croquis")],
  },
];

export const getPiece = (slug) => pieces.find((piece) => piece.slug === slug);
