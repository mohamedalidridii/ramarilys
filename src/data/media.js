// Maison Rama Rilys' own media, from Instagram @maison.rama.rilys, imported
// and cropped with scripts/import-instagram.mjs.
const pad = (n) => String(n).padStart(2, "0");
const ev = (n) => `/maison/event/${pad(n)}.jpg`;
const crop = (name) => `/maison/crops/${name}.jpg`;
const own = (folder, ids) => ids.map((id) => `/maison/${folder}/${id}.jpg`);
const range = (n, prefix = "") => Array.from({ length: n }, (_, i) => `${prefix}${pad(i + 1)}`);

export const maison = {
  tailleur: own("campaign", range(9, "tailleur-")),
  ivoire: own("campaign", range(3, "ivoire-")),
  cargo: own("campaign", ["cargo-01", "cargo-02"]),
  cargoSketch: "/maison/campaign/cargo-croquis.jpg",
  // Plaza Athénée evening, 30.09.2026
  event: range(22).map((_, i) => ev(i + 1)),
  // Pieces as worn by the guests or shown on the mannequins that evening
  worn: [
    crop("rama-salon"),
    crop("robe-longue"),
    crop("robe-volant"),
    crop("mini-robe"),
    crop("gilet-denim"),
    crop("gilet-col-volant"),
    crop("robe-gilet-mannequin"),
    crop("rama-rire"),
    crop("jean-mannequin"),
  ],
  films: {
    soiree: { src: "/maison/films/soiree.mp4", poster: "/maison/films/soiree.jpg" },
    denim: { src: "/maison/films/denim.mp4", poster: "/maison/films/denim.jpg" },
  },
};

// Hand-picked frames reused across sections
export const img = {
  hero: "/maison/campaign/tailleur-03.jpg",
  // Rama Linczowski with her guests in the Plaza Athénée salon
  heroGroup: ev(4),
  // Rama Linczowski, the founder
  founder: crop("rama-portrait"),
  velvetDress: crop("rama-salon"),
  velvetGilet: crop("gilet-col-volant"),
  ruffleHem: crop("robe-volant"),
  denimLabels: crop("jean-bicolore"),
  denimOpen: "/maison/campaign/tailleur-05.jpg",
  denimMannequin: crop("jean-mannequin"),
  goldDetail: crop("detail-boutons"),
  engravedButton: crop("detail-croquis"),
  buttoning: crop("detail-manchette"),
  label: crop("detail-etiquette"),
  ivorySet: "/maison/campaign/ivoire-01.jpg",
  salon: ev(7),
  longTable: ev(14),
  dinner: ev(1),
  toast: ev(12),
  cabaretFeathers: crop("cabaret-plumes"),
  cabaretStage: crop("cabaret-scene"),
  cabaretSolo: crop("cabaret-solo"),
  cabaretDuo: crop("cabaret-duo"),
  cabaretTrio: ev(22),
};
