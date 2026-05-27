export const siteInfo = {
  name: "QuizNiva",
  url: "https://quizniva.in",
  email: "contact@quizniva.in",
  ownerName: "QuizNiva Editorial Team",
  ownerPath: "/about",
  lastReviewedDate: "2026-05-26",
  lastReviewedLabel: "May 26, 2026"
};

export const staticPages = [
  {
    path: "/",
    title: "QuizNiva",
    description: "Free programming and computer fundamentals notes, MCQ quizzes, and answer explanations."
  },
  {
    path: "/subjects",
    title: "Subjects",
    description: "Browse available QuizNiva subjects and topic collections."
  },
  {
    path: "/python",
    title: "Python Notes And Quizzes",
    description: "Practice Python topics with notes, examples, MCQs, and explanations."
  },
  {
    path: "/computer-fundamentals",
    title: "Computer Fundamentals",
    description: "Study hardware, CPU, RAM, storage, operating systems, internet, binary, networking, and cybersecurity basics."
  },
  {
    path: "/search",
    title: "Search",
    description: "Search QuizNiva lessons, quizzes, and study pages."
  },
  {
    path: "/sitemap",
    title: "HTML Sitemap",
    description: "Find every major QuizNiva page, lesson, and quiz."
  },
  {
    path: "/about",
    title: "About",
    description: "Learn what QuizNiva publishes and how the content is reviewed."
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Contact QuizNiva for corrections, suggestions, and content feedback."
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "Privacy Policy for QuizNiva."
  },
  {
    path: "/terms",
    title: "Terms Of Use",
    description: "Terms of Use for QuizNiva."
  },
  {
    path: "/disclaimer",
    title: "Disclaimer",
    description: "Educational disclaimer for QuizNiva lessons, quizzes, and references."
  }
];

export const trustedReferences = {
  Python: [
    {
      label: "Python Tutorial",
      href: "https://docs.python.org/3/tutorial/"
    },
    {
      label: "Python Language Reference",
      href: "https://docs.python.org/3/reference/"
    }
  ],
  "Computer Fundamentals": [
    {
      label: "GCFLearnFree Computer Basics",
      href: "https://edu.gcfglobal.org/en/computerbasics/"
    },
    {
      label: "MDN Web Mechanics",
      href: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics"
    }
  ]
};

export function toAbsoluteUrl(path = "/") {
  return new URL(path, siteInfo.url).toString();
}
