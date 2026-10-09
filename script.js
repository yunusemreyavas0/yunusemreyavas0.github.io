const root = document.documentElement;

// Tema düğmesi: seçim tarayıcıda saklanır, yoksa sistem ayarı geçerli olur
document.getElementById("theme").addEventListener("click", () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Dil: Türkçe metinler index.html'de durur, İngilizceleri burada
const en = {
  "nav.about": "about",
  "nav.projects": "projects",
  "nav.skills": "skills",
  "nav.education": "education",
  "nav.contact": "contact",
  "lede": "I'm a third-year Computer Engineering student, focused on Apple ecosystem engineering.",
  "about.1": "Alongside building iOS/macOS apps with Swift and SwiftUI, I made an engine and transmission simulator that runs on the web. I have an academic foundation in Object-Oriented Programming, Data Structures, Database Management and Web Programming.",
  "about.2": "I'm curious and open to learning and growing in different areas. I approach problems calmly with a focus on solutions, and I work well in a team.",
  "p1.title": "Engine & Transmission Simulator",
  "p1.desc": "An educational web app that runs in the browser: it calculates with physics formulas and shows live how car engines (inline, V, W, boxer, electric) and manual/automatic transmissions work. I built it with AI tools such as Claude Code, handled version control with Git/GitHub and published it on Netlify.",
  "p2.title": "Cross-Platform iOS/macOS App",
  "p2.status": "in progress",
  "p2.1": "I'm building a personal app for the Apple ecosystem that runs on both iOS and macOS.",
  "p2.2": "I'm integrating SwiftData for cross-device data sync and persistent storage.",
  "p2.3": "I manage deployment to physical devices and app configuration through Xcode.",
  "s.lang": "Programming languages",
  "s.tools": "Frameworks & tools",
  "s.concepts": "Concepts",
  "s.concepts.v": "Object-Oriented Programming (OOP), Data Structures, Database Management, Web Development",
  "s.spoken": "Languages",
  "s.spoken.v": "Turkish (native), English (A2)",
  "e.school": "Afyon Kocatepe University",
  "e.date": "Sep 2024 – present",
  "e.degree": "BSc in Computer Engineering · GPA 3.21 / 4.00",
  "c.mail": "Email",
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const tr = Object.fromEntries(nodes.map((el) => [el.dataset.i18n, el.textContent]));
const langButtons = [...document.querySelectorAll(".lang button")];

function setLang(lang) {
  const dict = lang === "en" ? en : tr;
  nodes.forEach((el) => { el.textContent = dict[el.dataset.i18n]; });
  root.lang = lang;
  langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

try {
  if (localStorage.getItem("lang") === "en") setLang("en");
} catch (e) {}
