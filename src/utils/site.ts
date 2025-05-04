const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Leul Chanie | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://x.com/Leulc21?s=09",
    github: "https://github.com/tehseen01/the-portfolio",
  },
  mailSupport: "leulchanie576@gmail.com",
};
