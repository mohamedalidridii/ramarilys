import { getDict } from "@/i18n/config";

import FabricHero from "@/components/FabricHero/FabricHero";
import Manifesto from "@/components/Manifesto/Manifesto";
import NameOrigin from "@/components/NameOrigin/NameOrigin";
import DenimGallery from "@/components/DenimGallery/DenimGallery";
import GoldDetails from "@/components/GoldDetails/GoldDetails";
import PieceGrid from "@/components/PieceCard/PieceGrid";
import CabaretCurtain from "@/components/CabaretCurtain/CabaretCurtain";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import CollectionsIndex from "@/components/CollectionsIndex/CollectionsIndex";
import Feature from "@/components/Feature/Feature";
import { img, maison } from "@/data/media";

const FEATURED = [
  "robe-gilet-velours",
  "jean-bicolore-redefined",
  "gilet-denim-sculpte",
  "robe-courte-volant",
];

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);

  return (
    <>
      <FabricHero />
      <Manifesto
        label={dict.home.manifestoLabel}
        text={dict.home.manifesto}
        images={[img.founder, img.denimLabels, img.goldDetail]}
        at={[2, 10, 18]}
      />
      <NameOrigin />
      <DenimGallery />
      <GoldDetails />
      <Feature
        label={dict.home.filmLabel}
        title={dict.home.filmTitle}
        copy={dict.home.filmCopy}
        film={maison.films.denim}
        inset={maison.cargoSketch}
        reverse
        dark
      />
      <PieceGrid label={dict.home.selectionLabel} title={dict.home.selectionTitle} slugs={FEATURED} />
      <CabaretCurtain
        label={dict.home.cabaretLabel}
        title={dict.home.cabaretTitle}
        copy={dict.home.cabaretCopy}
        cta={dict.home.cabaretCta}
        ctaHref={`/${lang}/plaza-athenee`}
      />
      <MarqueeBanner words={dict.home.marquee} />
      <CollectionsIndex label={dict.home.linesLabel} title={dict.home.linesTitle} />
    </>
  );
}
