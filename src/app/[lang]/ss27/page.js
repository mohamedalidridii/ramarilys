import { getDict } from "@/i18n/config";
import { img, maison } from "@/data/media";

import PageHero from "@/components/PageHero/PageHero";
import Chapters from "@/components/Chapters/Chapters";
import GoldDetails from "@/components/GoldDetails/GoldDetails";
import Palette from "@/components/Palette/Palette";
import PieceGrid from "@/components/PieceCard/PieceGrid";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  return { title: dict.ss27.title, description: dict.ss27.intro };
}

export default async function SS27({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const s = dict.ss27;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} meta="Plaza Athénée — 30.09.2026" image={maison.tailleur[7]} dark />
      <Chapters chapters={s.chapters} images={[img.denimLabels, img.velvetDress, img.ivorySet, img.cabaretFeathers]} />
      <MarqueeBanner words={dict.home.marquee} dark />
      <GoldDetails />
      <Palette label={s.paletteLabel} swatches={s.palette} />
      <PieceGrid
        label={s.outro}
        title={dict.home.selectionTitle}
        slugs={[
          "tailleur-denim-croise",
          "veste-denim-ivoire",
          "ensemble-denim-cargo",
          "robe-longue-boutons-dores",
          "gilet-velours-col-volant",
          "jupe-crayon-denim",
          "mini-robe-velours",
          "jean-bicolore-redefined",
          "gilet-denim-sculpte",
        ]}
      />
    </>
  );
}
