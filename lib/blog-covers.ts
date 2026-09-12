export const blogCovers: Record<string, { src: string; accent: string; bg: string }> = {
  "free-qa-audit-what-you-get": {
    "src": "/blog/free-qa-audit-what-you-get.svg",
    "accent": "#3B82F6",
    "bg": "#0B1F4B"
  },
  "reduce-production-bugs-without-hiring-qa": {
    "src": "/blog/reduce-production-bugs-without-hiring-qa.svg",
    "accent": "#2DD4BF",
    "bg": "#0F3D3E"
  },
  "playwright-vs-selenium-for-startups": {
    "src": "/blog/playwright-vs-selenium-for-startups.svg",
    "accent": "#FB923C",
    "bg": "#7C2D12"
  },
  "qa-retainer-cost-vs-cost-of-bugs": {
    "src": "/blog/qa-retainer-cost-vs-cost-of-bugs.svg",
    "accent": "#4ADE80",
    "bg": "#14532D"
  },
  "qa-retainer-vs-hiring-in-house": {
    "src": "/blog/qa-retainer-vs-hiring-in-house.svg",
    "accent": "#60A5FA",
    "bg": "#1E3A8A"
  },
  "regression-testing-checklist-before-release": {
    "src": "/blog/regression-testing-checklist-before-release.svg",
    "accent": "#A78BFA",
    "bg": "#312E81"
  },
  "playwright-ci-for-startups": {
    "src": "/blog/playwright-ci-for-startups.svg",
    "accent": "#38BDF8",
    "bg": "#0C4A6E"
  },
  "how-to-brief-a-remote-qa-partner": {
    "src": "/blog/how-to-brief-a-remote-qa-partner.svg",
    "accent": "#C4B5FD",
    "bg": "#4C1D95"
  },
  "api-testing-before-ui-automation": {
    "src": "/blog/api-testing-before-ui-automation.svg",
    "accent": "#22D3EE",
    "bg": "#164E63"
  },
  "saas-performance-testing-p95-latency": {
    "src": "/blog/saas-performance-testing-p95-latency.svg",
    "accent": "#F87171",
    "bg": "#7F1D1D"
  },
  "release-gates-for-remote-qa-teams": {
    "src": "/blog/release-gates-for-remote-qa-teams.svg",
    "accent": "#93C5FD",
    "bg": "#1F2937"
  },
  "mobile-app-qa-without-device-lab": {
    "src": "/blog/mobile-app-qa-without-device-lab.svg",
    "accent": "#F472B6",
    "bg": "#831843"
  },
  "how-much-does-outsourced-qa-cost": {
    "src": "/blog/how-much-does-outsourced-qa-cost.svg",
    "accent": "#A3E635",
    "bg": "#365314"
  },
  "signs-you-need-a-qa-partner": {
    "src": "/blog/signs-you-need-a-qa-partner.svg",
    "accent": "#818CF8",
    "bg": "#1E1B4B"
  },
  "manual-testing-still-matters": {
    "src": "/blog/manual-testing-still-matters.svg",
    "accent": "#FBBF24",
    "bg": "#422006"
  },
  "qa-checklist-before-launch": {
    "src": "/blog/qa-checklist-before-launch.svg",
    "accent": "#38BDF8",
    "bg": "#0F172A"
  }
} as const;

export function getBlogCover(slug: string) {
  return blogCovers[slug] ?? {
    src: "/blog/free-qa-audit-what-you-get.svg",
    accent: "#3B82F6",
    bg: "#0B1F4B",
  };
}
