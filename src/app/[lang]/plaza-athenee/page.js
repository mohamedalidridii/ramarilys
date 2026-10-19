import { getDict } from "@/i18n/config";
import { img, maison } from "@/data/media";
import { site } from "@/data/site";

import PageHero from "@/components/PageHero/PageHero";
import Feature from "@/components/Feature/Feature";
import CabaretCurtain from "@/components/CabaretCurtain/CabaretCurtain";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import { FilmBand } from "@/components/Film/Film";
import { ParallaxColumns, Ribbon, Stats } from "@/components/EventGallery/EventGallery";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  return { title: dict.event.title, description: dict.event.intro };
}

const ev = (n) => maison.event[n - 1];

// The Maison's own photos of the evening
const SALON = [ev(3), ev(5), ev(7), ev(8), ev(6), ev(17), ev(9), ev(16), ev(18)];
const GUESTS = [ev(2), ev(4), ev(10), ev(11), ev(13), ev(16), ev(18), ev(19), ev(1), ev(12)];

export default async function PlazaAthenee({ params }) {
  const { lang } = await params;
  const dict = getDict(lang);
  const e = dict.event;

  return (
    <>
      <PageHero eyebrow={e.eyebrow} title={e.title} intro={e.intro} meta="Paris 8e" image={ev(14)} dark />
      <Stats items={e.stats} />
      <FilmBand label={e.filmLabel} title={e.filmTitle} film={maison.films.soiree} dark />
      <ParallaxColumns label={e.salonLabel} copy={e.salonCopy} images={SALON} />
      <Feature label="Plaza Athénée" title={e.tableLabel} copy={e.tableCopy} image={ev(21)} inset={img.dinner} />
      <CabaretCurtain label={e.cabaretLabel} title={dict.home.cabaretTitle} copy={e.cabaretCopy} image={img.cabaretTrio} imageMobile={img.cabaretSolo} />
      <Feature
        label={e.cabaretLabel}
        title="Cabaret"
        copy={e.cabaretCopy}
        image={img.cabaretSolo}
        inset={img.cabaretDuo}
        reverse
        dark
      />
      <MarqueeBanner words={["Plaza Athénée", "30.09.2026", "Paris Fashion Week", "SS27"]} />
      <Ribbon label={e.guestsLabel} images={GUESTS} />
      <section className="container event-credit">
        <p className="label">
          {e.credit} : © {site.photoCredit} — {site.photoSource}
        </p>
      </section>
    </>
  );
}
