export const SITE = {
  website: "https://yoyozhang24.github.io/",
  author: "Yoyo Zhang",
  profile: "https://www.linkedin.com/in/minzhi-yoyo-zhang/",
  desc: "A blog about tech, career, and lifestyle.",
  title: "Yoyo Zhang",
  ogImage: "yz-logo.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
