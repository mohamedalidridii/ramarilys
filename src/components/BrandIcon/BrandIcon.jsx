import { FLOWER, BRACKETS, LETTERS } from "./paths";

// Full lockup: lily emblem + "MAISON ΓAMA ΓILYS"
const BrandIcon = ({ fill = "currentColor", className = "", title = "Maison Rama Rilys" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 5552 1556"
    className={className}
    fill={fill}
    role="img"
    aria-label={title}
  >
    <path d={FLOWER} />
    <path d={BRACKETS} />
    <path d={LETTERS} />
  </svg>
);

// Emblem only: the lily between the two brackets
export const Emblem = ({ fill = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2236 0 859 1037"
    className={className}
    fill={fill}
    aria-hidden="true"
  >
    <path className="emblem-flower" d={FLOWER} />
    <path className="emblem-brackets" d={BRACKETS} />
  </svg>
);

// Wordmark only: "MAISON ΓAMA ΓILYS"
export const Wordmark = ({ fill = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 1270 5552 290"
    className={className}
    fill={fill}
    role="img"
    aria-label="Maison Rama Rilys"
  >
    <path d={LETTERS} />
  </svg>
);

export default BrandIcon;
