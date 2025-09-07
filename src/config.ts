export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Nick Iakovenko",
  desc: "Personal website of Nick Iakovenko, principal software engineer and tech enthusiast.",
  title: "Nick Iakovenko's Blog",
  profile: "",
  ogImage: "astropaper-og.jpg",
  dynamicOgImage: false, // set to false if you don't want to generate og image on the fly
  lightAndDarkMode: false,
  showArchives: false,
  showBackButton: false, // show back button in post detail
  postPerPage: 8,
  postPerIndex: 8,
  lang: "en",
  timezone: "Europe/Zurich", // see the full list at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  editPost: { enabled: false, text: "", url: "" },
  dir: "ltr",
  scheduledPostMargin: 10, // in minutes
}

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const ;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 40,
  height: 40,
};