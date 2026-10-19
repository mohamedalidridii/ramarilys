import { NextResponse } from "next/server";

import { locales, defaultLocale } from "./i18n/config";

const pickLocale = (request) => {
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  if (locales.includes(saved)) return saved;

  const header = request.headers.get("accept-language") || "";
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  return preferred.find((code) => locales.includes(code)) || defaultLocale;
};

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, fonts…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
