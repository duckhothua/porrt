const config = {
  title: "Ven Dep zai",
  description: {
    long: "T làm bố chúng m",
    short:
      "Chúng m là con t",
  },
  keywords: [
    "Ven",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Venn",
  email: "linhm6657@gmail.com",
  site: "dev.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/l2md3v/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/l2md3v",
  },
};
export { config };
