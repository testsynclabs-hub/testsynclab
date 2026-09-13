export const blogCovers: Record<string, { src: string; accent: string; bg: string }> = {
  "outsourced-qa-for-us-startups": {
    src: "/images/blog/outsourced-qa-for-us-startups.svg",
    accent: "#60A5FA",
    bg: "#0B1F4B",
  },
  "remote-qa-for-canadian-saas": {
    src: "/images/blog/remote-qa-for-canadian-saas.svg",
    accent: "#F87171",
    bg: "#7F1D1D",
  },
  "qa-plus-ai-same-lab": {
    src: "/images/blog/qa-plus-ai-same-lab.svg",
    accent: "#38BDF8",
    bg: "#0B1220",
  },
  "free-qa-audit-what-you-get": {
    "src": "/images/blog/free-qa-audit-what-you-get.svg",
    "accent": "#3B82F6",
    "bg": "#0B1F4B"
  },
  "reduce-production-bugs-without-hiring-qa": {
    "src": "/images/blog/reduce-production-bugs-without-hiring-qa.svg",
    "accent": "#2DD4BF",
    "bg": "#0F3D3E"
  },
  "playwright-vs-selenium-for-startups": {
    "src": "/images/blog/playwright-vs-selenium-for-startups.svg",
    "accent": "#FB923C",
    "bg": "#7C2D12"
  },
  "qa-retainer-cost-vs-cost-of-bugs": {
    "src": "/images/blog/qa-retainer-cost-vs-cost-of-bugs.svg",
    "accent": "#4ADE80",
    "bg": "#14532D"
  },
  "qa-retainer-vs-hiring-in-house": {
    "src": "/images/blog/qa-retainer-vs-hiring-in-house.svg",
    "accent": "#60A5FA",
    "bg": "#1E3A8A"
  },
  "regression-testing-checklist-before-release": {
    "src": "/images/blog/regression-testing-checklist-before-release.svg",
    "accent": "#A78BFA",
    "bg": "#312E81"
  },
  "playwright-ci-for-startups": {
    "src": "/images/blog/playwright-ci-for-startups.svg",
    "accent": "#38BDF8",
    "bg": "#0C4A6E"
  },
  "how-to-brief-a-remote-qa-partner": {
    "src": "/images/blog/how-to-brief-a-remote-qa-partner.svg",
    "accent": "#C4B5FD",
    "bg": "#4C1D95"
  },
  "api-testing-before-ui-automation": {
    "src": "/images/blog/api-testing-before-ui-automation.svg",
    "accent": "#22D3EE",
    "bg": "#164E63"
  },
  "saas-performance-testing-p95-latency": {
    "src": "/images/blog/saas-performance-testing-p95-latency.svg",
    "accent": "#F87171",
    "bg": "#7F1D1D"
  },
  "release-gates-for-remote-qa-teams": {
    "src": "/images/blog/release-gates-for-remote-qa-teams.svg",
    "accent": "#93C5FD",
    "bg": "#1F2937"
  },
  "mobile-app-qa-without-device-lab": {
    "src": "/images/blog/mobile-app-qa-without-device-lab.svg",
    "accent": "#F472B6",
    "bg": "#831843"
  },
  "how-much-does-outsourced-qa-cost": {
    "src": "/images/blog/how-much-does-outsourced-qa-cost.svg",
    "accent": "#A3E635",
    "bg": "#365314"
  },
  "signs-you-need-a-qa-partner": {
    "src": "/images/blog/signs-you-need-a-qa-partner.svg",
    "accent": "#818CF8",
    "bg": "#1E1B4B"
  },
  "manual-testing-still-matters": {
    "src": "/images/blog/manual-testing-still-matters.svg",
    "accent": "#FBBF24",
    "bg": "#422006"
  },
  "qa-checklist-before-launch": {
    "src": "/images/blog/qa-checklist-before-launch.svg",
    "accent": "#38BDF8",
    "bg": "#0F172A"
  },
  "verification-vs-validation-in-software-testing": {
    src: "/images/blog/verification-vs-validation-in-software-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "severity-vs-priority-in-software-testing": {
    src: "/images/blog/severity-vs-priority-in-software-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "smoke-testing-vs-sanity-testing": {
    src: "/images/blog/smoke-testing-vs-sanity-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "regression-testing-meaning-and-examples": {
    src: "/images/blog/regression-testing-meaning-and-examples.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "black-box-vs-white-box-testing": {
    src: "/images/blog/black-box-vs-white-box-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "sdlc-vs-stlc-explained": {
    src: "/images/blog/sdlc-vs-stlc-explained.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "bug-life-cycle-in-software-testing": {
    src: "/images/blog/bug-life-cycle-in-software-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "functional-vs-non-functional-testing": {
    src: "/images/blog/functional-vs-non-functional-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "manual-testing-vs-automation-testing": {
    src: "/images/blog/manual-testing-vs-automation-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "load-testing-vs-stress-testing": {
    src: "/images/blog/load-testing-vs-stress-testing.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "chatbot-and-llm-testing-checklist": {
    src: "/images/blog/chatbot-and-llm-testing-checklist.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  },
  "software-testing-interview-questions-2-years-experience": {
    src: "/images/blog/software-testing-interview-questions-2-years-experience.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  }
} as const;

export function getBlogCover(slug: string) {
  return blogCovers[slug] ?? {
    src: "/images/blog/free-qa-audit-what-you-get.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  };
}
