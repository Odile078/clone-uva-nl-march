import localFont from "@next/font/local";
export const sourceSans = localFont({
  src: [
    {
      path: "../public/fonts/sourceSansPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sourceSansPro-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sourceSans",
});
