export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Nick Iakovenko",
  desc: "Personal website of Nick Iakovenko, principal software engineer and tech enthusiast.",
  title: "Nick Iakovenko's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  showArchives: false,
  showBackButton: false, // show back button in post detail
  postPerPage: 8,
  postPerIndex: 8,
}

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const ;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 28,
  height: 28,
};